import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userAPI } from '../services/api';

function Login() {
  const [formData, setFormData] = useState({
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
      const response = await userAPI.login(formData);
      
      if (response.token) {
        // Store token and user info
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        alert(`Welcome back, ${response.user.fullname}!`);
        document.getElementById("my_modal_3").close();
        window.location.reload(); // Refresh to update UI
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            
            {error && (
              <div className="alert alert-error mt-4 text-sm p-2 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
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
                  />
              </div>
              <div className='flex justify-around mt-4 items-center'>
                  <button 
                    type="submit"
                    disabled={loading}
                    className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 disabled:opacity-50'
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                  <p className='text-sm'>
                      Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer hover:text-blue-700' onClick={()=>document.getElementById("my_modal_3").close()}>Signup</Link>{""}
                  </p>
              </div>
            </form>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
       </dialog>
    </div>
  )
}

export default Login
