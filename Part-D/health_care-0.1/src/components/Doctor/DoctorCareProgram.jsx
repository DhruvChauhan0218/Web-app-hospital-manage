import React from 'react'
import Sidebar from './Sidebar'
import {createCareProgram} from '../../JS/API/Api'
import '../../JS/API/Request'
function DoctorCareProgram() {

    React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = '../CSS/MyAccount.css';
		head.appendChild(link);
	}, []);
const handleSubmit =async()=>{
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let doctor = document.getElementById('doctor').value
    let department = document.getElementById('speciality').value
    let benefits = document.getElementById('benefits').value
    let duration = document.getElementById('duration').value

    const payload  = {name,description,doctor,department,benefits,duration}
    const res= await createCareProgram(payload)
    if(res){
        alert("Care Program created successfully")
        window.location.reload()
    }else{
        alert("Something went wrong")
    }
}
     return (
        <div>
            <Sidebar/>
            <div className="dashboard-app">

<div className="dashboard-content">
    <div className="container">
        <div className="card">
            <div className="card-header">
                <h1 id="doctorname">Add care program</h1>
            </div>
            <div className="card-body">
                <div className="container">
                    <div className="profile-container">
                        <label className="profile-container-label">Care Program information</label>
                        <div className="MuiGrid-container">
                            <form action="" style={{display:'block'}}>   
                                <div className="form-container">
                                    <div className="MuiGrid-grid-md-4">
                                        <div className="MuiFormControl-root">
                                            <label className="MuiInputLabel-shrink"
                                                style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Care Program Name</label>
                                            <div className="MuiInputBase-root">
                                                <input type="text" name="name" id="name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="MuiGrid-grid-md-4">
                                        <div className="MuiFormControl-root">
                                            <label className="MuiInputLabel-shrink"
                                                style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Description</label>
                                            <div className="MuiInputBase-root">
                                                <input type="text" name="description" id="description" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="MuiGrid-grid-md-4">
                                        <div className="MuiFormControl-root">
                                            <label className="MuiInputLabel-shrink"
                                                style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Primary Doctor</label>
                                            <div className="MuiInputBase-root">
                                                <input type="text" name="doctor" id="doctor" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="MuiGrid-grid-md-4">
                                        <div className="MuiFormControl-root">
                                            <label className="MuiInputLabel-shrink"
                                                style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Speciality</label>
                                            <div className="MuiInputBase-root">
                                                <input type="text" name="speciality" id="speciality" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="MuiGrid-grid-md-4">
                                        <div className="MuiFormControl-root">
                                            <label className="MuiInputLabel-shrink"
                                                style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Benefits</label>
                                            <div className="MuiInputBase-root">
                                                <input type="text" name="benefits" id="benefits" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="MuiGrid-grid-md-4">
                                        <div className="MuiFormControl-root">
                                            <label className="MuiInputLabel-shrink"
                                                style={{transform:"translate(-20px, 12px) scale(0.79)"}}>Duration</label>
                                            <div className="MuiInputBase-root">
                                                <input type="text" name="duration" id="duration" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <button id="profileSubmitBtn" type="button"
                                        onClick={handleSubmit}>Submit</button>
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

export default DoctorCareProgram
