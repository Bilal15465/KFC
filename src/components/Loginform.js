import React from 'react'

const Loginform = () => {
  return (
    <div>
     
<div>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-danger text-dark" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 ">Wellcome!</h2>
              <p className="text-white-50 mb-5">Please enter your Email or Phone!</p>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
                <br /><br /><b>OR</b><br />
              </div>
              <div className="form-outline form-white mb-4">
                <input type="number" id="typenumber" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typenumber">Phone</label>
              </div>
              
              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
              </div>
            </div>
            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Loginform
