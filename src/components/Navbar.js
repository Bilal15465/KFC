import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <a className="navbar-brand" href="#"><h1 className='kfctext'><b>KFC</b></h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><button className='navdelivr btn btn-light'><b>DELIVERY</b></button></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><button className='navpick btn btn-light'><b>PICKUP</b></button></a>
        </li>
        <li className='nav-item'>
          <Link to="/about-us">
        <button className='navpick btn btn-light ms-4 about-btn'>About Us</button></Link>
        </li>
        <li className='nav-item'>
          <Link to="terms-&-conditions">
        <button className='navpick btn btn-light ms-4 about-btn'>Terms & Conditions</button></Link>
        </li>
        <li className='nav-item'>
        <button className='navpick btn btn-light ms-4 about-btn'>Contact Us</button>
        </li>
      </ul>
      
      <form className="d-flex">
      <Link to="/userlogin">
      <button className="btn btn-danger" type="submit">Login</button>
      </Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
