import React from 'react'
import './Carding.css'
const Carding = ({imgSrc,header,description}) => {
  return (
    <>
           <div className='carding d-flex flex-column align-items-center g-5 justify-content-center col-md-3 col-sm-6'>
                        <img src={imgSrc} alt='logo'/>
                             <h4>{header}</h4>
                            <p>{description}</p>
                        </div>
                    
    </>
  )
}

export default Carding