import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import './Rating.css'

const Rating = ({ rate }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rate)) {
      stars.push(<FaStar key={i} color="#FFC107" />);
    } else if (i === Math.floor(rate) && rate % 1 !== 0) {
      stars.push(<IoIosStarHalf key={i} color="#FFC107"  />);
      
    } else {
      stars.push(<FaRegStar key={i} color="#ccc" />);
    }
  }

  return (
    <div dir='ltr' className='rate d-flex align-items-center justify-content-center'>
      
      <span >({rate % 1 === 0 ? rate.toFixed(1) : rate})</span>
      {stars}
    </div>
  );
};

export default Rating;