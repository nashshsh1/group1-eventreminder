import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const App = () => {
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isConfirmEmailPopupOpen, setIsConfirmEmailPopupOpen] = useState(false);

  const handleSignupLinkClick = (event) => {
    event.preventDefault();
    console.log('Signup link clicked');
    setIsSignupPopupOpen(true);
  };

  const handleCloseSignupPopup = () => {
    console.log('Closing signup popup');
    setIsSignupPopupOpen(false);
  };

  const handleNextButtonClick = () => {
    console.log('Proceeding to confirm email');
    setIsSignupPopupOpen(false);
    setIsConfirmEmailPopupOpen(true);
  };

  const handleCloseConfirmEmailPopup = () => {
    console.log('Closing confirm email popup');
    setIsConfirmEmailPopupOpen(false);
  };

  const handleSignUpButtonClick = () => {
    console.log('Signup complete, redirecting');
    window.location.href = 'dashboard';
  };

  const handleReviewDetailsLinkClick = () => {
    console.log('Reviewing details');
    setIsConfirmEmailPopupOpen(false);
    setIsSignupPopupOpen(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="container">
                <div className="left-section">
                  <h1>EVENT REMINDER</h1>
                  <p>Set your day with us!</p>
                </div>
                <div className="right-section">
                  <h2>Login</h2>
                  <Login />
                  <a href="#" id="signup-link" onClick={handleSignupLinkClick}>
                    Need an account? SIGN UP
                  </a>

                  {/* Signup Popup */}
                  {isSignupPopupOpen && (
                    <Register
                      onClose={handleCloseSignupPopup}
                      onNext={handleNextButtonClick}
                    />
                  )}

                  {/* Confirm Email Popup */}
                  {isConfirmEmailPopupOpen && (
                    <div className="popup" id="confirm-email-popup">
                      <span
                        className="close-popup"
                        onClick={handleCloseConfirmEmailPopup}
                      >
                        &times;
                      </span>
                      <h2>Confirm your Email</h2>
                      <p>We'll send you a code. Please check your email.</p>
                      <input type="text" placeholder="Enter code" />
                      <button onClick={handleSignUpButtonClick}>Sign up</button>
                      <a
                        href="#"
                        id="review-details-link"
                        onClick={handleReviewDetailsLinkClick}
                      >
                        Review Your Details
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
