import React, { useState } from "react";
import Register from "../Pages/Register";
import "../Styles/LoginRegister.css";


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="formContainer">
      <h2>Login</h2>
      <form className="loginRegisterForm" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gemail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? </p>
      <button className="linkBtn" onClick={() => props.onFormSwitch('register')}>Register</button>
    </div>
  );
};

const LoginControl = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="form-switcher">
      {currentForm === "login" ? (
        <Login onFormSwitch={handleFormSwitch} />
      ) : (
        <Register onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
};

export default LoginControl;
