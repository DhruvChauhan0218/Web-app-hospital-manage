
const getPersonalInfo = async () => {
    const res = await getUserData(localStorage.getItem('id'))
    if (res && res.data) {
        document.getElementById('firstname').value = res.data.firstname
        document.getElementById('lastname').value = res.data.lastname
        document.getElementById('gender').value = res.data.gender
        document.getElementById('phone').value = res.data.phone
        document.getElementById('email').value = res.data.email
        document.getElementById('role').value = res.data.role
        document.getElementById('password').value = res.data.password

        document.getElementById('firstname').disabled = true
        document.getElementById('lastname').disabled = true
        document.getElementById('gender').disabled = true
        document.getElementById('phone').disabled = true
        document.getElementById('email').disabled = true
        document.getElementById('role').disabled = true
        document.getElementById('password').disabled = true
        document.getElementById('profileSubmitBtn').style.display = "none"
        document.getElementById('profileCancleBtn').style.display = "none"
        getDoctorsDepartments()
        getClinicInfo()
    } else {
        alert(res.message)
    }
}
window.onload = getPersonalInfo

const handleProfileInfoEdit = () => {

    document.getElementById('firstname').disabled = false
    document.getElementById('lastname').disabled = false
    document.getElementById('gender').disabled = false
    document.getElementById('phone').disabled = false
    document.getElementById('email').disabled = false
    document.getElementById('password').disabled = false
    document.getElementById('profileSubmitBtn').style.display = "block"
    document.getElementById('profileEditBtn').style.display = "none"
    document.getElementById('profileCancleBtn').style.display = "block"

}

const handleProfileInfoCancle = () => {
    document.getElementById('firstname').disabled = true
    document.getElementById('lastname').disabled = true
    document.getElementById('gender').disabled = true
    document.getElementById('phone').disabled = true
    document.getElementById('email').disabled = true
    document.getElementById('password').disabled = true
    document.getElementById('profileSubmitBtn').style.display = "none"
    document.getElementById('profileEditBtn').style.display = "block"
    document.getElementById('profileCancleBtn').style.display = "none"

}

const handleProfileInfoSubmit = async () => {
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let gender = document.getElementById('gender').value
    let role = document.getElementById('role').value
    let phone = document.getElementById('phone').value
    const payload = {
        id: localStorage.getItem("id"),
        firstname,
        lastname,
        gender,
        email,
        password,
        role,
        phone
    }
    const res = await updateUserAccountDetails(payload)
    if (res && res.data) {
        alert(res.message)
        window.location.reload()
    } else {
        alert(res.message)
    }
}


const getClinicInfo = async () => {
    const res = await getClinic(localStorage.getItem("clinicId"))
    if (res && res.data) {
    document.getElementById("clinic").value = res.data.clinic
    document.getElementById("medical").value = res.data.medical
    document.getElementById("department").value = res.data.department
    document.getElementById("experience").value =res.data.experience
    document.getElementById("country").value = res.data.country
    document.getElementById("state").value = res.data.state
    document.getElementById("city").value = res.data.city

    document.getElementById("clinic").disabled = true
    document.getElementById("medical").disabled = true
    document.getElementById("department").disabled = true
    document.getElementById("experience").disabled = true
    document.getElementById("country").disabled = true
    document.getElementById("state").disabled = true
    document.getElementById("city").disabled = true
    document.getElementById('ClinicInfoSubmitBtn').style.display = "none"
    document.getElementById('ClinicInfoCancleBtn').style.display = "none"
}else {
    alert(res.message)
    }
}


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


const handleClinicInfoEdit = () => {

    document.getElementById("clinic").disabled = false
    document.getElementById("medical").disabled = false
    document.getElementById("department").disabled = false
    document.getElementById("experience").disabled = false
    document.getElementById("country").disabled = false
    document.getElementById("state").disabled = false
    document.getElementById("city").disabled = false
    document.getElementById('ClinicInfoSubmitBtn').style.display = "block"
    document.getElementById('ClinicInfoEditBtn').style.display = "none"
    document.getElementById('ClinicInfoCancleBtn').style.display = "block"

}

const handleClinicInfoCancle = () => {
    document.getElementById("clinic").disabled = true
    document.getElementById("medical").disabled = true
    document.getElementById("department").disabled = true
    document.getElementById("experience").disabled = true
    document.getElementById("country").disabled = true
    document.getElementById("state").disabled = true
    document.getElementById("city").disabled = true
    document.getElementById('ClinicInfoSubmitBtn').style.display = "none"
    document.getElementById('ClinicInfoEditBtn').style.display = "block"
    document.getElementById('ClinicInfoCancleBtn').style.display = "none"

}

const handleClinicInfoSubmit = async () => {
    let clinic = document.getElementById("clinic").value
    let medical = document.getElementById("medical").value
    let department = document.getElementById("department").value
    let experience = document.getElementById("experience").value
    let country = document.getElementById("country").value
    let state = document.getElementById("state").value
    let city = document.getElementById("city").value
    const payload = {
        id: localStorage.getItem("clinicId"),
        clinic, medical,department,experience,country,state,city
    }
    const res = await updateClinicDetails(payload)
    if (res && res.data) {
        alert(res.message)
        window.location.reload()
    } else {
        alert(res.message)
    }
}

