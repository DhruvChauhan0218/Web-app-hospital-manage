import React from 'react'

function Sidebar() {
    
    React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = '../CSS/Doctor/Sidebar.css';
		head.appendChild(link);

	}, []);

    return (
        <div className="dashboard">
        <div className="dashboard-nav">
            <header>
                <a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a>
                <a href="#" className="brand-logo"><i className="fas fa-anchor"></i> <span>Your Care</span></a>
            </header>
            <nav className="dashboard-nav-list">
                <a href="../Doctor/Home" className="dashboard-nav-item" id="Home"><i className="fas fa-home"></i> Home </a>
                <a href="../Doctor/Patient" className="dashboard-nav-item" id="Patient"><i className="fas fa-tachometer-alt"></i>
                    Patients </a>
                <a href="../Doctor/Appointment" className="dashboard-nav-item" id="Appointment"><i className="fas fa-file-upload"></i>
                    Appointments </a>
                
               
                <a href="../Doctor/CareProgram" className="dashboard-nav-item" id="CareProgram"><i className="fas fa-cogs"></i> CareProgram
                </a>
                <a href="../Doctor/PatientQueries" className="dashboard-nav-item" id="PatientQueries"><i className="fas fa-cogs"></i> Patient Queries
                </a>
               
                <div className="nav-item-divider"></div>
                <a href="../Registration" className="dashboard-nav-item" onclick="handleLogout()"><i
                        className="fas fa-sign-out-alt"></i> Signout </a>
            </nav>
        </div>
        
    </div>
    )
}

export default Sidebar
