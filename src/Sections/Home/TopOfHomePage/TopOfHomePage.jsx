import React from 'react'
import './TopOfHomePage.css'
import { Carding } from '../../../component'
const TopOfHomePage = () => {
    return (
        <>
            <div  className='top-home container-fluid p-0 mb-0 m-0 row '>
                <div className='rectan '></div>
                <div className='text-top d-flex flex-column justify-content-center align-items-center row col-4'>
                    <h3> إكتشف عالم <span> جديد</span> من   <span>المعرفة</span> </h3>
                    <p> نفتح ابواب المعرفة والتطور لك ، انضم الينا اليوم
                        وابدأ رحلة تعلم لاتنسى</p>
                    <button className="top-btn btn ">إبدأ الآن</button>
                </div>

                
            </div>
            <div className='foot-of-top container-fluid m-0 p-0 mb-0 row col-12 d-flex align-items-center justify-content-center flex-wrap'>
                    <div className='inside d-flex align-items-center justify-content-between col-md-12 col-sm-12 m-2'>
                        <Carding imgSrc={require('../../../assets/images/building-svgrepo-com 1.png')} header={'100+'} description={'منشأة مستفيدة'}/>
                        <Carding imgSrc={require('../../../assets/images/person.png')} header={'5000+'} description={'متدرب محترف'}/>
                        <Carding imgSrc={require('../../../assets/images/training-achievement-medal-svgrepo-com 1.png')} header={'10500+'} description={'دورة معتمدة'}/>
                        <Carding style={{translate: '20px'}} imgSrc={require('../../../assets/images/archive.png')} header={'500+'} description={'جلسة تدريبية'}/>

                    </div>
                </div>

        </>
    )
}

export default TopOfHomePage