const sqlConnection = require('../db/config')

exports.createClinic = async (req, res) => {
    try {
        const { clinic, medical, experience, country, state, city, department ,doctorId} = req.body

        sqlConnection.query(`INSERT INTO clinicInfo (clinic, medical, experience, country, state, city, department,doctorId) 
                                    VALUES ('${clinic}','${medical}','${experience}','${country}','${state}','${city}','${department}','${doctorId}')`, function (err, data) {
            if (err) {
                res.send({ message: 'Something went wrong...', data: "" })
            }
            else {
                res.send({
                    message: "Successfully Registerd",
                    data: { country, state, department, city, clinic, medical, experience, id: data.insertId,doctorId }
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getClinicById = async (req, res) => {
    try {
        const clinicId = req.query.id
        const query = "SELECT * FROM clinicInfo where id = ?"
        sqlConnection.query(query, [clinicId], function (err, data) {
            if (data.length) {
                res.send({
                    message: "Successfully found",
                    data: data[0]
                })
            } else {
                res.send({ message: "User not found", data: "" })
            }

        })
    } catch (error) {
        console.log(error);
    }
}

exports.updateClinicDetails = async (req, res) => {
    try {
        const { id,  clinic, medical,department,experience,country,state,city } = req.body
        const query = "UPDATE clinicInfo SET clinic = ?, medical= ?, department = ? ,experience=?,country= ?,state=?, city= ? WHERE id = ?"
        const bodyArray = [clinic, medical, department, experience, country, state, city,id]
        sqlConnection.query(query, bodyArray, function (err, data) {
            if (data.affectedRows>0) {
                res.send({
                    message: "Clinic details update Successfully",
                    data: req.body
                })
            } else {
                res.send({ message: "Someting went wrong", data: "" })
            }
        })
    } catch (error) {
        console.log(error);
    }
}