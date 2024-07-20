import React, { useEffect } from 'react'
import { GridTable, Summary } from '../../component'
import {Footer} from '../../Sections'
import './Pay.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateValue } from '../../Redux/itemSlice';
import Bg from '../../assets/images/Circle 5.png';

const Pay = () => {  
     const dispatch = useDispatch();
    const value = useSelector((state) => state.item1.value);
    useEffect(() => {
        dispatch(updateValue(0)); // Set the initial value to 100
        
    }, [dispatch]);

    const courses = [
        {
          id: 1,
          name: 'Web Development Course',
          image: require('../../assets/images/courseCCNA.jpeg'),
          startDate: '2023-06-01',
          time:' الجمعة و السبت من الساعة 2:00 مساء الى الساعة 6:00 مساء',
          totalPrice: 99.99,
        },
        {
          id: 2,
          name: 'Data Science Course',
          image: require('../../assets/images/courseCCNA.jpeg'),
          startDate: '2023-07-15',
          time:' الجمعة و السبت من الساعة 2:00 مساء الى الساعة 6:00 مساء',
          totalPrice: 149.99,
        },
        {
          id: 3,
          name: 'Cybersecurity Course',
          image: require('../../assets/images/course.jpeg'),
          startDate: '2023-08-01',
          time:' الجمعة و السبت من الساعة 2:00 مساء الى الساعة 6:00 مساء',
          totalPrice: 79.99,
        },
      ];
    
  
  
  return (
    <div className='pay-page container-fluid  m-0 p-0 row col-12'>
    <div className=' top-of-pay row col-12 p-0 m-0'> </div>
    <div className='header-pay row col-12 p-0 m-0 w-100'><img className='bg' src={Bg} alt='bgfor logo'/><p>الدفع</p></div>
        <div className='row col-12 mt-5'></div>
        <div className=' topping-sec row col-12  column-gap-4'>
            <div className='table-payes col-md-7 col-sm-12 mt-5 ' ><GridTable courses={courses}/></div>
                  <div className='summaryes col-md-3  col-sm-12 mt-5'><Summary percent={'.05'} courses={courses} /></div>
                  
  </div>
  <Footer/>
    </div>
  )
}

export default Pay