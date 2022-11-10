import { request } from "./Request"


export const registerUserAPi = (payload) =>{
    return request("POST","/register",payload)
}

export const loginUserAPi = (payload) =>{
     return request("POST","/login",payload)
}

export const getUserData = (id) =>{
    return request("GET","/find?id="+id)
} 

export const updateUserAccountDetails = (payload) =>{
    return request("PATCH","/update-account",payload)
} 

export const contactUS = (payload) =>{
    return request("POST","/contactUs",payload)
} 

export const getAllCareProgram = () =>{
    return request("GET","/get-careprogram")
}
export const getDepartments = () =>{
    return request("GET","/department")
}

export const createClinic = (payload) =>{
    return request("POST","/create-clinic",payload)
} 

export const getClinic = (id) =>{
    return request("GET","/clinic?id="+id)
} 

export const updateClinicDetails = (payload) =>{
    return request("PATCH","/update-clinic",payload)
} 

export const createAppointment = (payload) =>{
    return request("POST","/create-Appointment",payload)
} 

export const getAllDoctors = () =>{
    return request("GET","/doctors")
}

export const getAllDoctorsByDepartment = (department) =>{
    return request("GET","/doctorsByDepartment?department="+`${department}`)
}

export const getAllAppointment = () =>{
    return request("GET","/getAppointment")
}

export const getAllPatient = () =>{
    return request("GET","/patients")
}

export const createCareProgram = (payload)=>{
    return request("POST","/create-careprogram",payload)
}

export const deleteAppointment=(id)=>{
    return request("DELETE","/delete-appointment",id)
}

export const submitPrescription = (payload) =>{
    return request("POST","/addPrescription",payload)
}

export const getUserPrescription=(id)=>{
    return request("GET","/prescription?id="+id)
}

export const getAllQueries = () =>{
    return request("GET","/getQueries")
}

export const joinUserCareProgram = (payload) =>{
    return request("POST","/join-careprogram",payload)
}

export const getAllUserCareProgram = () =>{
    return request("GET","/get-userCareprogram")
}
