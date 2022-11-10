const sqlConnection = require('../db/config')

exports.deleteUser = async(req,res)=>{
    try {
        const {email, password ,role} = req.body
        var delete_query ='DELETE FROM users WHERE email= ?'
        sqlConnection.query(delete_query,[email],function (err, data) {
            if(data.affectedRows==1){
                res.send({msg:"Delete Successfully"})
            }else{
                res.send({msg:"Something went wrong"})
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}