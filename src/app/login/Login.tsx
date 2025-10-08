
import { useState } from "react";
import "~/login/Login.css"; 

export default function Login({ onLogin }: { onLogin: (user: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      onLogin(email); 
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 id="title">Sign In</h1>
        <div className="input-group">
          <div className="input-field">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-field">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p>
            Forgot password? <a href="#">Click here!</a>
          </p>

          <div className="button-field">
            <button type="button" onClick={handleLogin}>
              Sign in
            </button>
            <button type="button">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}