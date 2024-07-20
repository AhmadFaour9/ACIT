import React from 'react'
import { Title } from '../../../component'
import './OurProgress.css'
import { Courses, CoursesWithDetails, Oppenions } from '..'
import AboutOurNote from '../AboutOurNote/AboutOurNote'
const OurProgress = () => {
    return (
        <>
            <div className='content'>
                <div className='progresses'>
                    <Title text={'ماذا نقدم؟'}  valid={true} text2={"تعلم مهارات جديدة"}/>
                    <Courses/>
                    <Title text={'ماهي دوراتنا؟'}  valid={true} text2={"تعرف على دوراتنا المفضلة"}/>
                    <CoursesWithDetails/>
                    <Oppenions/>
                    <AboutOurNote/>
                                    </div>
            </div>

        </>
    )
}

export default OurProgress