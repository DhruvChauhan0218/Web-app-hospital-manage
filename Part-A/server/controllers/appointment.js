const sqlConnection = require('../db/config')

exports.createAppointment = async (req, res) => {
    try {
        const { department, doctorId, date, time, patientId, doctorname, patientname ,patientphone} = req.body

        sqlConnection.query(`INSERT INTO appointment (department, doctorId, date, time, patientId, doctorname, patientname,patientphone) 
                                    VALUES ('${department}','${doctorId}','${date}','${time}','${patientId}','${doctorname}','${patientname}','${patientphone}')`, function (err, data) {
            if (err) {
                res.send({ message: 'Something went wrong...', data: "" })
            }
            else {
                res.send({
                    message: "Appointment booked successfully",
                    data: { time, patientId, department, doctorname, patientname, doctorId, patientphone, date, id: data.insertId}
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getAllAppointment=async(req,res)=>{
    try {
        const query = "SELECT * FROM appointment"
        sqlConnection.query(query,function (err, data) {
            console.log(data);
            if (data.length) {
                res.send({message:"Appointments fetch Successfully", data:data})
            }else{
                res.send({message:"Something went wrong", data:""})
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.deleteAppointment = async(req,res)=>{
    try {
        const {id} = req.body
        var delete_query ='DELETE FROM appointment WHERE id= ?'
        sqlConnection.query(delete_query,[id],function (err, data) {
            console.log(data);
            if(data.affectedRows==1){
                res.send({message:"Delete Successfully",data: data})
            }else{
                res.send({message:"Something went wrong", data:""})
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}