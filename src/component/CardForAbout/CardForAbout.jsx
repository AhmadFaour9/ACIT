import React from 'react';
import './CardForAbout.css';

const CardForAbout = ({ CardTitle, CardContent, img, type, date,courseName }) => {
  const card = () => {
    if (type === 1) {
      return (
        <div className="card">
          <img src={img} className="card-img-top rounded-3 h-100 object-fit-cover" alt="..." />
          <div className="card-body">
          <p  class=" btn-primary ">{courseName}</p>
            <h5 className="card-title">{CardTitle}</h5>
            <p className="card-text cont">{CardContent}</p>
            <div className="d-flex justify-content-start ">
              <p className="date card-text">{date}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card rounded-3 ">
          <img src={img} className="card-img rounded-3 h-100 object-fit-cover" alt="..." />
          <div className=" card-img-overlay h-100 d-flex flex-column justify-content-end align-items-start ">
          <p  class=" date card-text text-white">{courseName}</p>

            <h5 className="card-title text-white">{CardTitle}</h5>
            <p className="card-text cont text-white">{CardContent}</p>
            <div className="d-flex justify-content-start">
              <p className="date card-text text-white">{date}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{card()}</>;
};

export default CardForAbout;