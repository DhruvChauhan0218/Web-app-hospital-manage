import React from 'react'
import {getPersonalInfo,handleProfileInfoEdit,handleProfileInfoCancle
    ,handleProfileInfoSubmit,getClinicInfo,getDoctorsDepartments,
    handleClinicInfoEdit,handleClinicInfoCancle,handleClinicInfoSubmit
} from '../../src/JS/Docotor/Home'

function Home() {

    React.useEffect(() => {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './CSS/Home.css';
        head.appendChild(link);
    }, [])

    return (
        <div>
            <section className="section-a">
                <div className="container">
                    <div>
                        <h1>Find the care you need</h1>
                        <p>
                            Free health care services at your doorstep
                        </p>
                    </div>
                    <img src="../Assets/main.svg" alt="" width="600" height="430" />
                </div>
            </section>

            <div>
                <h1 className="padding-t20 fs-28 fw-500 txt">Simplifying healthcare for your family</h1>
                <h2 className="padding-b10 fw-200 fs-20 txt">Find preferred doctor and treatments across top hospitals in India.
                </h2>
                <div className="display-flex st_container space-between">
                    <div className="display-flex service_top align-center">
                        <div><img className="imgg"  src="../Assets/medical-appointment.png" alt="Book Appointment" width="160" height="140"
                            loading="lazy"/></div> 
                        <div className="padding-l30 text-left">
                            <h3 className="margin-t10 fw-500 fs-18">Book Appointment</h3>
                            <h4 className="margin-t10 fw-200 fs-16">For hospital consultations and admissions.</h4><a
                                className="GA_hpg_expert click_effect_home no-decoration link btn-credi yellow-cta padding-tb10 margin-b0 padding-l30 padding-r30 fw-500"
                                href="">Consult Now</a>
                        </div>
                    </div>
                    <div className="display-flex service_top align-center">
                        <div><img className="imgg" src="../Assets/blood-test.png" alt="Book Tele/Video Consultation" width="160"
                            height="140" loading="lazy"/></div>
                        <div className="padding-l30 text-left">
                            <h3 className="margin-t10 fw-500 fs-18">Lab tests</h3>
                            <h4 className="margin-t10 fw-200 fs-16">Easy booking & free home pick-up</h4><a
                                className="GA_hpg_tvc_consult click_effect_home no-decoration link btn-credi yellow-cta padding-tb10 margin-b0 padding-l30 padding-r30 fw-500"
                                href="">Book Lab tests</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mg-top">
                <div className="display-flex st_container space-between">
                    <div className="display-flex service_top align-center">
                        <div><img className="imgg" src="../Assets/medical-checkup.png" alt="Book Appointment" width="160" height="140"
                            loading="lazy"/></div>
                        <div className="padding-l30 text-left">
                            <h3 className="margin-t10 fw-500 fs-18">Join a care program</h3>
                            <h4 className="margin-t10 fw-200 fs-16">Free medical check-up and guidance</h4><a
                                className="GA_hpg_expert click_effect_home no-decoration link btn-credi yellow-cta padding-tb10 margin-b0 padding-l30 padding-r30 fw-500"
                                href="">Join now</a>
                        </div>
                    </div>
                    <div className="display-flex service_top align-center">
                        <div><img className="imgg"
                            src="/assets/home/desktop/tcvc-469b0ba4d596f971e2ad3f7f2d0e3c0844d3a0e5b53cc4a0edd8207dfcc6052e.png"
                            alt="Book Tele/Video Consultation" width="160" height="140" loading="lazy"/></div>
                        <div className="padding-l30 text-left">
                            <h3 className="margin-t10 fw-500 fs-18">Book Tele/Video Consultation</h3>
                            <h4 className="margin-t10 fw-200 fs-16">It's fast, easy and secure.</h4><a
                                className="GA_hpg_tvc_consult click_effect_home no-decoration link btn-credi yellow-cta padding-tb10 margin-b0 padding-l30 padding-r30 fw-500"
                                href="/video-consult">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="temp1">Features</h1>

            <div className="LandingPage__features___3O4kS temp">
                <div className="LandingPage__feature___1ExkC">
                    <div className="LandingPage__image___1aIIW"><img src="../Assets/data.svg" alt="100% confidential discussion"/></div>
                    <div className="LandingPage__heading___2FXrb">Integrity in everything</div>
                    <div className="LandingPage__text___1rYkw">We strive never to take the easy path, but always the honest one. We
                        practice integrity in all our actions and try to do the right thing by every stakeholder.</div>
                </div>
                <div className="LandingPage__feature___1ExkC">
                    <div className="LandingPage__image___1aIIW"><img src="../Assets/cer.svg" alt="Certified doctors consultation"/></div>
                    <div className="LandingPage__heading___2FXrb">Certified Doctors</div>
                    <div className="LandingPage__text___1rYkw">We are committed to working together with unconditional respect, freedom, trust and support for each other.</div>
                </div>
                <div className="LandingPage__feature___1ExkC">
                    <div className="LandingPage__image___1aIIW"><img src="../Assets/convience.svg" alt="Seek expert opinion anytime, anywhere"/>
                    </div>
                    <div className="LandingPage__heading___2FXrb">Convenience</div>
                    <div className="LandingPage__text___1rYkw">Forget the hassle of long queues and rush hour. Seek expert opinion
                        anytime, anywhere.</div>
                </div>
                <div className="LandingPage__feature___1ExkC">
                    <div className="LandingPage__image___1aIIW"><img src="../Assets/free.svg"
                        alt="Affordable, cost effective, and economical"/></div>
                    <div className="LandingPage__heading___2FXrb">Free of cost</div>
                    <div className="LandingPage__text___1rYkw">We provide medical assistance for free. We are fiercely committed to
                        our purpose of poverty alleviation, and work with a burning desire to make a difference.</div>
                </div>
            </div>
        </div>
    )
}

export default Home;
