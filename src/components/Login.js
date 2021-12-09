import React, { useEffect, useState, Link} from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from '../context/AuthContext'
import { auth } from "../firebase/config";
import '../css/Login.css';
import loginImg from "../login.jpeg";
import EmailLinkLogin from "./EmailLinkLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailLink, changeToEmailLink] = useState(false);
  const { login } = useAuth();

  const history = useHistory();

  const changeSigninMethod = () => {
    if(isEmailLink){
      changeToEmailLink(false);
    }else{
      changeToEmailLink(true);
    }
  }

  const signInWithEmailAndPassword = async (email, password) => {
      try {
        await login(email, password);
        history.push('/ide')
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
  };

  const emailPassword = (
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
  )

  const emailLink = (
    <EmailLinkLogin></EmailLinkLogin>
  )

  return (
    <div className="login">
      {isEmailLink ? emailLink : emailPassword}
      <div className="footer">
        <button 
          className="login__btn" 
          onClick={changeSigninMethod}>
        {isEmailLink ? 'Use email and password' : 'Send a sign in link to your email'}
        </button>
      </div>
    </div>
  );
}
export default Login;