//variables
const email=document.getElementById('email');
const issue =document.getElementById('asunto');
const message = document.getElementById('mensaje');
const btnSend =document.getElementById('enviar');

//Listeners
loadEventListeners();
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', initApp);

}

//Funciones

function initApp (){
btnSend.disabled=true;
}