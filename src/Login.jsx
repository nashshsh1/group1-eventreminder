import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';
import './App.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/login', { email, password });

            if (response.data.token) {
                localStorage.setItem('auth_token', response.data.token);
                navigate('/users');
            }
        } catch {
            setError('Invalid login credentials');
            setIsInvalid(true);
            setTimeout(() => setIsInvalid(false), 500);
        }
    };

    return (
        <div className="container">
            <div className="left-section">
                <h1>EVENT REMINDER</h1>
                <p>Set your day with us!</p>
            </div>
            <div className="right-section">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={isInvalid ? 'invalid' : ''}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={isInvalid ? 'invalid' : ''}
                    />
                    <button
                        type="submit"
                        className={isInvalid ? 'invalid' : ''}
                    >
                        Login
                    </button>
                    {error && <p className="error-text">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;



