const Blocks = require('./Blocks')
exports.loginUser = async(req,res)=>{
    try {
        const {email,password,role} = req.body
        Blocks.User_Block.findOne({email: new RegExp(email),password: new RegExp(password),
                                    role : new RegExp(role)}, function(err, result) {
          res.send({"data":result,
          "message" : "Succeed."})
        });        
    } catch (error) {
        console.log(error);
    }
}