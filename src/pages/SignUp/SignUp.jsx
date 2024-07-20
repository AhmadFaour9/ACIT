import React, { useState } from 'react';
import { TbEdit } from "react-icons/tb";
import './SignUp.css';
import defaultImgSrc from '../../assets/images/Group 1000001165.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorFullName, setErrorFullName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const navigate = useNavigate();
  const changePasswordUrl = '';
  const [imgSrc, setImgSrc] = useState(defaultImgSrc);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (fullName.trim() === '') {
        setErrorFullName('الرجاء إدخال اسمك الكامل');
        isValid = false;
      } else {
        setErrorFullName('');
      }
      
      if (email.trim() === '') {
        setErrorEmail('الرجاء إدخال بريدك الإلكتروني');
        isValid = false;
      } else if (!email.includes('@')) {
        setErrorEmail('البريد الإلكتروني يجب أن يحتوي على @');
        isValid = false;
      } else {
        setErrorEmail('');
      }
      
      if (phone.trim() === '') {
        setErrorPhone('الرجاء إدخال رقم هاتفك');
        isValid = false;
      } else if (!/^(\+\d{1,3}[- ]?)?\d{10,13}$/.test(phone)) {
        setErrorPhone('رقم الهاتف يجب أن يحتوي فقط على أرقام ويبدأ باختياري + ورمز البلد');
        isValid = false;
      } else {
        setErrorPhone('');
      }
      
      if (password.trim() === '') {
        setErrorPassword('الرجاء إدخال كلمة المرور');
        isValid = false;
      } else {
        setErrorPassword('');
      }

    if (isValid) {
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Password:', password);
      // Perform login validation and API call
      // Clear the error state
      setErrorFullName('');
      setErrorEmail('');
      setErrorPhone('');
      setErrorPassword('');
      // Navigate to the desired page
      navigate('/dashboard');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImgSrc(imageUrl);
  };

  return (
    <div className='container-fluid p-0 m-0 row col-12 d-flex  align-items-center justify-content-center'>
      <div className='top-of-pay row col-12 p-0 m-0'></div>
      <div className='login-card col-md-4 col-sm-12'>
        <img src={imgSrc} className='img-signup' alt='' />
        <div className='form-group'>
          <label htmlFor='imageInput' className='image-input-label d-flex'>
            <TbEdit color='#6F6C90' />
            <p>تعديل الصورة</p>
          </label>
          <input
            id='imageInput'
            type='file'
            onChange={handleImageChange}
            className='image-input'
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              placeholder='الاسم الكامل'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>            {errorFullName && <div className="error-message red">{errorFullName}</div>}

          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder='البريد الإلكتروني'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>            {errorEmail && <div className="error-message red">{errorEmail}</div>}

          <div className="form-group">
            <input
              type="tel"
              id="phone"
              placeholder='رقم الهاتف'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>            {errorPhone && <div className="error-message red">{errorPhone}</div>}

          <div className="form-group">
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder='كلمة السر '
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </span>
            </div>
          </div>            {errorPassword && <div className="error-message red">{errorPassword}</div>}

          <button className="rounded-5  w-100 login-btn btn-primary" onClick={handleSubmit}>
          انشاء حساب
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;