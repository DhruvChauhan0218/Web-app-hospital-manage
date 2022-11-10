const sqlConnection = require('../db/config')
const Blocks = require('./Blocks')

exports.createClinic = async (req, res) => {
    try {
        const clinic_info = Blocks.ClinicInfo_Block(
            { clinic, medical, experience, country, state, city, department ,doctorId} = req.body)
            clinic_info.save();
            res.send({data:"aaa"})
    } catch (error) {
        console.log(error);
    }
}

exports.getClinicById = async (req, res) => {
    try {
        const clinicId = req.query.id
        Blocks.ClinicInfo_Block.findById(clinicId,function(err,result)
        {
            res.send({"data":result,
            "message" : "Succeed."})
        });
    } catch (error) 
    {
        console.log(error);
    }
}
exports.updateClinicDetails = async (req, res) => {
    try {
        Blocks.ClinicInfo_Block.findByIdAndUpdate(req.body.id,
        {clinic,medical,experience,country,state,city,department,doctorId } = req.body,function(err,result)
        {
            res.send({"data":"data"})
         console.log("Details Updated.");
        });
    } catch (error) {
        console.log(error);
    }
}
