import React, { useEffect, useState } from 'react';
import './Summary.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Summary = ({ courses, percent }) => {
    const value = useSelector((state) => state.item1.value);

    const [percentage, setPercentage] = useState(0);
    const [total, setTotal] = useState(0);
    const [counted, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState('option1');
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    useEffect(() => {
       
        setCount(value);
        setPercentage((value * percent).toFixed(3));
        setTotal(value + parseFloat(percentage));
    }, [courses, percent, percentage,dispatch]);

    return (
        <div className="summary container-fluid p-0 m-0 row col-12 d-flex flex-column justify-content-center align-items-center">
            <h3>ملخص الطلب</h3>
            <div className="rows d-flex justify-content-between align-items-center">
                <p>المنتج</p> <p>المجموع</p>
            </div>
            <hr />
            <div className="rows d-flex justify-content-between align-items-center">
                <p>{counted.toFixed(2)}</p> <p>المجموع الفرعي</p>
            </div>
            <div className="rows d-flex justify-content-between align-items-center">
                <p>{percentage}</p> <p>ضريبة القيمة المضافة</p>
            </div>
            <hr />
            <div className="rows d-flex justify-content-between align-items-center">
                <p>{total.toFixed(2)}</p> <p>الإجمالي</p>
            </div>
            <hr />
            <div className='radios'>
  <div className='d-flex justify-content-between align-items-center'>
    <label>
      <input
        type="radio"
        name="radioOptions"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={handleRadioChange}
      />
      المباشر عن طريق الفيزا
    </label>
    <img src={require('../../assets/images/Visa.png')} alt={'logo for pay'} />
   
  </div>
 <p className='paragraph-after-radio' style={{ display: selectedOption === 'option1' ? 'block' : 'none' }}>
      في حال تم الدفع سيتم اضافة الدورة إلى حسابك مباشرة ..
    </p>
  <div className='d-flex justify-content-between align-items-center'>
    <label>
      <input
        type="radio"
        name="radioOptions"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={handleRadioChange}
      />
      ادفع باستخدام مدى, Apple Pay أو البطاقة الائتمانية
    </label>
    <img src={require('../../assets/images/tamara.png')} alt={'logo for pay'} />
    
  </div>
<p className='paragraph-after-radio' style={{ display: selectedOption === 'option2' ? 'block' : 'none' }}>
      في حال تم الدفع سيتم اضافة الدورة إلى حسابك مباشرة ..
    </p>
  <div className='d-flex justify-content-between align-items-center'>
    <label>
      <input
        type="radio"
        name="radioOptions"
        value="option3"
        checked={selectedOption === 'option3'}
        onChange={handleRadioChange}
      />
      الدفع المباشر عن طريق مدى
    </label>
    <img src={require('../../assets/images/mada.png')} alt={'logo for pay'} />
    
  </div>
<p className='paragraph-after-radio' style={{ display: selectedOption === 'option3' ? 'block' : 'none' }}>
      في حال تم الدفع سيتم اضافة الدورة إلى حسابك مباشرة ..
    </p>
  <div className='d-flex justify-content-between align-items-center'>
    <label>
      <input
        type="radio"
        name="radioOptions"
        value="option4"
        checked={selectedOption === 'option4'}
        onChange={handleRadioChange}
      />
      ادفع عن طريق آبل باي
    </label>
    <img src={require('../../assets/images/pay.png')} alt={'logo for pay'} />
    
  </div>
<p className='paragraph-after-radio' style={{ display: selectedOption === 'option4' ? 'block' : 'none' }}>
      في حال تم الدفع سيتم اضافة الدورة إلى حسابك مباشرة ..
    </p>
  <div className='d-flex justify-content-between align-items-center'>
    <label>
      <input
        type="radio"
        name="radioOptions"
        value="option5"
        checked={selectedOption === 'option5'}
        onChange={handleRadioChange}
      />
      على 4. بدون أي فوائد، أو رسوم.
    </label>
    <img src={require('../../assets/images/tabby.png')} alt={'logo for pay'} />
    
  </div>
<p className='paragraph-after-radio' style={{ display: selectedOption === 'option5' ? 'block' : 'none' }}>
      في حال تم الدفع سيتم اضافة الدورة إلى حسابك مباشرة ..
    </p>
            </div>
            <hr />
            <p className='polices'>
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span onClick={() => { navigate('/') }}>سياسة الخصوصية</span>.</p>
            <p className='conditions'>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
لقد قرأتُ <span>الشروط والأحكام</span> وأوافق عليها لهذا الموقع *            </p>
            <button className="btn btn-primary align-self-center w-75 rounded-4 ">تأكيد الطلب</button>
        </div>
    );
};

export default Summary;