const sqlConnection = require('../db/config')

exports.contactUs = async (req, res) => {
    try {
        const { name, phone, email, message ,patientId} = req.body
        console.log(req.body);
        sqlConnection.query(`INSERT INTO contactus (name, phone, email, message, patientId) 
                                    VALUES ('${name}','${phone}','${email}','${message}','${patientId}')`, function (err, data) {

            if (err) {
                res.send({ message: 'Something went wrong...', data: "" })
            }
            else {
                res.send({
                    message: "Your message submited successfully successfully",
                    data: data
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
}
