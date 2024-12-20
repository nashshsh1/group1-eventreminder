
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
            <div className="left-section" style={{ textAlign: 'center', marginTop: '30px' }}>
                <h1 style={{ color: '#2c3e50', fontSize: '40px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>EVENT REMINDER</h1>
                <p style={{ color: '#4a4a4a', fontSize: '18px' }}>Set your day with us!</p>
            </div>
            <div className="right-section" style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ color: '#4a4a4a' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={isInvalid ? 'invalid' : ''}
                        style={{ width: '100%', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '15px' }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={isInvalid ? 'invalid' : ''}
                        style={{ width: '100%', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}
                    />
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '15px', backgroundColor: '#4a4a4a', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Login
                    </button>
                    {error && <p style={{ color: '#ff0000', fontSize: '14px', marginTop: '10px' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;
