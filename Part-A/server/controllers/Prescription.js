const sqlConnection = require('../db/config')

exports.addPrescription = async (req, res) => {
    try {
        const { patientId, prescription } = req.body
        sqlConnection.query(`INSERT INTO prescription (patientId, prescription) 
                                    VALUES ('${patientId}','${prescription}')`, function (err, data) {
 
            if (err) {
                res.send({ message: 'Something went wrong...', data: "" })
            }
            else {
                res.send({
                    message: "Prescription added successfully",
                    data: { patientId, prescription }
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getPrescription = async (req, res) => {
    try {
        const id = req.query.id
        const query = "SELECT * FROM prescription where patientId = ?"
        sqlConnection.query(query, [id], function (err, data) {
            if (data.length) {
                res.send({
                    message: "Successfully found",
                    data: data
                })
            } else {
                res.send({ message: "Prescription not found", data: "" })
            }

        })
    } catch (error) {
        console.log(error);
    }
}
