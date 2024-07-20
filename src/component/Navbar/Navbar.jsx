import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import UKFlag from '../../assets/images/UK.png';
import LangLogo from '../../assets/images/Group 1000001038.png'
import './Navbar.css';

const Navbar = () => {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const [isArabic, setIsArabic] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleSetColor);
    return () => {
      window.removeEventListener('scroll', handleSetColor);
    };
  }, []);

  const handleSetColor = () => {
    setColor(window.pageYOffset > 0);
  };

  const handleLanguageChange = () => {
    setIsArabic(!isArabic);
  };

  return (
    <nav
      dir={isArabic ? 'rtl' : 'ltr'}
      className="navbar navbar-expand-lg d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: color ? '#14BCFB' : 'transparent',
        boxShadow: color ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="container-fluid d-flex justify-content-center" style={{ width: '90%' }}>
        <div className="d-flex justify-content-between align-items-center col-12">
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} alt="logo" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto d-flex justify-content-center">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                  {isArabic ? 'الرئيسية' : 'Home'}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {isArabic ? 'الكورسات' : 'Courses'}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <NavLink to="/coursesstate" className="dropdown-item" style={{ fontFamily: 'Cairo', fontSize: '12px', fontWeight: 700, lineHeight: '22.49px', textAlign: 'left' }}>
                      {isArabic ? 'كورس 1' : 'Course 1'}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item" style={{ fontFamily: 'Cairo', fontSize: '12px', fontWeight: 700, lineHeight: '22.49px', textAlign: 'left' }}>
                      {isArabic ? 'كورس 2' : 'Course 2'}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item" style={{ fontFamily: 'Cairo', fontSize: '12px', fontWeight: 700, lineHeight: '22.49px', textAlign: 'left' }}>
                      {isArabic ? 'كورس 3' : 'Course 3'}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                  {isArabic ? 'المقالات' : 'Articles'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                  {isArabic ? 'الإعتمادات والشركات' : 'Accreditations & Companies'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
                  {isArabic ? 'إتصل بنا' : 'Contact Us'}
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-primary ms-2" onClick={() => { navigate('./signup') }}>
                {isArabic ? 'إنشاء حساب' : 'Sign Up'}
              </button>
              <button className="btn btn-primary" onClick={() => { navigate('./login') }}>
                {isArabic ? 'تسجيل دخول' : 'Login'}
              </button>
              <div className="dropdown">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {isArabic ? '(AR)' : '(EN)'} <img src={isArabic ? LangLogo : UKFlag} alt='lang-logo' className='logo-lang' />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {isArabic && <li>
                      <a onClick={handleLanguageChange} className="dropdown-item" style={{ fontFamily: 'Cairo', fontSize: '12px', fontWeight: 700, lineHeight: '22.49px', textAlign: 'left' }}>
                        {isArabic ? 'الإنجليزية' : 'English'}
                      </a>
                    </li>}
                    {!isArabic && <li>
                      <a onClick={handleLanguageChange} className="dropdown-item" style={{ fontFamily: 'Cairo', fontSize: '12px', fontWeight: 700, lineHeight: '22.49px', textAlign: 'left' }}>
                        {isArabic ? 'العربية' : 'Arabic'}
                      </a>
                    </li>}
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;