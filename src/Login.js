import React from 'react'
import { FaEyeSlash } from "react-icons/fa6";
function Login() {
  return (
    <div className='login'>
      <div className='container mt-3 '>
        <div className='row'>
          <h1 >Login</h1>
          <form action="">
            <div className='col-md-5 mt-3 '>
              <label htmlFor="" className='form-label'>Email</label>
              <input type="text" className='form-control' />

            </div>
            <div className=' password col-md-5 mt-lg-3 '>
              <label htmlFor="" className='form-label'>Password</label>


              <input type="text" className='form-control' />
              <FaEyeSlash className='EyeIcon' />
              <div>
                <a className='forgot' href=""><small>Forgot password?</small></a>
              </div>
            </div>
          </form>
          <button className=" btn btn-dark mt-3 col-md-2 ">Login</button>

        </div>
      </div>

    </div>
  )
}

export default Login