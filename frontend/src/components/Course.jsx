import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { bookAPI } from '../services/api';
import { Link } from 'react-router-dom';

function Course() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await bookAPI.getAllBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus accusamus accusantium sed architecto odio, nisi expedita quas quidem nesciunt debitis dolore non aspernatur praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!</p>
            <Link to="/">
                <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            
            </Link>
        </div>
        
        {loading ? (
          <div className='mt-12 text-center'>
            <span className="loading loading-spinner loading-lg text-pink-500"></span>
            <p className='mt-4'>Loading books...</p>
          </div>
        ) : (
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
              {
                  books.map((item)=>(
                      <Cards key={item._id} item={item}/>
                  ))
              }
          </div>
        )}

    </div>
    </>
  )
}

export default Course
