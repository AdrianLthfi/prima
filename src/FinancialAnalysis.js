import axios from "axios";
import React, { useState } from "react";
import { FaPlus, FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import './FinancialAnalysis.css';
import primaSeaLogo2 from './img/pkss-logo 1.png';
import primaSeaLogo1 from './img/prima-sea-logo2.png';
import primasidebar from './img/prima-sidebar.png';
import profilePic from './img/profile.png';

const Primasea = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    if (!question) {
      alert("Please provide a question.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/ask", { question }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      const answerText = response.data.answer;

      const formattedAnswer = formatAnswer(answerText);

      setAnswer(formattedAnswer);
      animateText(formattedAnswer);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("An error occurred while fetching the answer.");
    } finally {
      setLoading(false);
    }
  };

  const formatAnswer = (text) => {
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    formattedText = formattedText.replace(/\n/g, "<br/>");
    return formattedText;
  };

  const animateText = (text) => {
    let index = 0;
    let words = text.split(" ");

    setDisplayedAnswer("");

    const interval = setInterval(() => {
      setDisplayedAnswer((prev) => prev + " " + words[index]);
      index += 1;

      if (index === words.length) {
        clearInterval(interval);
      }
    }, 120);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleFinancialAnalysisClick = () => {
    navigate('/financial-analysis');
  };

  return (
    <div className="primasea-container">
      <div className="sidebar">
        <div className="menu">
          <h3>Main Menu</h3>
          <ul>
            <li>
              <img src={primasidebar} alt="PrimaSEA Chat" className="menu-icon" />
              <span>PrimaSEA Chat</span>
            </li>
            <li onClick={handleFinancialAnalysisClick}>
              <img src={primasidebar} alt="Financial Analysis" className="menu-icon" />
              <span>Financial Analysis</span>
            </li>
          </ul>
        </div>
        <div className="recents">
          <h3>Recents</h3>
          <ul>
            <li>Coming Soon!</li>
          </ul>
        </div>
        <div className="yesterday">
          <h3>Yesterday</h3>
          <ul>
            <li>Coming Soon!</li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="header">
          <div className="header-left">
            <img src={primaSeaLogo2} alt="Prima SEA" className="header-logo2" />
            <img src={primaSeaLogo1} alt="Prima SEA" className="header-logo1" />
          </div>
          <div className="profile-pic-container">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
        </div>
        <div className="main-content">
          <h2>Welcome Sis Adrian Luthfi, What can I help with?</h2>
          <div className="search-bar">
            <FaPlus onClick={() => alert("Upload document feature coming soon!")} />
            <input
              type="text"
              placeholder="Enter your question"
              value={question}
              onChange={handleQuestionChange}
              onKeyDown={handleKeyPress}
            />
            <FaSearch onClick={handleSubmit} />
          </div>
          {displayedAnswer && (
            <div className="answer">
              <p dangerouslySetInnerHTML={{ __html: displayedAnswer }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Primasea;