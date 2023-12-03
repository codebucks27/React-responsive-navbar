import React, { useState } from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import { Profile } from '../profile/Profile';
const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRegistration = () => {
        // Perform registration logic here
        // For simplicity, let's assume the registration is successful if all fields are non-empty
        if (username !== ''  && password !== '') {
            alert('Registration successful!');
            <Link to={'/profile'} />
            // Redirect to login page or perform any other action
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="registration-container">
            <h1>Signup</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="button" onClick={handleRegistration}>
                    Register
                </button>
                <p>Do you have account ? <Link to={'/login'}>Login</Link> </p>
            </form>
        </div>
    );
};

export default RegistrationPage;