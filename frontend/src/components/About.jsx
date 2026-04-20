import React from 'react';

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Hero Section */}
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            We're delighted to have you <span className="text-pink-500">here!</span>
          </h1>
          <p className="mt-6 text-lg">
            Welcome to bookStore, your ultimate destination for learning and growth. We are dedicated to providing quality educational resources, books, and courses to help students and professionals enhance their knowledge and skills.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Our <span className="text-pink-500">Mission</span>
          </h2>
          <div className="card bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border p-8">
            <p className="text-lg text-center">
              Our mission is to empower learners by providing access to high-quality educational content. We believe that education should be accessible to everyone, and we strive to make learning enjoyable, affordable, and effective. Whether you're looking to master a new skill, explore a subject, or advance your career, we're here to support your journey.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose <span className="text-pink-500">Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quality Learning Card */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <div className="card-body items-center text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="card-title text-xl">Quality Learning</h3>
                <p className="mt-2">
                  Access curated content from trusted sources. Our collection includes books and courses designed to provide comprehensive knowledge and practical skills.
                </p>
              </div>
            </div>

            {/* Expert Resources Card */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <div className="card-body items-center text-center">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="card-title text-xl">Expert Resources</h3>
                <p className="mt-2">
                  Learn from the best with resources created by industry experts and experienced educators. Get insights that matter and knowledge that lasts.
                </p>
              </div>
            </div>

            {/* Free Courses Card */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <div className="card-body items-center text-center">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="card-title text-xl">Free Courses</h3>
                <p className="mt-2">
                  Start your learning journey without any cost. We offer a variety of free courses to help you explore new topics and develop new skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Section */}
        <div className="mt-16 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Meet the <span className="text-pink-500">Owner</span>
          </h2>
          <div className="flex justify-center">
            <div className="card bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border w-full max-w-2xl">
              <div className="card-body items-center text-center">
                <div className="avatar placeholder mb-4">
                  <div className="bg-pink-500 text-white rounded-full w-24">
                    <span className="text-4xl">TS</span>
                  </div>
                </div>
                <h3 className="card-title text-2xl">Tanmai Sutrave</h3>
                <p className="text-pink-500 font-semibold">Website Owner & Developer</p>
                <p className="mt-4 text-lg">
                  Hello! I'm Tanmai Sutrave, the creator of bookStore. I built this platform with a vision to help students and learners access quality educational resources easily. My goal is to create a space where everyone can learn something new every day and grow both personally and professionally. Thank you for being part of this journey!
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="badge badge-outline">Developer</div>
                  <div className="badge badge-outline">Educator</div>
                  <div className="badge badge-outline">Innovator</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-16 mb-16">
          <div className="card bg-pink-500 text-white shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                To become the leading platform for accessible education, empowering millions of learners worldwide to achieve their dreams through knowledge and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
