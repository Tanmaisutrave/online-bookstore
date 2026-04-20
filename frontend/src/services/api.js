// API Base URL
const API_BASE_URL = 'http://localhost:4001/api';

// Book API
export const bookAPI = {
  // Get all books
  getAllBooks: async () => {
    const response = await fetch(`${API_BASE_URL}/book`);
    return response.json();
  },

  // Get free books only
  getFreeBooks: async () => {
    const response = await fetch(`${API_BASE_URL}/book/free`);
    return response.json();
  },

  // Get book by ID
  getBookById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/book/${id}`);
    return response.json();
  }
};

// User API
export const userAPI = {
  // Signup
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

  // Login
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
  // Submit contact form
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
