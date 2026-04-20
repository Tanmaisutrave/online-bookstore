import React, { useState } from 'react';
import { contactAPI } from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await contactAPI.submitContact(formData);
      
      if (response.message) {
        setSuccess(true);
        alert(response.message);
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Hero Section */}
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Get in Touch <span className="text-pink-500">With Us</span>
          </h1>
          <p className="mt-6 text-lg">
            We would love to hear from you. Feel free to contact us for any questions, feedback, or collaboration.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Owner Name Card */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border p-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-pink-500 mb-4">👤</div>
              <h3 className="font-bold text-lg">Owner</h3>
              <p className="mt-2">Tanmai Sutrave</p>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border p-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-pink-500 mb-4">📱</div>
              <h3 className="font-bold text-lg">Mobile</h3>
              <p className="mt-2">7730859903</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border p-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-pink-500 mb-4">📧</div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="mt-2 break-all">tanmaysutrave@gmail.com</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border p-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-pink-500 mb-4">📍</div>
              <h3 className="font-bold text-lg">Address</h3>
              <p className="mt-2">MLR Institute of Technology, Dundigal, Gandimaisamm</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 mb-16 flex justify-center">
          <div className="card bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border w-full max-w-2xl">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-center justify-center mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text dark:text-white">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input input-bordered w-full dark:bg-slate-800 dark:text-white dark:border-gray-600"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text dark:text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full dark:bg-slate-800 dark:text-white dark:border-gray-600"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text dark:text-white">Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full dark:bg-slate-800 dark:text-white dark:border-gray-600"
                    required
                  />
                </div>

                {/* Message */}
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text dark:text-white">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="textarea textarea-bordered h-32 dark:bg-slate-800 dark:text-white dark:border-gray-600"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-control">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn bg-pink-500 text-white hover:bg-pink-700 border-none w-full disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">Find Us Here</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8537842935847!2d78.3267!3d17.5449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e2f6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sMLR%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MLR Institute Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
