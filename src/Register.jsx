// src/Register.js
import React, { useState } from 'react';
import { TextField, Button, DialogActions, Typography, CircularProgress } from '@mui/material';
import './App.css'; // Import your CSS file
import axios from 'axios';

const Register = ({ onClose, onNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        onNext(); // Proceed to next step after successful registration
      }
    } catch (err) {
      console.error('Registration error:', err.response || err.message);
      setError('Failed to register. Please check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup"> {/* Apply the custom .popup class here */}
      <Typography variant="h5" component="h2" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        fullWidth
        type="password"
        margin="normal"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <DialogActions>
        <Button
          onClick={handleRegister}
          color="primary"
          variant="contained"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Next'}
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </div>
  );
};

export default Register;
