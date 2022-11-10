const Blocks = require('./Blocks')
exports.deleteUser = async(req,res)=>{
    try {
        const {email, password ,role} = req.body
        Blocks.User_Block.findOne({email: new RegExp(email)}, function(err, result) {
            result.delete();
                });
        
    } catch (error) {
        console.log(error);
    }
}