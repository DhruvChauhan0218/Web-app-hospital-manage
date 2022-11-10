const sqlConnection = require('../db/config')

exports.getAllDepartments=async(req,res)=>{
    try {
        const query = "SELECT * FROM department"
        sqlConnection.query(query,function (err, data) {
            console.log(data);
            if (data.length) {
                res.send({message:"Department fetch Successfully", data:data})
            }else{
                res.send({message:"Something went wrong", data:""})
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getAllDoctorsByDepartment = async (req, res) => {
    try {
        const department = req.query.department
        const query = "SELECT * FROM clinicInfo where department = ?"
        sqlConnection.query(query, [department], function (err, data) {
            if (data.length) {
                res.send({
                    message: "Successfully found",
                    data: data
                })
            } else {
                res.send({ message: "User not found", data: "" })
            }

        })
    } catch (error) {
        console.log(error);
    }
}