import React from 'react';
import Navbar from '../components/Navbar';
import AboutContent from '../components/About';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <AboutContent />
      </div>
      <Footer />
    </>
  );
}

export default About;
