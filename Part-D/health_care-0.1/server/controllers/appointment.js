const Blocks = require('./Blocks')
exports.createAppointment = async (req, res) => {
    try {
       const appointment =  Blocks.Appointment_Block(
            {department, doctorId, date, time, patientId, doctorname, patientname ,patientphone} = req.body
        )
            appointment.save();
    } catch (error) {
        console.log(error);
    }
}

exports.getAllAppointment=async(req,res)=>{
    try {
        Blocks.Appointment_Block.find()
        .then((result)=>res.send({"data":result,
        "message" : "Succeed."}))
    } catch (error) {
        console.log(error);
    }
}

exports.deleteAppointment = async(req,res)=>{
    try {
        const {id} = req.body
        Blocks.Appointment_Block.findById(id,function(err,result)
        {
            result.delete();
        });
    } catch (error) {
        console.log(error);
    }
}