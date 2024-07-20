import React from 'react'
import './CoursesStatePage.css'
import { CoursesState, User } from '../../component'
import {Footer} from '../../Sections'
const CoursesStatePage = () => {
  const data = [
    { name: 'ccna course', date: new Date().getDate()+'/'+new Date().getDay()+'/'+new Date().getFullYear(), price: '200.00ر.س', state: 'تم الدفع', link: '#', leclink: 'ccna-lectures' },
    { name: 'ccna course', date: new Date().getDate()+'/'+new Date().getDay()+'/'+new Date().getFullYear(), price: '200.00ر.س', state: 'تم الدفع', link: '#', leclink: 'ccna-lectures' },
    { name: 'ccna course', date: new Date().getDate()+'/'+new Date().getDay()+'/'+new Date().getFullYear(), price: '200.00ر.س', state: 'تم الدفع', link: '#', leclink: 'ccna-lectures' }
  ];
  return (
    <div className='state-page container-fluid row col-12 p-0 m-0'>
    <div className='top-of-pay row col-12 p-0 m-0'></div>
        <div className='user-section col-md-3 m-md-3 m-sm-0  col-sm-10'><User title='اسم الطالب' email={'example@user.com'} number={data.length}/></div>
        <div className='course-state-section m-md-3 m-sm-0 col-md-8 col-sm-10'><CoursesState data={data}/></div>
        <Footer/>
    </div>
  )
}

export default CoursesStatePage