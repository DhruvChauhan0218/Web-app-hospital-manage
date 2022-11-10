import Home from './components/Home';
import About from './components/About';
import CareProgram from './components/CareProgram';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import DoctorExtraDetails from './components/DoctorExtraDetails';
import MyAccount from './components/MyAccount';
import Registration from './components/Registration';
import {Route,Routes} from 'react-router-dom'
import Appointment from './components/Doctor/Appointment';
import DoctorHome from './components/Doctor/DoctorHome';
import Patient from './components/Doctor/Patient';
import PatientQueries from './components/Doctor/PatientQueries';
import DoctorCareProgram from './components/Doctor/DoctorCareProgram';
import "./JS/API/Request"
import "./JS/API/Api"

function App() {
  return (
    <div className="App">
     
      <Routes>
     <Route  exact path="/" element={<Registration/>} />
     <Route  path="/Registration" element={<Registration/>} />
     <Route  path="/Home" element={<><Navbar/><Home/></>} />
     <Route  path="/About" element={<><Navbar/><About/></>} />
     <Route  path="/CareProgram" element={<><Navbar/><CareProgram/></>} />
     <Route  path="/Contact" element={<><Navbar/><Contact/></>} />
     <Route  path="/DoctorExtraDetails" element={<DoctorExtraDetails/>} />
     <Route  path="/MyAccount" element={<><Navbar/><MyAccount/></>} />
     <Route  path="/Doctor/Appointment" element={<Appointment/>} />
     <Route  path="/Doctor/CareProgram" element={<DoctorCareProgram/>} />
     <Route  path="/Doctor/Home" element={<DoctorHome/>} />
     <Route  path="/Doctor/Patient" element={<Patient/>} />
     <Route  path="/Doctor/PatientQueries" element={<PatientQueries/>} />
     </Routes>
    </div>
  );
}

export default App;
