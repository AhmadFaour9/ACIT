import React from 'react'
import './User.css'
import defaultImgSrc from '../../assets/images/Group 1000001165.png';

const User = ({ img, title, email, number,url }) => {

    return (
        <>
            <div className='user-container container-fluid m-0 '>
                <img src={img || defaultImgSrc} alt='' />
                <div>
                    <h4>{title}</h4>
                    <p>{email}</p>
                    <a className='href-hidden' href={`${url||'#'}`}>تعديل الحساب</a>
                </div>
                <div className='button-url'>
                    <button className=" w-50 login-btn btn-primary" >
                        #{number}
                    </button>
                    <a href={`${url||'#'}`}>تعديل الحساب</a>
                </div>  </div>
        </>
    )
}

export default User