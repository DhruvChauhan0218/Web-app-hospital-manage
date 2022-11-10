import React from 'react'
import Sidebar from './Sidebar'
import { handleClinicInfoCancle, handleClinicInfoEdit, handleProfileInfoCancle, handleProfileInfoSubmit,handleProfileInfoEdit,handleClinicInfoSubmit } from '../../JS/Docotor/Home.js';

function DoctorHome() {

  React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = '../CSS/MyAccount.css';
		head.appendChild(link);
	}, []);

    return (
        <div>
          <Sidebar/>
             <div className="dashboard-app">

<div className="dashboard-content">
    <div className="container">
        <div className="card">
            <div className="card-header">
                <h2 id="doctorname"></h2>
            </div>
            <div className="card-body">
                <div className="container">
                    <div className="profile-container">
                      <label className="profile-container-label">Profile info</label>
                      <div className="MuiGrid-container">
                        <form action="" style={{display:'block'}}>
                          <div className="right-container"><button type="button" id="profileEditBtn" onClick={handleProfileInfoEdit}>Edit</button></div>
                          <div className="right-container"><button type="button" id="profileCancleBtn" onClick={handleProfileInfoCancle}>Cancle</button></div>
                          <div className="form-container">
            
                            <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                  <label className="MuiInputLabel-shrink" style={{transform:"translate(-20px, 12px) scale(0.79)"}} >First Name</label>
                                  <div className="MuiInputBase-root">
                                    <input type="text" name="firstname" id="firstname"/>
                                  </div>
                                </div>
                              </div>
              
                              <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                  <label className="MuiInputLabel-shrink" style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Last Name</label>
                                  <div className="MuiInputBase-root">
                                    <input type="text" name="lastname" id="lastname" />
                                  </div>
                                </div>
                              </div>
              
                              <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                  <label className="MuiInputLabel-shrink" style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Email</label>
                                  <div className="MuiInputBase-root">
                                    <input type="email" name="email" id="email"  />
                                  </div>
                                </div>
                              </div>
              
                              <div className="MuiGrid-grid-md-4">
                                  <div className="MuiFormControl-root">
                                    <label className="MuiInputLabel-shrink" style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Password</label>
                                    <div className="MuiInputBase-root">
                                      <input type="password" name="password" id="password" />
                                    </div>
                                  </div>
                              </div>
                                
                              <div className="MuiGrid-grid-md-4">
                                  <div className="MuiFormControl-root">
                                    <label className="MuiInputLabel-shrink" style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Gender</label>
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
                                    <label className="MuiInputLabel-shrink" style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Role</label>
                                    <div className="MuiInputBase-root">
                                      <input type="text" name="role" id="role"/>
                                    </div>
                                  </div>
                              </div>
              
                              <div className="MuiGrid-grid-md-4">
                                  <div className="MuiFormControl-root">
                                    <label className="MuiInputLabel-shrink" style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Phone</label>
                                    <div className="MuiInputBase-root">
                                      <input type="tel" name="phone" id="phone" pattern="[0-9]{10}" title="Enter correct phone number" />
                                    </div>
                                  </div>
                              </div>
                            
                          </div>
                          <div>
                            <button id="profileSubmitBtn" type="button" onClick={handleProfileInfoSubmit}>Save Changes</button>
                          </div>
                        </form>
                      </div>
                    </div>
                </div>

                <div className="container">
                    <div className="profile-container">
                      <label className="profile-container-label">Clinic info</label>
                      <div className="MuiGrid-container">
                        <form action="" style={{display:"block"}}>
                          <div className="right-container"><button type="button" id="ClinicInfoEditBtn" onClick={handleClinicInfoEdit}>Edit</button></div>
                          <div className="right-container"><button type="button" id="ClinicInfoCancleBtn" onClick={handleClinicInfoCancle}>Cancle</button></div>
                          <div className="form-container">
            
                            <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                <label className="profile-container-label">Clinic Name</label>
                                  <div className="MuiInputBase-root">
                                    <input type="text" name="clinic" id="clinic" />
                                  </div>
                                </div>
                            </div>
            
                            <div className="MuiGrid-grid-md-4">
                              <div className="MuiFormControl-root">
                                <label className="profile-container-label">Medical Registration Number</label>
                                <div className="MuiInputBase-root">
                                  <input type="text" name="medical" id="medical"/>
                                </div>
                              </div>
                            </div>
            
                            <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                  <div className="MuiInputBase-root">
                                    <select name="department" id="department">
                                        <option value="department" disabled selected>Department</option>
                                      </select>
                                  </div>
                                </div>
                            </div>
            
                            <div className="MuiGrid-grid-md-4">
                              <div className="MuiFormControl-root">
                                <label className="profile-container-label">Experience</label>
                                <div className="MuiInputBase-root">
                                  <input type="text" name="experience" id="experience" />
                                </div>
                              </div>
                            </div>
            
                            <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                <label className="profile-container-label">Country</label>
                                  <div className="MuiInputBase-root">
                                    <input type="text" name="country" id="country"/>
                                  </div>
                                </div>
                              </div>
            
                              <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                <label className="profile-container-label">State</label>
                                  <div className="MuiInputBase-root">
                                    <input type="text" name="state" id="state" />
                                  </div>
                                </div>
                              </div>
            
                              <div className="MuiGrid-grid-md-4">
                                <div className="MuiFormControl-root">
                                <label className="profile-container-label">City</label>
                                  <div className="MuiInputBase-root">
                                    <input type="text" name="city" id="city" />
                                  </div>
                                </div>
                             </div>
                             
                          </div>
                          <div>
                            <button id="ClinicInfoSubmitBtn" type="button" onClick={handleClinicInfoSubmit}>Save Changes</button>
                          </div>
                        </form>
                      </div>
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

export default DoctorHome
