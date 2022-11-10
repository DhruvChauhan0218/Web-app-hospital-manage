

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// // var url = window.location.pathname;
// // var filename = url.substring(url.lastIndexOf('/')+1);
// // alert(filename);
const handleRegister = async() =>{
	let firstname = document.getElementById("firstname").value
	let lastname = document.getElementById("lastname").value
	let email = document.getElementById("email").value
	let password = document.getElementById("password").value
	let gender = document.getElementById("gender").value
	let role = document.getElementById("role").value
	let phone = document.getElementById("phone").value

	let payload = {firstname,lastname,email,password,gender,role,phone}
	let res = await registerUserAPi(payload)
	if(res.data){
		localStorage.setItem('role',res.data.role)
		localStorage.setItem('id',res.data.id)
		if(res.data.role=="doctor"){
			window.location.href="DoctorExtraDetails.html"
		}else{
			window.location.href="Home.html"
		}
	}else{
		alert(res.messsage)
	}
}

const handleLogin = async() =>{
	let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let role = document.getElementById("login-role").value;
	let payload = {email,password,role}
	let res = await loginUserAPi(payload)
	console.log(res);
	if(res.data){
		alert(res.message)
		localStorage.setItem('role',res.data.role)
		localStorage.setItem('id',res.data.id)
		// window.location.href="Home.html"
		console.log(res.role);
		if(res.data.role=="doctor"){
			window.location.href="../HTML/Doctor/Home.html"
		}else{
			window.location.href="Home.html"
		}
	}else{
		alert(res.message)
	}
}