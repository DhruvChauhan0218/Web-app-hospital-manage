var departments= []
var doctors = []
const getDoctorsDepartments= async()=>{
    const res= await getDepartments()
    if(res && res.data){
        let parent=document.getElementById('department')
        departments =  res.data
        departments.map((ele,index)=>{
            let newOption = document.createElement('option')
            newOption.value=`${ele.name}`
            newOption.innerText=`${ele.name}`
            parent.appendChild(newOption)
        })
    }
    getDoctors()
}
window.onload = getDoctorsDepartments


const getDoctors = async ()=>{
    const res = await getAllDoctors()
    if(res && res.data){
        let parent=document.getElementById('doctor')
        doctors =  res.data
        doctors.map((ele,index)=>{
            let newOption = document.createElement('option')
            newOption.value=`${ele.id}`
            newOption.innerText=`Dr.${ele.firstname} ${ele.lastname}`
            parent.appendChild(newOption)
        })
    }
}


const handleOnchange = async()=>{
    let department = document.getElementById('department').value
    const res = await getAllDoctorsByDepartment(department)
    if(res && res.data){
        let filteredDoctor = []
        res.data.map((ele,i)=>{
            doctors.map((doctor,index)=>{
                if(doctor.id==ele.doctorId){
                    filteredDoctor.push(doctor)
                }
            })
        })
        let parent=document.getElementById('doctor')
        parent.innerHTML=""
        filteredDoctor.map((ele,index)=>{
            let newOption = document.createElement('option')
            newOption.value=`${ele.id}`
            newOption.innerText=`Dr.${ele.firstname} ${ele.lastname}`
            parent.appendChild(newOption)
        })
    }else{
        let parent=document.getElementById('doctor')
        parent.innerHTML=""
    }
}

const handleSubmit = async () =>{
    let department =document.getElementById('department').value
    let doctorId =document.getElementById('doctor').value
    let date =document.getElementById('date').value
    let time =document.getElementById('time').value

    const doctorData = await getUserData(doctorId)
    const patientData = await getUserData(localStorage.getItem('id'))
    if(doctorData && patientData){
        const payload = {
            department, doctorId, date, time, 
            patientId : localStorage.getItem("id"),
            doctorname: `${doctorData.data.firstname} ${doctorData.data.lastname}`,
            patientname: `${patientData.data.firstname} ${patientData.data.lastname}`,
            patientphone : patientData.data.phone
        }
        const res  = await createAppointment(payload)
        if(res && res.data){
            alert(res.message)
            window.location.reload()
        }else{
            alert(res.message)
        }
    }else{
        alert("something went wrong")
    }

}