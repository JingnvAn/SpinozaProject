import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth} from "firebase/auth";
import {signInWithEmailAndPassword} from '../Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [user, loading, error] = useAuthState(auth);
//   const history = useHistory();

//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) history.replace("/dashboard");
//   }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
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