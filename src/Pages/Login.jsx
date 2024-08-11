import React from 'react';
import './css/Login.css'

const Login = () => {
    return(
        <div className='Login'>
            <div className="login-container">
                <h1>Sign Up </h1>
                <div className="login-fields">
                    <input type='text' placeholder='Enter name' />
                    <input type='email' placeholder='Enter email' />
                    <input type='password' placeholder='Enter password' />
                </div>
                <button>Continue</button>
                <p className='login-loggedin'>Already have an account? <span>Login here</span></p>
                <div className="login-agree">
                    <input type='checkbox' name='' id='' />
                    <p>By continuing, I agree to the terms of use and privacy policy</p>
                </div>
            </div>
            
        </div>
    )

}

export default Login;