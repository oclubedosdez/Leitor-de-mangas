
let select_element = [];

for(let i = 1; i <= 65; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)

    if(i == 9) {
        select_element.push(`'<option value="./09.5.html">capitulo 09.5</option>'`)
    }
    if(i == 42) {
        select_element.push(`'<option value="./09.5.html">capitulo 42.5</option>'`)
    }
    if(i == 54) {
        select_element.push(`'<option value="./09.5.html">capitulo 54.5</option>'`)
    }
}





var modo_escuro = document.querySelector('.modo-claro');
var botao = document.querySelector('.modo-claro')
var cabecalho = document.querySelector('.titulo2')

modo_escuro.addEventListener('click', function () {
    document.body.classList.toggle('modo_black')

    if (document.body.classList.contains('modo_black')) {
        botao.innerHTML = 'Modo claro'
        botao.classList.add('botao_escuro')
        cabecalho.classList.add('modo_escuro')
        document.getElementById('logo').style.border = '4px solid black'
    } else {
        botao.innerHTML = 'Modo escuro'
        cabecalho.classList.remove('modo_escuro')
        botao.classList.remove('botao_escuro')
        document.getElementById('logo').style.border = '2px solid white'
    }
})


var titulo1 = document.querySelector('.titulo1');
var titulo2 = document.querySelector('.titulo2');
var nome = document.getElementById('nome_manga');


var nome_manga = 'Fuufu Ijou, Koibito Miman'
var caminho  = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/Fuufu%20Ijou%2C%20Koibito%20Miman/capitulo-'


var num_imgs = 80;
