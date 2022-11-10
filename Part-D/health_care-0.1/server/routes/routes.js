 const express = require('express')
 const router = express.Router()
 const registeration = require("../controllers/registration")
 const login = require("../controllers/login")
 const remove = require("../controllers/deleteUser")
 const finduser = require("../controllers/findUserById")
 const careprogram = require("../controllers/careprogram")
 const contactUs = require("../controllers/contactUs")
 const department = require("../controllers/department")
 const clinic = require("../controllers/clinic")
 const doctors_patient =require("../controllers/doctors")
 const appointment = require("../controllers/appointment")
  const prescription = require("../controllers/Prescription")
// //users
 router.post("/login",login.loginUser)
 router.post("/register",registeration.registerUser)
 router.get("/find?:_id",finduser.findUserById)
 router.patch("/update-account",finduser.updateAccountDetails)
 router.delete("/remove",remove.deleteUser)

 //care program
 router.post("/create-careprogram",careprogram.createCareProgram)
  router.post("/join-careprogram",careprogram.joinCareProgram)
  router.get("/get-careprogram",careprogram.getAllCarePrograms)
 router.get("/get-userCareprogram",careprogram.getUserCarePrograms)
 router.delete("/delete-careprogram",careprogram.deleteCareProgram)

// contact us
 router.post("/contactUs",contactUs.contactUs)
 router.get("/getQueries",contactUs.getQueries)

 // departments
 router.get("/department",department.getAllDepartments)
 router.get("/doctorsByDepartment?:department",department.getAllDoctorsByDepartment)

// clinic
 router.post("/create-clinic",clinic.createClinic)
 router.get("/clinic?:id",clinic.getClinicById)
 router.patch("/update-clinic",clinic.updateClinicDetails)

//getAllDoctors
 router.get("/doctors",doctors_patient.getAllDoctors)

//getAllPatient
 router.get("/patients",doctors_patient.getAllPatient)

//create Appointment
 router.post("/create-Appointment",appointment.createAppointment)
 router.get("/getAppointment",appointment.getAllAppointment)
 router.delete("/delete-appointment",appointment.deleteAppointment)

//add prescription
 router.post("/addPrescription",prescription.addPrescription)
 router.get("/prescription?:id",prescription.getPrescription)



 module.exports = router