const Blocks = require('./Blocks')

exports.contactUs = async (req, res) => {
    try {
        const ContactUs = Blocks.ContactUs_Block(
            {name, phone, email, message ,patientId }= req.body)
        ContactUs.save();
    } catch (error) {
        console.log(error);
    }
}
exports.getQueries= async(req,res)=>{
    try {
        Blocks.ContactUs_Block.find()
        .then((result)=>{
        res.send({"data":result,
        "message" : "Succeed."})});

    } catch (error) {
        console.log(error);
    }
}
