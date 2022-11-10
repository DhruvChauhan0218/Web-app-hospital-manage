const sqlConnection = require('../db/config')

exports.getAllDoctors=async(req,res)=>{
    try {
        const query = "SELECT * FROM users where role='doctor' "
        sqlConnection.query(query,function (err, data) {
            console.log(data);
            if (data.length) {
                res.send({message:"fetch Successfully", data:data})
            }else{
                res.send({message:"Something went wrong", data:""})
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getAllPatient=async(req,res)=>{
    try {
        const query = "SELECT * FROM users where role='patient' "
        sqlConnection.query(query,function (err, data) {
            console.log(data);
            if (data.length) {
                res.send({message:"fetch Successfully", data:data})
            }else{
                res.send({message:"Something went wrong", data:""})
            }
        })

    } catch (error) {
        console.log(error);
    }
}