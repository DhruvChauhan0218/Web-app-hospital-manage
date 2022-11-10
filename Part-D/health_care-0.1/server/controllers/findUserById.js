const Blocks = require('./Blocks')

exports.findUserById = async (req, res) => {
    try {
        const userId = req.query._id;
        Blocks.User_Block.findById(userId,function(err,result)
        {
            res.send({"data":result,
            "message" : "Succeed."})
        });
    } catch (error) {
        console.log(error);
    }
}

exports.updateAccountDetails = async (req, res) => {
    try {
        Blocks.User_Block.findByIdAndUpdate(req.body.id,
        {email, password, role, gender, firstname, lastname, phone } = req.body,function(err,result)
        {
            res.send({data:"aaa"})
            console.log("Details Updated.");
        });
    }
    catch (error) 
    {
        console.log(error);
    }
}