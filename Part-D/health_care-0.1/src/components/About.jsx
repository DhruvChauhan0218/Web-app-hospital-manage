import React from 'react'
// import "../CSS/About.css"

function About() {

    React.useEffect(() => {
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = './CSS/About.css';
		head.appendChild(link);
	}, []);

    
    return (
        <div>
            
    <section className="sec-overview">
        <div className="overview"><span className="pipe" style={{fontSize:"xx-large",color:"#2075a7"}}>| </span><span
                style={{fontSize:"xx-large"}} >
                <font color="#000000">WHO WE ARE</font>
            </span><br/>
        </div>
        <p className="font">Health Care Foundation an organisation working in the sphere of healthcare. providing high
            quality and affordable primary medical care to low-income and underprivileged communities. Focused on making
            healthcare accessible to the poorest and the most deprived. The healthcare centres provide patients with
            affordable medical consultation along with 1-week supply of free medications. the goal of HCL is to provide
            accurate informaton and free e-consultation through online platform.
        </p>
    </section>

    <div className="format">
        <div>
            <div className="overview"><span className="pipe" style={{fontSize:"xx-large",color:"#2075a7"}}>| </span><span
                    style={{fontSize:"xx-large"}}>
                    <font color="#000000">VISION</font>
                </span><br/>
            </div>
            <div className="image-right">
                <img className="img_right" src="../Assets/2.png" alt="vision image" />
                <div className="text">
                    <p>Our vision is Work as a catalyst in bringing sustainable change in the lives of underprivileged
                        children, youth and women, with a life-cycle approach of development.
                        Adopt highest standards of governance to emerge as a leading knowledge and technology driven,
                        innovative and scalable health care development organisation.
                        The provision for a care program to provide basic medical services at the doorstep
                        of the poorest is also envisioned.
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className="overview"><span className="pipe" style={{fontSize:"xx-large",color:"#2075a7"}}>| </span><span
                    style={{fontSize:"xx-large"}}>
                    <font color="#000000">MISSION</font>
                </span><br/>
            </div>
            <div className="image-left">
                <img className="img_left" src="../Assets/1.png" alt="mission image" />
                <div className="text">
                    <p>Our mission is to eradicate the lack of health care facilities in rural area by creating a chain
                        of primary health care units that offer high quality health solution, affordable outpatient care in low income,
                        densely populated regions, where health care delivery by the state is sparse.
                    </p>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default About
