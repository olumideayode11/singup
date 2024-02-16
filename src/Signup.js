import React from 'react'
import { FaEyeSlash } from "react-icons/fa6";
// import img1 from "./images/icons8-facebook-logo-48.png"
function Signup() {
    return (
        <div className='signup'>
            <div className='container mt-5 '>
                <div className='row'>
                    <h1>Create Account</h1>
                    <div className='col-md-6 '>
                        <input type="text" className='form-control' />
                        <label htmlFor="" className='form-label ' >First Name</label>
                    </div>

                    <div className='col-md-6'>
                        <input type="text" className='form-control' />
                        <label htmlFor="" className='form-label'>Last Name</label>
                    </div>


                    <div className='col-md-6'>
                        <input type="text" className='form-control' />
                        <label htmlFor="" className='form-label'>Email</label>
                    </div>

                    <div className='Email col-md-6 '>
                        <input type="password " className='form-control ' placeholder='' />
                        <label htmlFor="" className='form-label'>Password </label>
                    </div>
                <div className='social-container p-4 d-flex justify-content-center'>
            {/* <img src={img1} alt="" /> */}
            
            <a href=""><img src="./images/icons8-facebook-logo-48.png" alt="" /></a>
           <a href=""> <img src="./images/icons8-google-logo-48.png" alt="" /></a>
          <a href=""><img src="./images/icons8-linkedin-logo-48.png" alt="" /></a>
                    
                </div>
                    <span class="d-flex  justify-content-center ">or use your email to resgister</span>
                    <button class="btn btn-dark mt-3 col-md-2  ">Register</button>
                    <p>Already have an account? <span><a href="./login">Login</a></span></p>
                </div>
            </div>

        </div>
    )
}

export default Signup