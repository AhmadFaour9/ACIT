import React from 'react'
import './Courses.css'
import { Course } from '../../../component'
const Courses = () => {
  return (
    <>
<div className='courses container-fluid d-flex flex-wrap align-items-center justify-content-center gap-3'>
<Course img={require('../../../assets/images/network_svgrepo.com.png')} color={'#FFF1F1'} header={"الشبكات"} description={"4 كورسات"}/>
<Course img={require('../../../assets/images/network_svgrepo.com.png')} color={'#FFF1F1'} header={"الشبكات"} description={"4 كورسات"}/>
<Course img={require('../../../assets/images/network_svgrepo.com.png')} color={'#FFF1F1'} header={"الشبكات"} description={"4 كورسات"}/>
<Course img={require('../../../assets/images/network_svgrepo.com.png')} color={'#FFF1F1'} header={"الشبكات"} description={"4 كورسات"}/>
<Course img={require('../../../assets/images/network_svgrepo.com.png')} color={'#FFF1F1'} header={"الشبكات"} description={"4 كورسات"}/>
<Course img={require('../../../assets/images/network_svgrepo.com.png')} color={'#FFF1F1'} header={"الشبكات"} description={"4 كورسات"}/>
</div>
    </>
  )
}

export default Courses