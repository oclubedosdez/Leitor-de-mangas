var selecionar = document.getElementsByClassName('select')[0];
var preto = document.getElementById("preto")
var claro_e_escuro = document.getElementById('ler-no-claro')
var fecharpaginas = document.getElementsByClassName('fechar-pagina')[0];
var titulo2 = document.getElementById("titulo2")
var titulo1 = document.querySelector('.titulo1')
var logo = document.getElementById('logo')


selecionar.onclick = function() {
    selecionar.classList.toggle('alterna-selecao')
}

claro_e_escuro.onclick = function() {
    titulo1.classList.toggle('cor-de-fundo-preto')
    document.body.classList.toggle('cor-do-corpo')
    selecionar.classList.toggle('bordar-escura')
    logo.classList.toggle('logo-escuro')
    document.getElementById('titulo').classList.toggle('cor-de-fundo-preto')
}

fecharpaginas.onclick = function() {
    document.getElementsByClassName('paginas-abertas')[0].classList.toggle('alterna-modo-leitura')
    document.getElementsByClassName('botoes')[0].classList.toggle('alterna-modo-leitura')
}



function selecao() {
    if (preto==onclick) {
        window.alert()
    }
}


// Variável para controlar o modo de leitura
let modoLeitura = 'passarPaginas';

// Função para alternar o modo de leitura
function alternarModoLeitura() {
  const paginas = document.getElementsByClassName('pagina');
  
  if (modoLeitura === 'passarPaginas') {
    modoLeitura = 'paginasAbertas';
    console.log('Modo de leitura alterado para "Páginas Abertas"');
    for (let i = 0; i < paginas.length; i++) {
      paginas[i].classList.add('aberta');
    }
  } else {
    modoLeitura = 'passarPaginas';
    console.log('Modo de leitura alterado para "Passar Páginas"');
    for (let i = 0; i < paginas.length; i++) {
      paginas[i].classList.remove('aberta');
    }
  }
}


