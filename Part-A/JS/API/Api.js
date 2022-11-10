
const registerUserAPi = (payload) =>{
    return request("POST","/register",payload)
}

const loginUserAPi = (payload) =>{
     return request("POST","/login",payload)
}

const getUserData = (id) =>{
    return request("GET","/find?id="+id)
} 

const updateUserAccountDetails = (payload) =>{
    return request("PATCH","/update-account",payload)
} 

const contactUS = (payload) =>{
    return request("POST","/contactUs",payload)
} 

const getAllCareProgram = () =>{
    return request("GET","/get-careprogram")
}
const getDepartments = () =>{
    return request("GET","/department")
}

const createClinic = (payload) =>{
    return request("POST","/create-clinic",payload)
} 

const getClinic = (id) =>{
    return request("GET","/clinic?id="+id)
} 

const updateClinicDetails = (payload) =>{
    return request("PATCH","/update-clinic",payload)
} 

const createAppointment = (payload) =>{
    return request("POST","/create-Appointment",payload)
} 

const getAllDoctors = () =>{
    return request("GET","/doctors")
}

const getAllDoctorsByDepartment = (department) =>{
    return request("GET","/doctorsByDepartment?department="+`${department}`)
}

const getAllAppointment = () =>{
    return request("GET","/getAppointment")
}

const getAllPatient = () =>{
    return request("GET","/patients")
}

const createCareProgram = (payload)=>{
    return request("POST","/create-careprogram",payload)
}

const deleteAppointment=(id)=>{
    return request("DELETE","/delete-appointment",id)
}

const submitPrescription = (payload) =>{
    return request("POST","/addPrescription",payload)
}

const getUserPrescription=(id)=>{
    return request("GET","/prescription?id="+id)
}