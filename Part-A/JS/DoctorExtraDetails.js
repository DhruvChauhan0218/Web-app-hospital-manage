const getDoctorsDepartments= async()=>{
    const res= await getDepartments()
    if(res && res.data){
        let parent=document.getElementById('department')
        res.data.map((ele,index)=>{
            let newOption = document.createElement('option')
            newOption.value=`${ele.name}`
            newOption.innerText=`${ele.name}`
            parent.appendChild(newOption)
        })
    }
}
window.onload = getDoctorsDepartments

const handleSubmit = async()=>{
    let clinic = document.getElementById("clinic").value
    let medical = document.getElementById("medical").value
    let department = document.getElementById("department").value
    let experience = document.getElementById("experience").value
    let country = document.getElementById("country").value
    let state = document.getElementById("state").value
    let city = document.getElementById("city").value

    const payload = {clinic,medical,experience,country,state,city,department,doctorId:localStorage.getItem("id")}

    const res = await createClinic(payload)
    if(res && res.data){
        localStorage.setItem('clinicId',res.data.id)
        window.location.href="../HTML/Doctor/Home.html"
    }else{
        alert(res.message)
    }
}