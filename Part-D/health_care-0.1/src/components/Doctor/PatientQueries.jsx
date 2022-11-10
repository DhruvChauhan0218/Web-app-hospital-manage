import React from 'react'
import { getAllQueries } from '../../JS/API/Api';
import Sidebar from './Sidebar'

function PatientQueries() {

    React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = '../CSS/Doctor/Patient.css';
		head.appendChild(link);
        
        getPatientQueries();
	}, []);

    async function getPatientQueries(){
    
        const res = await getAllQueries()
        if(res && res.data){    
            let parent = document.getElementById('tbody')
            res.data.map((ele,index)=>{

                    let row = ` <tr className="MuiTableRow-root jss180 MuiTableRow-hover">
                                         <td
                                             className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                             00${index+1}</td>
                                         <td
                                             className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                            ${ele.phone}</td>
                                         <td
                                             className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                             ${ele.name}</td>
                                         <td
                                             className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                             ${ele.email}</td>
                                         <td
                                             className="MuiTableCell-root MuiTableCell-body jss179 MuiTableCell-alignLeft">
                                             <span style="text-transform: capitalize;">${ele.message}</span></td>
                                     </tr>`
                    parent.innerHTML += row
            })
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
                        <h3 className="hhh3">Patient Management</h3>
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
                                            scope="col">email</th>
                                            <th className="MuiTableCell-root MuiTableCell-head jss178 MuiTableCell-alignLeft"
                                                scope="col">Query</th>
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
        </div>
    )
}

export default PatientQueries
