import React from 'react'
import './CourseCardWithDetails.css'
import Rating from '../Rating/Rating'
const CourseCardWithDetails = ({img, title,date, time,lesson,student,totalHoures,price,rate}) => {
  return (
    <>
        <div className='course-detail d-flex '>
        <div className='img'> <img src={img} alt=''/> <Rating  rate={rate}/></div>
            <div className='card-course d-flex flex-column '>
            <div><p className='title-card'>{title}</p></div>
                <div className='d-flex justify-content-center  '>
                    <div><p className='date p-0 mt-2' ><img src={require('../../assets/images/clock_7847095 1.png')} alt={'logo'}/>{date}</p></div>
                    <div><p className='date p-0 mt-2'><img src={require('../../assets/images/calendar_9073170 1.png')} alt={'logo'}/>{time}</p></div>

                </div>
                <div className='d-flex justify-content-evenly'>
                <div><p className='course-number p-0'><img src={require('../../assets/images/blackboard_svgrepo.com.png')} alt={'logo'}/>{lesson}درس  </p></div>
                <div><p className='course-number p-0'> <img src={require('../../assets/images/student-head_svgrepo.com.png')} alt={'logo'}/>{student}طالب</p></div>
                <div><p className='course-number p-0'><img src={require('../../assets/images/time_svgrepo.com.png')} alt={'logo'}/>{totalHoures}ساعة </p></div>

                </div>
                <div className='buttons d-flex justify-content-between'>
                
                    <p className='price'><span>$</span> {price}</p>
                    <button className="button top-btn btn mt-2 ">إبدأ الآن</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CourseCardWithDetails