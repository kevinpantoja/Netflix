const inputs = document.querySelectorAll(".formulario__textbox");
let formulario = document.getElementById("formulario");
let correo = "usuario@gmail.com";
let password = "123456";
const expresiones = {
    password: /^.{6,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos = {
	password: false,
	correo: false,
}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`notify__${campo}`).style.display = "none";
		if(campo == "password")
			inputs[1].style.borderBottom = "none";
		else
			inputs[0].style.borderBottom = "none";
		campos[campo] = true;
	} else {
		document.getElementById(`notify__${campo}`).style.display = "block";
		if(campo == "password"){
			inputs[1].style.borderBottom = ".2rem solid #E87C03";
			inputs[1].style.marginBottom = ".3rem";
		}
		else{
			inputs[0].style.borderBottom = ".2rem solid #E87C03";
			inputs[0].style.marginBottom = ".3rem";
		}
		campos[campo] = false;
	}
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}
for(const input of inputs){
    input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
}
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.correo && campos.password){
        if(inputs[0].value == correo && inputs[1].value == password){
            window.location.href = "/account.html";
        }
    }
    document.getElementById("alerta-incompatible").style.display = "block";
});