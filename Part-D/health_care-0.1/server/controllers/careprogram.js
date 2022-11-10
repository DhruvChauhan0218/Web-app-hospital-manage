const Blocks = require('./Blocks')
const body = require('body-parser');

exports.createCareProgram = async (req, res) => {
    try {
         const careProgram = Blocks.CareProgram_Block(
           { name,description,doctor,department,duration,benifits} = req.body);
            careProgram.save();
            res.send({data:"acb"})
    } catch (error) {
        console.log(error);
    }
}

exports.getAllCarePrograms=async(req,res)=>{
    try {
        Blocks.CareProgram_Block.find()
        .then((result)=>{
        res.send({"data":result,
        "message" : "Succeed."})});
    } catch (error) {
        console.log(error);
    }
}
exports.deleteCareProgram  = async(req,res)=>{
    try {
        const {careProgramId} = req.body;
        Blocks.CareProgram_Block.findById(careProgramId,function(err,result)
        {
            result.delete();
        });
    } catch (error) {
        console.log(error);
    }
}
exports.joinCareProgram = async (req, res) => {
        try {
            const careProgram = Blocks.UserCareProgram_Block(
                { patientId,careProgramId} = req.body);
                 careProgram.save();
        } catch (error) {
            console.log(error);
        }
    }
exports.getUserCarePrograms=async(req,res)=>{
        try {
            Blocks.UserCareProgram_Block.find()
        .then((result)=>{
        res.send({"data":result,
        "message" : "Succeed."})});
        } catch (error) {
            console.log(error);
        }
    }