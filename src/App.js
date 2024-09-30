import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="content-container">
          <div className="input-container">
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="login-btn" type="submit">Login</button>
          <div className="register-link">
            Not registered? <a href="#">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
