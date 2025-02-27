import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FinancialAnalysis from './FinancialAnalysis';
import ForgotPasswordPage from './ForgotPasswordPage';
import HomePage from './Homepage';
import LoginPage from './LoginPage';
import Primasea from './Primasea';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/primasea" element={<Primasea />} />
        <Route path="/financial-analysis" element={<FinancialAnalysis />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
