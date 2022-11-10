import React from 'react'
// import "../CSS/Registration.css"
import { handleLogin, handleRegister } from '../JS/Registration'


function Registration() {

  React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = './CSS/Registration.css';
		head.appendChild(link);
	}, [])


    return (
        <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <br />
            <input type="text" placeholder="First Name" name="firstname" id="firstname" />
            <input type="text" placeholder="Last Name" name="lastname" id="lastname" />
            <input type="email" placeholder="Email" name="email" id="email" />
            <input type="password" placeholder="Password" name="password" id="password" />
            <select name="gender" id="gender">
              <option value="" disabled selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <select name="role" id="role">
              <option value="" disabled selected>Role</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>   
            <input type="tel" id="phone" name="phone" id="phone" placeholder="Phone" pattern="[0-9]{10}" title="Enter correct phone number" />
            <br />
            <button type="button" onClick={handleRegister}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <br />
            <input type="email" placeholder="Email" name="email" id="login-email"/>
            <input type="password" placeholder="Password" name="password" id="login-password"/>
            <select name="role" id="login-role">
              <option value="" disabled selected>Role</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            <br />
            <button type="button" onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Health Care Community!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Registration
