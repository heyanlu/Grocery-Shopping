import React, { useState } from "react";
import "../Styles/LoginRegister.css";


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="formContainer">
            <h2>Register</h2>
        <form className="loginRegisterForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text"
                placeholder="full Name" 
                id="name" 
                name="name" 

            />
            <label htmlFor="email">email</label>
            <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="youremail@gmail.com" 
                id="email" 
                name="email" 
            />
            <label htmlFor="password">password</label>
            <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" 
            />
            <button type="submit">Login</button>
        </form>
        <p>Already have an account? </p>
        <button className="linkBtn" onClick={() => props.onFormSwitch('login')}>Login</button>
    </div>
    )
}

export default Register

