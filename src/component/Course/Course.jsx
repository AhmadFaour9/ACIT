import React from 'react'
import './Course.css'
const Course = ({ img, header, description, color }) => {
    return (
        <>
            <div className='course d-flex flex-column align-items-center justify-content-evenly ' style={{ backgroundColor: color }}>
                <div>
                    <img src={img} className='image-course ' alt='logo' />

                </div>
                <h4>{header}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Course