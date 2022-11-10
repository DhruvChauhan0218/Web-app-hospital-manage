const Blocks = require('./Blocks')
exports.getAllDoctors=async(req,res)=>{
    try {
        Blocks.User_Block.findOne({role: new RegExp('doctor')},function(err, result) {
        res.send({"data":result,
        "message" : "Succeed."})});
    } catch (error) {
        console.log(error);
    }
}

exports.getAllPatient=async(req,res)=>{
    try {
        Blocks.User_Block.find({role: new RegExp('patient')},function(err, result) {
            res.send({"data":result,
                        "message" : "Succeed."})});

    } catch (error) {
        console.log(error);
    }
}