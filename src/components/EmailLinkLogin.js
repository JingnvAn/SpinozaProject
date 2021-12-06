import React, { useState } from 'react'
import { auth, actionCodeSettings } from "../firebase/config";
import '../css/Login.css';
import loginImg from "../login.jpeg";


function EmailLinkLogin() {
    const [email, setEmail] = useState("");

    const sendSignInLinkToEmail = async (email, actionCodeSettings) => {
        try{
            await auth.sendSignInLinkToEmail(email, actionCodeSettings)
            window.localStorage.setItem('emailForSignIn', email);
            alert('The link has been sent!');
        }catch(error){
            alert(error);
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
          </div>       
        </div>
        <div className="footer">
          <button
            className="login__btn"
            onClick={() => sendSignInLinkToEmail(email, actionCodeSettings)}
          >
            Send
          </button>
        </div>
      </div>
    );
}

export default EmailLinkLogin
