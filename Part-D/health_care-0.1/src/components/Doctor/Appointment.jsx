import axios from 'axios';
import React from 'react'
import { getAllAppointment, getClinic, submitPrescription } from '../../JS/API/Api';
import Sidebar from './Sidebar';

function Appointment() {

    React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = '../CSS/Doctor/Appointment.css';
		head.appendChild(link);

        getAppointments();
	}, []);

    async function getAppointments(){
        const clinicData = await getClinic("61a50a7b91043acdf6965d97")
        let {department} = clinicData.data
        const res = await getAllAppointment()
        if(res && res.data && department){    
            let parent = document.getElementById('tbody')
            res.data.map((ele,index)=>{
                if(ele.department == department){
                    let row = ` <tr className="MuiTableRow-root jss180 MuiTableRow-hover">
                                        <td
                                            className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                            00${index+1}</td>
                                        <td
                                            className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                            ${ele.patientphone}</td>
                                        <td
                                            className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                           ${ele.patientname}</td>
                                        <td
                                            className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                            ${ele.doctorname}</td>
                                        <td
                                            className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                            <span style="text-transform: capitalize;">${ele.date}</span></td>
                                        <td
                                            className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                            <span dottype="warning" className="jss199 jss200">${ele.time}</span></td>
                                            <td
                                            className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                            <span dottype="warning" className="jss199 jss201"><button className="dlt" onclick="handleDelete(this.id)">Delet Appointment
                                            <a className="" href="#popup1"></button><br><span><button className="presc" onclick="addPrescription(this.id)">Add Prescription</button></span></span></a>
                                        </td>

                                    </tr>`
                    parent.innerHTML += row
                }
            })

            res.data.map((ele,index)=>{
                document.getElementsByClassName("dlt")[index].id = ele.id
            })
            res.data.map((ele,index)=>{
                document.getElementsByClassName("presc")[index].id = ele.patientId
            })
        }else{
            alert("No Appointment Found")
        }
    }

    async function handleDelete(id){
        // const res  = await deleteAppointment(id)
        const res = await axios.delete("http://localhost:3000/delete-appointment", { data: { id: id }, headers: { "Authorization": null } });
        console.log(res);
        if(res && res.data){
            alert(res.data.message)
            window.location.reload()
        }else{
            alert("Something went wrong")
        }
    }

    function addPrescription(id){
        let btn = document.getElementsByClassName('ap_btn')[0]
        btn.id = id
    }

    async function handlePrescription(){
        let patientId = document.getElementsByClassName('ap_btn')[0].id
        let prescription = document.getElementById("prescription").value
        const payload = {patientId ,prescription}
        const res = await  submitPrescription(payload)
        if(res && res.data){
            alert(res.message)
            window.location.reload()
        }else{
            alert("something went wrong")
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
                        <h3 className="hhh3">Appointment Management</h3>
                    </div>
                    <div className="card-body">
                        <table>
                            <div className="table-container position-relative">
                                <table className="MuiTable-root jss175" aria-label="table">
                                    <thead className="MuiTableHead-root">
                                        <tr className="MuiTableRow-root MuiTableRow-head">
                                            <th className="MuiTableCell-root MuiTableCell-head jss178 MuiTableCell-alignLeft"
                                                scope="col">S. No.</th>
                                            <th className="MuiTableCell-root MuiTableCell-head jss178 MuiTableCell-alignLeft"
                                                scope="col">Mobile Number</th>
                                            <th className="MuiTableCell-root MuiTableCell-head jss178 MuiTableCell-alignLeft"
                                                scope="col"><span className="MuiButtonBase-root MuiTableSortLabel-root"
                                                    tabindex="0" role="button" aria-disabled="false">Patient Name</span></th>
                                            <th className="MuiTableCell-root MuiTableCell-head jss178 MuiTableCell-alignLeft"
                                                scope="col">Doctor Name</th>
                                            <th className="MuiTableCell-root MuiTableCell-head jss178 MuiTableCell-alignLeft"
                                                scope="col">Date</th>
                                                <th className="MuiTableCell-root MuiTableCell-head jss178 MuiTableCell-alignLeft"
                                                scope="col">Time</th>
                                             
                                        </tr>
                                    </thead>
                                    <tbody className="MuiTableBody-root" id="tbody">
                                       
                                    </tbody>
                                </table>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-space-between"
                                    style={{marginTop:30}}>
                                    <div className="MuiGrid-root MuiGrid-item"></div>
                                    <div className="MuiGrid-root MuiGrid-item">
                                        <div className="jss176">
                                            <nav aria-label="pagination navigation" className="MuiPagination-root">
                                                <ul className="MuiPagination-ul">
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="popup1" className="overlay">
        <div className="popup">
            <h2>Prescription</h2>
            <a className="close" href="#">&times;</a>
            <div className="content">
                <textarea type="text" placeholder="Enter Prescription" autocomplete="off" id="prescription"></textarea>
                <button className="ap_btn" onClick={handlePrescription}>Send Now</button>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Appointment
