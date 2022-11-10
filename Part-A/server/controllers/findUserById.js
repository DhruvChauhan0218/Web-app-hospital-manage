const sqlConnection = require('../db/config')

exports.findUserById = async (req, res) => {
    try {
        const userId = req.query.id
        const query = "SELECT * FROM users where id = ?"
        sqlConnection.query(query, [userId], function (err, data) {
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

exports.updateAccountDetails = async (req, res) => {
    try {
        const { id, email, password, role, gender, firstname, lastname, phone } = req.body
        const query = "UPDATE users SET firstname = ?, lastname= ?, email = ? ,password=?,role= ?,gender=?,phone=? WHERE id = ?"
        const bodyArray = [firstname, lastname, email, password, role, gender,phone, id]
        sqlConnection.query(query, bodyArray, function (err, data) {
            if (data.affectedRows>0) {
                res.send({
                    message: "Account details update Successfully",
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