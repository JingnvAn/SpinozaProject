import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config";
import '../css/Login.css';
import loginImg from "../login.jpeg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/Container')
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};


  return (
    <div className="login">
      <div className="login__container">
        
        <div className="image">
          <img src={loginImg} />
        </div>
        
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        
      </div>
      <div className="footer">
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;