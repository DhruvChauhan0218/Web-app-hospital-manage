const sqlConnection = require('../db/config')

exports.registerUser = async (req, res) => {
    try {
        const { email, password, role, gender, firstname, lastname, phone } = req.body
        var count_query = `SELECT count(email) FROM users WHERE email= ?`

        sqlConnection.query(count_query, [email], function (err, data) {
            if (data[0]['count(email)'] == 0) {
                sqlConnection.query(`INSERT INTO users (firstname, lastname, phone, email, password, gender, role) 
                                    VALUES ('${firstname}','${lastname}','${phone}','${email}','${password}','${gender}','${role}')`, function (err, data) {
                    if (err) {
                        res.send({ message: 'Something went wrong...' , data:""})
                    }
                    else {
                        res.send({
                            message: "Successfully Registerd",
                            data: { email, password, role, gender, firstname, lastname, phone ,id:data.insertId}
                        })
                    }
                })
            } else {
                res.send({message:"This email is already in use...",data:""})
            }

        })

    } catch (error) {
        console.log(error);
    }
}