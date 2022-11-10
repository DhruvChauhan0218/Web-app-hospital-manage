import React from 'react'
import { handleSubmit } from '../JS/DoctorExtraDetails.js'
// import "../CSS/MyAccount.css"

function DoctorExtraDetails() {

  React.useEffect(() => {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './CSS/MyAccount.css';
    head.appendChild(link);
}, [])

    return ( <>
       {/* <div className="main-container"> */}
       
        <center><h2>Doctor Info</h2></center>
          <div className="container">
            <div className="profile-container">
              <label className="profile-container-label">info</label>
              <div className="MuiGrid-container">
                <form action="" style={{display:"block"}}>
                  <div className="form-container">
                    
                    <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <div className="MuiInputBase-root">
                            <input type="text" name="clinic" id="clinic" placeholder="Clinic Name"/>
                          </div>
                        </div>
                    </div>
    
                    <div className="MuiGrid-grid-md-4">
                      <div className="MuiFormControl-root">
                        <div className="MuiInputBase-root">
                          <input type="text" name="medical" id="medical" placeholder="Medical Registration Number"/>
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
                        <div className="MuiInputBase-root">
                          <input type="text" name="experience" id="experience" placeholder="Experience"/>
                        </div>
                      </div>
                    </div>
    
                    <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <div className="MuiInputBase-root">
                            <input type="text" name="country" id="country" placeholder="Country"/>
                          </div>
                        </div>
                      </div>
    
                      <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <div className="MuiInputBase-root">
                            <input type="text" name="state" id="state" placeholder="State"/>
                          </div>
                        </div>
                      </div>
    
                      <div className="MuiGrid-grid-md-4">
                        <div className="MuiFormControl-root">
                          <div className="MuiInputBase-root">
                            <input type="text" name="city" id="city" placeholder="City"/>
                          </div>
                        </div>
                     </div>
                    
                  </div>
                  <div>
                    <button id="submitBtn" type="button" onClick={handleSubmit}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* </div> */}
        </>
    )
}

export default DoctorExtraDetails
