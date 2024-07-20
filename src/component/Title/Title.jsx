import React from 'react';
import './Title.css';

const Title = ({ text, text2, valid }) => {
  return (
    <>
      <h4 className="title-blue">{text}</h4>
      {valid && <h2 className='title-black'>{text2}</h2>}
    </>
  );
};

export default Title;