const moongoose = require('mongoose');
const express = require('express');
const router = express().Router;
const Schema = moongoose.Schema;
const blockSchema = new Schema({
    _id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    createdAt : {
        type : String,
        required : true
    },
    updatedAt : {
        type : String,
        required : true
    },
    __v : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true
    }
});
const UserSchema = new Schema({
   email: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
});
const CareProgramSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    doctor : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    benifits : {
        type : String,
        required : false
    }
})
const ClinicInfoSchema = new Schema({
    clinic: {
        type : String,
        required : false
    },
    medical : {
        type : String,
        required : false
    },
    experience : {
        type : String,
        required : false
    },
    country : {
        type : String,
        required : false
    },
    state : {
        type : String,
        required : false
    },
    city : {
        type : String,
        required : false
    },
    department:{
        type:String,
        required : false
    },
    doctorId : 
    {
        type:String,
        required:false
    }

})
const ContactUsSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    patientId : {
        type : String,
        required : true
    }
})
const UserCareProgramSchema = new Schema(
    {
        patientId : {
            type : String,
            required : true
        },
        careProgramId : {
            type : String,
            required : true
        },
    }
)
const AppointmentSchema = new Schema(
   { 
       department : {
        type : String,
        required : true
    },
    doctorId : {
        type : String,
        required : true
    },
    date: {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    patientId : {
        type : String,
        required : true
    },
    doctorname
     : {
        type : String,
        required : true
    },
    patientname: {
        type : String,
        required : true
    },
    patientphone :{
        type : String,
        required : true
    },
}
)
const PrescriptionSchema = new Schema(
    { 
        patientId : {
         type : String,
         required : true
     },
        prescription : {
         type : String,
         required : true
     },
    }
)
const Department_Block = moongoose.model('departments',blockSchema);
const User_Block = moongoose.model('users',UserSchema);
const CareProgram_Block = moongoose.model('careprogram',CareProgramSchema);
const ClinicInfo_Block = moongoose.model('clinicinfo',ClinicInfoSchema);
const ContactUs_Block = moongoose.model('contactus',ContactUsSchema);
const Appointment_Block = moongoose.model('appointment',AppointmentSchema);
const UserCareProgram_Block = moongoose.model('usercareprogram',UserCareProgramSchema);
const Prescription_Block = moongoose.model('prescription',PrescriptionSchema);

module.exports = {Department_Block,User_Block,CareProgram_Block,
                ClinicInfo_Block,ContactUs_Block,UserCareProgram_Block,
                Appointment_Block,Prescription_Block};