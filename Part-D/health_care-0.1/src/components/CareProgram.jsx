import React from 'react'
// import "../CSS/CareProgram.css"
import "../JS/CareProgram.js"

function CareProgram() {

    React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = './CSS/CareProgram.css';
		head.appendChild(link);
	}, [])
    return (
        <div className="main-container">
        <div className="container">
            No Data Found....!
        </div> 
    </div>
    )
}

export default CareProgram
