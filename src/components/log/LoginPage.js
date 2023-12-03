import React, { useState } from 'react';
import './LoginPage.css';

import { Link } from 'react-router-dom';
import { Profile } from '../profile/Profile';

const LoginPage = () => {
    //const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Perform login authentication here
        // For simplicity, let's assume the login is successful if the username and password are non-empty
        if (username == 'intern' && password == 'aasy') {
            setLoggedIn(true);
            <Link to={'/profile'} />
        }
    };

    if (loggedIn) {
        // Redirect to profile page if logged in
        return (
            <div>

                {/* Display user profile information here */}
                <Profile />
            </div>
        );
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
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
                <button type="button" onClick={handleLogin}>Login</button>
                <p>Havn't you account ? <Link to={'/register'} >Register</Link></p>
            </form>
        </div>
    );
};

export default LoginPage;

