import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { bookAPI } from '../services/api';

function Freebook() {
  const [freeBooks, setFreeBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFreeBooks = async () => {
      try {
        const data = await bookAPI.getFreeBooks();
        setFreeBooks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching free books:', error);
        setFreeBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFreeBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return( <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
      <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
      <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolar repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
    </div>
  
  {loading ? (
    <div className='mt-8 text-center'>
      <span className="loading loading-spinner loading-md text-pink-500"></span>
    </div>
  ) : (
    <div>
      <Slider {...settings}>
        {freeBooks.map((item)=>(
          <Cards item={item} key={item._id}/>
        ))}
      </Slider>
    </div>
  )}
  </div>
  </>
  );
}
export default Freebook;
