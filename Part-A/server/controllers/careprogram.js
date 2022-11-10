const sqlConnection = require('../db/config')

exports.createCareProgram = async (req, res) => {
    try {
        console.log(req.body);
        const { name, description, doctor, department, duration, benefits } = req.body
        sqlConnection.query(`INSERT INTO careprogram (name, description, doctor, department, duration, benefits) 
                                    VALUES ('${name}','${description}','${doctor}','${department}','${duration}','${benefits}')`, function (err, data) {
 
            if (err) {
                res.send({ message: 'Something went wrong...', data: "" })
            }
            else {
                res.send({
                    message: "Care program created successfully",
                    data: { department, duration, benefits, name, description, doctor }
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getAllCarePrograms=async(req,res)=>{
    try {
        const query = "SELECT * FROM careprogram"
        sqlConnection.query(query,function (err, data) {
            if (data.length) {
                res.send({message:"Careprogram found successfully", data:data})
            }else{
                res.send({message:"Careprogram not found. please create careprogram", data:""})
            }
        })

    } catch (error) {
        console.log(error);
    }
}
exports.deleteCareProgram  = async(req,res)=>{
    try {
        const {careProgramId} = req.body
        const query = "DELETE FROM careprogram WHERE id=?"
        sqlConnection.query(query, [careProgramId], function (err, data) {
            console.log(data);
            if (data.affectedRows>0) {
                res.send({
                    message: "Careprogram delete successfully",
                    data: data
                })
            } else {
                res.send({ message: "Careprogram not found", data: "" })
            }

        })
    } catch (error) {
        console.log(error);
    }
}   