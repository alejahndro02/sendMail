//variables
const email=document.getElementById('email');
const issue =document.getElementById('asunto');
const message = document.getElementById('mensaje');
const btnSend =document.getElementById('enviar');

//Listeners
loadEventListeners();
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', initApp);
    email.addEventListener('blur', validate)
    issue.addEventListener('blur', validate)
    message.addEventListener('blur', validate)
}

//Funciones
function initApp (){
    btnSend.disabled=true;
}
function validate(){
    validateLength(this);
    let errors =document.getElementsByClassName('error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value!==''){
        if (errors.length === 0 ){
            btnSend.disabled=false;
        }
    }else{
        btnSend.disabled=true;
    }
}
function validateLength(campo){
    console.log(campo.value.length);
    
    if (campo.value.length > 0){
        campo.style.borderBottomColor="green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add('error');
    }
}