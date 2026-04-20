import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import { userAPI } from '../services/api';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await userAPI.signup(formData);
      
      if (response.message === 'User created successfully') {
        alert('Signup successful! Please login.');
        navigate('/');
        setTimeout(() => {
          document.getElementById("my_modal_3")?.showModal();
        }, 300);
      } else {
        setError(response.message || 'Signup failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="border rounded-lg p-6 shadow-lg bg-white dark:bg-slate-800 dark:text-white">
            <div className="relative">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </div>
            <h3 className="font-bold text-lg">Signup</h3>
            
            {error && (
              <div className="alert alert-error mt-4 text-sm p-2 rounded">
                {error}
              </div>
            )}

            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input 
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder='Enter your fullname' 
                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600'
                required
                minLength={3}
              />
            </div>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email' 
                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600'
                required
              />
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter your password' 
                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600'
                required
                minLength={6}
              />
            </div>
            <div className='flex justify-around mt-4 items-center'>
              <button 
                type="submit"
                disabled={loading}
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 disabled:opacity-50'
              >
                {loading ? 'Signing up...' : 'Signup'}
              </button>
              <p className='text-sm'>
                Have account?{" "}
                <button 
                  type="button"
                  className='underline text-blue-500 cursor-pointer hover:text-blue-700' 
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Login />
    </div>
  )
}

export default Signup
