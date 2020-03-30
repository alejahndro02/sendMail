//variables
const email=document.getElementById('email');
const issue =document.getElementById('asunto');
const message = document.getElementById('mensaje');
const btnSend =document.getElementById('enviar');
const formSend = document.getElementById('enviar-mail');

//Listeners
loadEventListeners();
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', initApp);
    email.addEventListener('blur', validate);
    issue.addEventListener('blur', validate);
    message.addEventListener('blur', validate);
    formSend.addEventListener('submit',sendMail);
}

//Funciones
function initApp (){
    btnSend.disabled=true;
}
function validate(){
    validateLength(this);
    let errors = document.getElementsByClassName('error');
    if (this.type ==='email'){
        validateEmail(this);
    }
    if(email.value !== '' && asunto.value !== '' && mensaje.value!==''){
        if (errors.length === 0 ){
            btnSend.disabled=false;
        }
    }else{
        btnSend.disabled=true;
    }
}
function sendMail(e){
    e.preventDefault()
    const loadGif = document.getElementById('spinner');
    const sendGif = document.createElement('img');
    sendGif.src ='img/mail.gif';
    sendGif.style.display ='block';
    loadGif.style.display ='block';
    setTimeout(()=>{
        loadGif.style.display ='none';
        document.getElementById('loaders').appendChild(sendGif);
        setTimeout(()=>{
            sendGif.remove();
            formSend.reset();
        },5000)
    }, 3000)
}
function validateLength(campo){
    if (campo.value.length > 0){
        campo.style.borderBottomColor="green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add('error');
    }
}
function validateEmail(campo){
    const msj = campo.value;
    if (msj.indexOf('@') !== -1 ){
        campo.style.borderBottomColor="green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add('error');
    }
}