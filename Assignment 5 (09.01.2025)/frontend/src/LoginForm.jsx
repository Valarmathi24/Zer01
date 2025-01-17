import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{8,})/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setMessage('Invalid email format.');
      return;
    }
    if (!passwordRegex.test(password)) {
      setMessage('Password must be at least 8 characters long and include a special character.');
      return;
    }
    if (isSignup && password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    const url = isSignup ? 'http://localhost:5000/signup' : 'http://localhost:5000/login';
    try {
      const response = await axios.post(url, { email, password });
      setMessage(response.data.message);
      if (isSignup && response.data.success) {
        setMessage('Signup successful! You can now log in.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">{isSignup ? 'Signup' : 'Login'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      {isSignup && (
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Confirm Password:</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600"
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      )}
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
        {isSignup ? 'Signup' : 'Login'}
      </button>
      <p className="mt-4 text-center">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span
          onClick={() => {
            setIsSignup(!isSignup);
            setMessage('');
          }}
          className="text-indigo-600 cursor-pointer font-medium"
        >
          {isSignup ? 'Login' : 'Signup'}
        </span>
      </p>
      {message && <p className={`mt-4 text-center ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
    </form>
  );
};

export default LoginForm;
