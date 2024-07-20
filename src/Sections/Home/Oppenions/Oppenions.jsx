import React from 'react';
import './Oppenions.css';
import { Rating, Title } from '../../../component';

const Oppenions = () => {
  return (
    <>
      <div className="opinions container-fluid row col-12 p-0 m-0 mt-5 mb-5">
        <div className="square-radius col-4">
         <div className='women-man-pic'> <img
            className=""
            src={require('../../../assets/images/Rectangle 4588.png')}
            alt="border-women-man-photo"
          />
          </div>
          <div className='women-man-pic'>
          <img
            className=""
            src={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')}
            alt="women-man-photo"
          />
          </div>
        </div>
        <div className="col-8 d-flex flex-column align-items-center justify-content-center">
          <div className='top-title'>
            <Title text={'ماذا قال طلابنا عنا؟'} />

          </div>
          <div className="chat">
            <img
              src={require('../../../assets/images/Rectangle 4590.png')}
              alt="img"
              className="chat-img"
            />
            <div className='container-text d-flex flex-column align-items-end  justify-content-center z-2'>
              <Title text={'اسم شخص وهمي'} className='title-openion mt-0 m-0 p-0' />

              <div className='text-for-openion  d-flex flex-column align-items-end justify-content-center'>
                <p >
                  هـذا النـــــص هو مثال لنص يمكن أن يستبدل في نفــس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديـــد من النصوص الأخــــــــرى إضافــة إلـىهـذا النـــــص هو مثال لنص يمكن أن يستبدل في نفــس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديـــد من النصوص الأخــــــــرى إضافــة إلـىهـذا النـــــص هو مثال لنص يمكن أن يستبدل في نفــس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديـــد من النصوص الأخــــــــرى إضافــة إلـى
                </p>
              </div>
              <Rating rate={'3.5'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oppenions;
;