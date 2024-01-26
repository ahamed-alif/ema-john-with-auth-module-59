import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }

  if(user) {
    navigate('/inventory')
  }

  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Passsword</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
          </div>
          <p style={{color: 'red'}}>{error?.message}</p>
          <input className="form-submit" type="submit" value="login" />
        </form>
        <p>
            New to ema-john? <Link className="form-link" to='/signup'>Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
