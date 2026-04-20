import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/Contact';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
