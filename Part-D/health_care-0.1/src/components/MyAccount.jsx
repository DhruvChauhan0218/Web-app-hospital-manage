import React from 'react'
import { handleSubmit,handleCancle,handleEdit } from "../JS/MyAccount";
// import "../CSS/MyAccount.css"

function MyAccount() {

  React.useEffect(() => {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './CSS/MyAccount.css';
    head.appendChild(link);
}, [])

    return (
        <div className="main-container">
        <h2>My Account</h2>
          <div className="container">
            <div className="profile-container">
              <label className="profile-container-label">Profile</label>
              <div className="MuiGrid-container">
                <form action="" style={{display:"block"}}>
                  <div className="right-container"><button type="button" id="editBtn" onClick={handleEdit}>Edit</button></div>
                  <div className="right-container"><button type="button" id="cancleBtn" onClick={handleCancle}>Cancle</button></div>
                  <div className="form-container">
    
                    <div className="MuiGrid-grid-md-4">
                      <div className="MuiFormControl-root">
                        <label className="MuiInputLabel-shrink">First Name</label>
                        <div className="MuiInputBase-root">
                          <input type="text" name="firstname" id="firstname" />
                        </div>
                      </div>
                    </div>
    
                    <div className="MuiGrid-grid-md-4">
                      <div className="MuiFormControl-root">
                        <label className="MuiInputLabel-shrink">Last Name</label>
                        <div className="MuiInputBase-root">
                          <input type="text" name="lastname" id="lastname" />
                        </div>
                      </div>
                    </div>
    
                    <div className="MuiGrid-grid-md-4">
                      <div className="MuiFormControl-root">
                        <label className="MuiInputLabel-shrink">Email</label>
                        <div className="MuiInputBase-root">
                          <input type="email" name="email" id="email" />
                        </div>
                      </div>
                    </div>
    
                    <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <label className="MuiInputLabel-shrink">Password</label>
                          <div className="MuiInputBase-root">
                            <input type="password" name="password" id="password" />
                          </div>
                        </div>
                    </div>
                      
                    <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <label className="MuiInputLabel-shrink">Gender</label>
                          <div className="MuiInputBase-root">
                            <select name="gender" id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                          </div>
                        </div>
                    </div>
                    
                    <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <label className="MuiInputLabel-shrink">Role</label>
                          <div className="MuiInputBase-root">
                            <input type="text" name="role" id="role" />
                          </div>
                        </div>
                    </div>
    
                    <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <label className="MuiInputLabel-shrink">Phone</label>
                          <div className="MuiInputBase-root">
                            <input type="tel" name="phone" id="phone" pattern="[0-9]{10}" title="Enter correct phone number"/>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div>
                    <button id="submitBtn" type="button" onClick={handleSubmit}>Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MyAccount
