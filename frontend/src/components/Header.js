import React from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../img/kartikeyLogo.png';
import '../css/style.css'
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const userData = localStorage.getItem('userData');
  const isLoggedIn = userData !== null;
  const handleLogout = () => {
    localStorage.removeItem('userData');
  }

  return (
    <div>
      <nav className="fixedNav" style={{ position: 'relative' }}>
        <div className="container-fluid bgNav border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-6">
                <a className="navbar-brand" href="#">
                  <img
                    src={Logo}
                    alt=""
                    height="80"
                    width="90"
                  />
                </a>
              </div>
              <div className="col-sm-4 justify-content-center d-flex align-items-center logoTextContainer">
                <Link to={'/'} className="logoText">Kartikey Welfare Trust</Link>
              </div>
              <div className="col-sm-4 justify-content-end d-flex align-items-center col-6">
                <span id="bars" className="d-none">
                    <RxHamburgerMenu />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ borderBottom: '2px solid #2f874a', backgroundColor: 'white' }}>
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-light justify-content-center py-0">
                <div className="x">
                  <div className="" id="navbarNavDropdown">
                    <ul className="navbar-nav" id="mySidenav">
                      <li className="nav-item align-items-center d-flex">
                        <i className="fas fa-home"></i>
                      </li>
                      <li className="nav-item">
                        <Link to={'/'} className="nav-link nav-link-custom" >Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/aboutUs'} className="nav-link nav-link-custom" >About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/donate'} className="nav-link nav-link-custom" >Donate</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/'} className="nav-link nav-link-custom" >Apply Member</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/'} className="nav-link nav-link-custom" >Your Problem</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/'} className="nav-link nav-link-custom" >Our Projects</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={'/contactus'} className="nav-link nav-link-custom" >Contact Us</Link>
                      </li>
                      <li className="nav-item">
                        {isLoggedIn ? (
                          <Link to={'/'} className="nav-link nav-link-custom" onClick={handleLogout}>Logout</Link>
                        ) : (
                          <Link to={'/login'} className="nav-link nav-link-custom">Login</Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {isLoggedIn ? (
                          <Link to={'/'} className="nav-link nav-link-custom" >Admin</Link>
                        ):null}
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <nav className="mobileView" id="mobileView">
                <div className="insideMobileView">
                  <ul className="p-0">
                    <li className="d-flex justify-content-start py-1 mobileLinks">
                      <a className="nav-link nav-link-custom" href="">Home</a>
                    </li>
                    <li className="d-flex justify-content-start py-1 mobileLinks">
                      <a className="nav-link nav-link-custom" href="">About Us</a>
                    </li>
                    <li className="d-flex justify-content-start py-1 mobileLinks">
                      <a className="nav-link nav-link-custom" href="">Donate</a>
                    </li>
                    <li className="d-flex justify-content-start py-1 mobileLinks">
                      <a className="nav-link nav-link-custom" href="">Apply Member</a>
                    </li>
                    <li className="d-flex justify-content-start py-1 mobileLinks">
                      <a className="nav-link nav-link-custom" href="">Your Problem</a>
                    </li>
                    <li className="d-flex justify-content-start py-1 mobileLinks">
                      <a className="nav-link nav-link-custom" href="">Contact Us</a>
                    </li>
                    <li className="d-flex justify-content-start py-1 mobileLinks">
                      <a className="nav-link nav-link-custom" href="">Login</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
