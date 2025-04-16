import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
});

// Login user
export const login = async (email, password) => {
  try {
    const response = await API.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Login failed';
  }
};

// Register user
export const register = async (name, email, password) => {
  try {
    const response = await API.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Registration failed';
  }
};