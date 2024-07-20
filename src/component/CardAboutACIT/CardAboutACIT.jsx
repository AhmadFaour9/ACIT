import React from 'react'
import './CardAboutACIT.css'
import Title from '../Title/Title'
const CardAboutACIT = ({img,title,description}) => {
  return (
    <div className='card-of-about position-relative col-md-3 col-sm-12'>
  <div className='topping d-flex align-items-center '>
      <img src={img} alt='img'/>
      <Title text={title}/>
  </div>
    <p>{description}</p>
    <img className='position-absolute' src={require('../../assets/images/Rectangle 49.png')} alt='rec' />
    </div>
  )
}

export default CardAboutACIT