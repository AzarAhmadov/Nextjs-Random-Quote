"use client"
import React, { useState } from 'react';
import { GoQuote } from 'react-icons/go';
import { BiRightArrowAlt } from 'react-icons/bi';

const Page = () => {
  const [quate, setQuate] = useState({
    "quote": "If you want to lift yourself up, lift up someone else.",
    "author": "Booker T. Washington"
  })

  const getQuote = async () => {
    const res = await fetch('https://dummyjson.com/quotes/random')
    const data = await res.json()
    setQuate(data)
  }

  return (
    <div className='quote'>
      <div className="container">
        <div className="content">
          <p>
            {quate.quote}
          </p>
          <span>
            {quate.author}
          </span>
          <button onClick={getQuote}>
            <BiRightArrowAlt />
          </button>
          <GoQuote size={50} className='icon' />
        </div>
      </div>
    </div>
  );
}

export default Page;
