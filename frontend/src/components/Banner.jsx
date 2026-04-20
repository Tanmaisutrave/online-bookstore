import React from 'react'
import banner from "../../public/Banner.jpg";
function Banner() {
  return (
  <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
            <div className="space-y-12">
                <h1 className="text-4xl font-bold">Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
            <p className="text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.144.46.206.714.206.254 0 .508-.062.714-.206l6.598-4.185c.025-.012.05-.023.076-.032V4.5A1.5 1.5 0 0 0 14.5 3h-12Z" />
                    <path d="M15 6.954 8.978 9.862a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11A1.5 1.5 0 0 0 15 11.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
            </label>
            </div>
            <button className="btn mt-6 bg-pink-500 hover:bg-pink-600 text-white border-none">
                Secondary
            </button>

        </div>
        <div className=" order-1 w-full md:w-1/2">
            <img src={banner} className="w-92 h-92" alt="Banner" />
        </div>
    </div>
  </>
  );
}

export default Banner
