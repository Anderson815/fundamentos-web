let nome = window.document.querySelector('#nome');
let email = document.getElementById('email');
let assunto = document.querySelector('#assunto');
let mapa = document.querySelector('#mapa');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido';
        txtNome.style.color = 'red';
    }else{
        txtNome.innerHTML = 'Nome Válido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-Mail Inválido';
        txtEmail.style.color = 'red';
    }else{
        txtEmail.innerHTML = 'E-Mail Válido';
        txtEmail.style.color = 'green';   
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto');

    if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'Texto é muito grande, o limite é até 100 caracteres';
        txtAssunto.style.color = 'red';
    }else{
        txtAssunto.innerHTML = '';
        assuntoOk = true;
    }
}

function enviar(){
    if(nomeOk && emailOk && assuntoOk){
        alert('Formulário enviado com sucesso!');
    }else{
        alert('Erro: Algum campo está inválido');  
    }
}

function mapaZoom(){
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal(){
    mapa.style.width = '400px';
    mapa.style.height = '250px';
}