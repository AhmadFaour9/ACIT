import React from 'react'
import './CoursesWithDetails.css'
import { CourseCardWithDetails } from '../../../component'
const CoursesWithDetails = () => {
    return (
        <>
        <div className='top-card-with-detailes d-flex flex-column '>
        <div className='course-card-detail container-fluid  row '>
            <div className='col-1'></div>
              <div className='cards col-md-4 col-sm-12  '>
            
            
                  <CourseCardWithDetails
                      date={'الأحد 12/2/2023'}
                      img={require('../../../assets/images/course.jpeg')}
                      lesson={'23'}
                      student={'22'}
                      time={'07:30 مساءً حتى09:30 '}
                      title={"شهادة سيسكو خبير مركز البيانات CCIE Data Center (v3.0)"}
                      totalHoures={"30"}
                      price={"2500.00"}
                      rate={4}
                  />
              </div>
              <div className='col-1'></div>
              <div className='cards col-md-4 col-sm-12'>
            
            
                  <CourseCardWithDetails
                      date={'الأحد 12/2/2023'}
                      img={require('../../../assets/images/course.jpeg')}
                      lesson={'23'}
                      student={'22'}
                      time={'07:30 مساءً حتى09:30 '}
                      title={"شهادة سيسكو خبير مركز البيانات CCIE Data Center (v3.0)"}
                      totalHoures={"30"}
                      price={"2,500.00"}
                      rate={4}
                  />
              </div>
              <div className='col-1'></div>

        </div><div className='course-card-detail container-fluid  row  '>
            <div className='col-md-1'></div>
              <div className='cards col-md-4 col-sm-12 '>
            
            
                  <CourseCardWithDetails
                      date={'الأحد 12/2/2023'}
                      img={require('../../../assets/images/course.jpeg')}
                      lesson={'23'}
                      student={'22'}
                      time={'07:30 مساءً حتى09:30 '}
                      title={"شهادة سيسكو خبير مركز البيانات CCIE Data Center (v3.0)"}
                      totalHoures={"30"}
                      price={"2500.00"}
                      rate={4}
                  />
              </div>
              <div className='col-1'></div>
              <div className='cards col-md-4 col-sm-12'>
            
            
                  <CourseCardWithDetails
                      date={'الأحد 12/2/2023'}
                      img={require('../../../assets/images/course.jpeg')}
                      lesson={'23'}
                      student={'22'}
                      time={'07:30 مساءً حتى09:30 '}
                      title={"شهادة سيسكو خبير مركز البيانات CCIE Data Center (v3.0)"}
                      totalHoures={"30"}
                      price={"2,500.00"}
                      rate={4}
                  />
              </div>
              <div className='col-1'></div>

        </div><div className='course-card-detail container-fluid  row '>
            <div className='col-1'></div>
              <div className='cards col-md-4 col-sm-12 '>
            
            
                  <CourseCardWithDetails
                      date={'الأحد 12/2/2023'}
                      img={require('../../../assets/images/course.jpeg')}
                      lesson={'23'}
                      student={'22'}
                      time={'07:30 مساءً حتى09:30 '}
                      title={"شهادة سيسكو خبير مركز البيانات CCIE Data Center (v3.0)"}
                      totalHoures={"30"}
                      price={"2500.00"}
                      rate={4}
                  />
              </div>
              <div className='col-1'></div>
              <div className=' cards col-md-4 col-sm-12'>
            
            
                  <CourseCardWithDetails
                      date={'الأحد 12/2/2023'}
                      img={require('../../../assets/images/course.jpeg')}
                      lesson={'23'}
                      student={'22'}
                      time={'07:30 مساءً حتى09:30 '}
                      title={"شهادة سيسكو خبير مركز البيانات CCIE Data Center (v3.0)"}
                      totalHoures={"30"}
                      price={"2,500.00"}
                      rate={4}
                  />
              </div>
              <div className='col-1'></div>

        </div>
        </div>
        </>
    )
}

export default CoursesWithDetails