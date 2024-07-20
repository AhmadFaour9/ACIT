import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../Sections';

const Login = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [isChecked, setIsChecked] = useState(false);
    const navigate= useNavigate()
    const changePasswordUrl=''
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleLogin = () => {
        // Implement login logic here
        if (Email.trim() === '' ) {
            setErrorEmail('من فضلك أدخل البريد الإلكتروني');
        if( !Email.includes('@'))
            setErrorEmail('عنوان البريد الإلكتروني يجب أن يحتوي على رمز @')
        if (password.trim() === '' )
            setErrorPassword('من فضلك أدخل كلمة السر ')
            return;
        }

        // Perform login validation and api call
        console.log('Eamil:', Email);
        console.log('Password:', password);
        // Clear the error state
        setErrorEmail('');
        setErrorPassword('');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container-fluid row col-12 p-0 m-0 d-flex justify-content-center align-items-center">
            <div className=' top-of-pay row col-12 p-0 m-0'> </div>
            <div className="login-card col-md-4 col-sm-12 ">
                <h2>تسجيل الدخول</h2>
                <div className="form-group">
                    <input
                        type="email"
                        id="Email"
                        placeholder='البريد الإلكتروني'
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {errorEmail && <div className="error-message red">{errorEmail}</div>}

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

                </div>                    {errorPassword && <div className="error-message red">{errorPassword}</div>}

                <div className=' w-100 d-flex justify-content-between align-items-center'>
                    <div>
                        <p className='condition-for-login'>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            أبق تسجيل دخولي
                        </p></div>
                    <div><p className='condition1-for-login' onClick={()=>navigate(changePasswordUrl)}>هل نسيت كلمة السر ؟ </p></div>


                </div>
                <button className="rounded-5  w-100 login-btn btn-primary" onClick={handleLogin}>
                    تسجيل الدخول
                </button>
                <p className='or'>أو</p>
                <button className="rounded-5  w-100  create-btn" onClick={handleLogin}>
                    انشاء حساب
                </button>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;