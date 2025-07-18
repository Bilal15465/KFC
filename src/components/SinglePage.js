import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SinglePage = () => {
  const[submit,setSubmit]=useState(false)
  const[userInfo,setuserInfo]=useState({
    email:"",
    password:"",
  })
  const getData=(e)=>{
    setuserInfo({...userInfo,[e.target.name]:e.target.value})
  }

const handelSubmit=()=>{
  setSubmit(true)
}


  return (
    <>
  <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3"><h2><b>REORDER!</b></h2></p>
          </div>
          <br /><br />
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" id='reorderForm' name='email' value={userInfo.email} onChange={getData} required className="form-control form-control-lg" placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="reorderForm">Email address</label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
            <input type="password" id="reorderForm2" name='password' value={userInfo.password} onChange={getData} required className="form-control form-control-lg" placeholder="Enter password"/>
            <label className="form-label" htmlFor="reorderForm2">Password</label>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" defaultValue id="reorderForm3" />
              <label className="form-check-label" htmlFor="reorderForm3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            
            <Link to="/re-order-history"><button type="submit" className="btn btn-danger btn-lg" onClick={handelSubmit} style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Confirm</button></Link>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>


    </>
  )
}

export default SinglePage
