import React from 'react'
// import "../CSS/Navbar.css";
import {handleLogout} from  "../JS/Navbar"

function Navbar() {

	React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = './CSS/Navbar.css';
		head.appendChild(link);
	}, [])

	
    return (
        <div>
            <nav>
	<a className="logo" href="#">Logo</a>
	<ul className="nav-bar">
		<li className="nav-bar_item" ><a href="./Home"  id="Home">home</a></li>
		<li className="nav-bar_item"><a href="./About" id="About">about</a></li>
		<li className="nav-bar_item dropdown">
			<a href="#">services</a>
			<ul className="project">
				<li className="drop-item"><a href="../CareProgram" id="CareProgram">CareProgram</a></li>
				<li className="drop-item"><a href="">Work 2</a></li>
			</ul>
		</li>
		{/* <!-- <li className="nav-bar_item"><a href="">services</a></li> --> */}
		<li className="nav-bar_item"><a href="./Contact" id="Contact">contact</a></li>
		<li className="nav-bar_item dropdown">
			<a href="#">Profile</a>
			<ul className="project">
				<li className="drop-item"><a href="./MyAccount" id="MyAccount">My Account</a></li>
				<li className="drop-item"><a href="../Registration" onClick={handleLogout}>Signout</a></li>
			</ul>
		</li>
		{/* <!-- <li className="nav-bar_item"><a href="../HTML/Registration.html" onclick="handleLogout()">Logout</a></li> --> */}
	</ul>
</nav>
        </div>
    )
}

export default Navbar
