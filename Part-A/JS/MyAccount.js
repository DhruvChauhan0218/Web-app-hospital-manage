
const getAccountDetails=async()=>{
    const res = await getUserData(localStorage.getItem('id'))
    if(res && res.data){
        document.getElementById('firstname').value=res.data.firstname
        document.getElementById('lastname').value=res.data.lastname
        document.getElementById('gender').value=res.data.gender
        document.getElementById('phone').value=res.data.phone
        document.getElementById('email').value=res.data.email
        document.getElementById('role').value=res.data.role
        document.getElementById('password').value=res.data.password
        
        document.getElementById('firstname').disabled=true
        document.getElementById('lastname').disabled=true
        document.getElementById('gender').disabled=true
        document.getElementById('phone').disabled=true
        document.getElementById('email').disabled=true
        document.getElementById('role').disabled=true
        document.getElementById('password').disabled=true
        document.getElementById('submitBtn').style.display="none"
        document.getElementById('cancleBtn').style.display="none"
    }else{
        alert(res.message)
    }
    getPrescription()
}
window.onload=getAccountDetails

const handleEdit = ()=>{
    
        document.getElementById('firstname').disabled=false
        document.getElementById('lastname').disabled=false
        document.getElementById('gender').disabled=false
        document.getElementById('phone').disabled=false
        document.getElementById('email').disabled=false
        document.getElementById('password').disabled=false
        document.getElementById('submitBtn').style.display="block"
        document.getElementById('editBtn').style.display="none"
        document.getElementById('cancleBtn').style.display="block"

}

const handleCancle = ()=>{
        document.getElementById('firstname').disabled=true
        document.getElementById('lastname').disabled=true
        document.getElementById('gender').disabled=true
        document.getElementById('phone').disabled=true
        document.getElementById('email').disabled=true
        document.getElementById('password').disabled=true
        document.getElementById('submitBtn').style.display="none"
        document.getElementById('editBtn').style.display="block"
        document.getElementById('cancleBtn').style.display="none"
        
}

const handleSubmit = async ()=>{
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let gender = document.getElementById('gender').value
    let role = document.getElementById('role').value
    let phone = document.getElementById('phone').value    
    const payload = {
         id:localStorage.getItem("id"),
         firstname, 
         lastname,
         gender,
         email,
         password,
         role,
         phone
    }
    const res = await updateUserAccountDetails(payload)
    if(res && res.data){
        alert(res.message)
        window.location.reload()
    }else{
        alert(res.message)
    }
}

const getPrescription = async ()=>{
    const res  = await getUserPrescription(localStorage.getItem('id'))
    if(res && res.data){
        let parent  = document.getElementById('prescription')
        
        res.data.map((e,index)=>{
            let ele =`<div class="MuiFormControl-root">
                    <label class="MuiInputLabel-shrink">Prescription</label>
                    <div class="MuiInputBase-root">
                    <textarea type="text" cols="40" disabled>${e.prescription}</textarea>
                    </div>
                </div>`
            parent.innerHTML+=ele
        })
    }
}