const Blocks = require('./Blocks')
exports.addPrescription = async (req, res) => {
    try {
        Blocks.Prescription_Block(
            { patientId, prescription } = req.body
        ).save();
    } catch (error) {
        console.log(error);
    }
}

exports.getPrescription = async (req, res) => {
    try {
        const id = req.query.id
        Blocks.Prescription_Block.findById(id,function(err,result)
        {
            res.send({"data":result,
            "message" : "Succeed."})
        });
    } catch (error) {
        console.log(error);
    }
}
