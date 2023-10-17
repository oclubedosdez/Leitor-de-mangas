var selecionar = document.getElementsByClassName('select')[0];
var preto = document.getElementById("preto")
var claro_e_escuro = document.getElementById('claro/escuro')
var fecharpaginas = document.getElementsByClassName('fechar-pagina')[0];



// selecionar.onclick = function () {
//     selecionar.classList.toggle('alterna-selecao')
// }

claro_e_escuro.onclick = function () {
    document.getElementById('cabecalho').classList.toggle('cor-de-fundo-preto')
    document.body.classList.toggle('cor-do-corpo')
    selecionar.classList.toggle('bordar-escura')
}

// fecharpaginas.onclick = function () {
//     document.getElementsByClassName('paginas-abertas')[0].classList.toggle('alterna-modo-leitura')
//     document.getElementsByClassName('botoes')[0].classList.toggle('alterna-modo-leitura')
// }


// document.getElementById('cabecalho').classList.toggle('cor-de-fundo-preto')









