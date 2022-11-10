import React from 'react'
// import "../CSS/Contact.css"
import {getUserData,contactUS} from "../JS/API/Api"


function Contact() {

  React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = './CSS/Contact.css';
		head.appendChild(link);
	}, [])

    async function handleSubmit(){
        const res = await getUserData(localStorage.getItem("id"));
        if(res && res.data){
          const payload = {
            name: `${res.data.firstname} ${res.data.lastname}`,
            email:res.data.email,
            patientId : res.data.id,
            phone:res.data.phone,
            message:document.getElementById("message").value
          }
          const response = await contactUS(payload)
          if(response && response.data){
            alert(response.message)
            window.location.reload()
          }else{
            alert(response.message)
          }
        }
      }

    return (
        <div>
             <section className="main-container">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="far fa-question-circle"></i>
              <div className="topic">FOR GENERAL ENQUIRIES</div>
              <div className="text-one">info.healthassist@gmail.com</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+1416-555-0707</div>
              <div className="text-two">+1416-555-0261</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">healthlab@gmail.com</div>
              <div className="text-two">help.patient@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>We’re happy to speak with you about any healthcare related issues you may be experiencing to identify if our services meet your needs.</p>
            <form action="#">
              <div className="input-box input-box message-box">
                <input type="text" placeholder="Enter Your Query" id="message" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" onClick={handleSubmit}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Contact
