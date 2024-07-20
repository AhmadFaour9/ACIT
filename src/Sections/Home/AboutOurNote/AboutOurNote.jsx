import React from 'react'
import { CardForAbout, Title } from '../../../component'
import './AboutOurNote.css';
const AboutOurNote = ({ data }) => {
    return (
        <><div className='our-notes container-fluid row col-12 p-0 m-0'>

            <Title valid={true} text={'عن مدونتنا'} text2={'تعرف على دوراتنا المفضلة'} />
            <div className='col-md-1 col-sm-0 '></div>
            <div className='row col-md-10 col-sm-12 p-0 m-0 mt-5 '>
                <div className='col-md-6 col-sm-12 p-0 m-0 p-0 m-0 '> <CardForAbout courseName={'أمن معلومات'} date={'الأحد  12/11/2023'} CardTitle={'شهادات سيسكو الجديدة'} img={require('../../../assets/images/course.jpeg')} CardContent={'ستقوم شركة سيسكو بعمل تغييرات جذرية على الدورات والشهادات المهنية ....'} /></div>
                <div className='cards-smalls col-md-6 col-sm-12 p-0 m-0 d-flex flex-wrap justify-content-around align-items-center'>
                    <div className='row'>
                        <div className=' col-6 p-0 m-0'><CardForAbout courseName={'أمن معلومات'} date={'الأحد  12/11/2023'} type={1} CardTitle={'شهادات سيسكو الجديدة'} img={require('../../../assets/images/course.jpeg')} CardContent={'ستقوم شركة سيسكو بعمل تغييرات جذرية على الدورات والشهادات المهنية ....'} /></div>
                        <div className=' col-6 p-0 m-0'><CardForAbout type={1} courseName={'أمن معلومات'} date={'الأحد  12/11/2023'} CardTitle={'شهادات سيسكو الجديدة'} img={require('../../../assets/images/course.jpeg')} CardContent={'ستقوم شركة سيسكو بعمل تغييرات جذرية على الدورات والشهادات المهنية ....'} /></div>
                    </div>
                    <div className='row'>
                        <div className=' col-6 p-0 m-0'><CardForAbout type={1} courseName={'أمن معلومات'} date={'الأحد  12/11/2023'} CardTitle={'شهادات سيسكو الجديدة'} img={require('../../../assets/images/course.jpeg')} CardContent={'ستقوم شركة سيسكو بعمل تغييرات جذرية على الدورات والشهادات المهنية ....'} /></div>
                        <div className=' col-6 p-0 m-0'><CardForAbout type={1} courseName={'أمن معلومات'} date={'الأحد  12/11/2023'} CardTitle={'شهادات سيسكو الجديدة'} img={require('../../../assets/images/course.jpeg')} CardContent={'ستقوم شركة سيسكو بعمل تغييرات جذرية على الدورات والشهادات المهنية ....'} /></div>
                    </div></div>
            </div>
            <div className='col-md-1 col-sm-0'></div>

        </div>     </>
    )
}

export default AboutOurNote