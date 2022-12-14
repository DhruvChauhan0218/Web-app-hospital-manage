const sqlConnection = require('../db/config')
exports.loginUser = async(req,res)=>{
    try {
        const {email,password,role} = req.body
        var find_email_password = `SELECT count(email) as count, id FROM users WHERE email= ? and password = ? and role = ?`
        sqlConnection.query(find_email_password,[email,password,role], function (err, data) {
            console.log(data);
            if(data[0]['count']==1){
                res.send({message:"Login Successfully",data:{id:data[0]['id'],email,password,role}})
            }else{
                res.send({message:"Invalid credential", data:""})
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}