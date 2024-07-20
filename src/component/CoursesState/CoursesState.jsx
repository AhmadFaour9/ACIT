import React from 'react';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './CoursesState.css'
const CoursesState = ({ data }) => {

  const navigate = useNavigate();

  const rows = data && data.map((item, index) => (
    <div key={index} className='col-12'>
      <ul className='table-content  elements-table list-unstyled d-flex align-items-center justify-content-evenly flex-wrap'>

        <div className='name-state-price'>
          <div className='index-name'>
            <li>{index + 1}</li>
            <li className='name-for-course'>{item.name}</li>
          </div>
          <div className='date-state-price'>
            <li><p className='date-gray'>التاريخ</p>{item.date}</li>
            <div className='state-price'>
              <li>{item.price}</li>
              <li><span>{item.state}</span></li>
            </div>
          </div>
        </div>
        <div className='link-ele'>
          <li>
            <a href={item.link}>
              <IoLogoWhatsapp color='green' />
              الإنضمام إلى الدورة
            </a>
          </li>
          <li>
            <button className="rounded-5  w-100 login-btn btn-primary" onClick={() => navigate(`/${item.leclink}`)}>
              المحاضرات
            </button>
          </li>
        </div>
      </ul>
      <hr />

    </div>
  ));

  return (
    <div>
      <div className='header-for-course-state'>
        <h3>الدورات</h3>
      </div>
      <div className='header-for-course-state'>
        <p>
          <TfiHeadphoneAlt color='#13A3D9' />
          دورات أون لاين
          <span>
            ({data.length})
          </span>
        </p>
      </div>
      <div className='col-12 d-flex flex-column align-items-right'>
        <div className='col-11'>
          <ul className='table-content list-unstyled d-flex align-items-center justify-content-enenly'>
            <li>م</li>
            <li>الدورة</li>
            <li>التاريخ</li>
            <li>السعر</li>
            <li>الحالة</li>
            <li></li>
            <li></li>
          </ul>
          <hr />

        </div>
        <div className='col-11 '>
          {rows}
        </div></div>
      <div className='header-for-course-state'>
        <p><img alt='presents-courses' src={require('../../assets/images/students-group-with-one-talking-svgrepo-com 1.png')} /> دورات حضورية <span>({data.length})</span></p>
      </div>
      <div className='col-12 d-flex flex-column align-items-right'>
        <div className='col-11'>
          <ul className='table-content list-unstyled d-flex align-items-center justify-content-enenly'>
            <li>م</li>
            <li>الدورة</li>
            <li>التاريخ</li>
            <li>السعر</li>
            <li>الحالة</li>
            <li></li>
            <li></li>

          </ul>
          <hr />

        </div>
        <div className='col-11 '>
          {rows}
        </div>

      </div>
    </div>
  );
};

export default CoursesState;