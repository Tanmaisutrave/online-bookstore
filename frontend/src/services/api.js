// API Base URL
const API_BASE_URL = 'https://online-bookstore-m02q.onrender.com/api';

// Book API
export const bookAPI = {
  getAllBooks: async () => {
    const response = await fetch(`${API_BASE_URL}/book`);
    return response.json();
  },

  getFreeBooks: async () => {
    const response = await fetch(`${API_BASE_URL}/book/free`);
    return response.json();
  },

  getBookById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/book/${id}`);
    return response.json();
  }
};

// User API
export const userAPI = {
  signup: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });
    return response.json();
  }
};

// Contact API
export const contactAPI = {
  submitContact: async (contactData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });
    return response.json();
  }
};