const Connection = require('../db/config')
const Blocks = require('./Blocks')
exports.getAllDepartments=async(req,res)=>{
    try {
        Blocks.Department_Block.find()
        .then((result)=>{
        res.send({"data":result,
        "message" : "Succeed."})
    });
    } catch (error) {
        console.log(error);
    }
}
exports.getAllDoctorsByDepartment = async (req, res) => {
    try {
        const department = req.query.department
        Blocks.ClinicInfo_Block.findOne(
            {department: new RegExp(department)}, function(err, result) {
            res.send({"data":result,
            "message" : "Succeed."})
});  

        
    } catch (error) {
        console.log(error);
    }
}