
let select_element = [];

for(let i = 1; i <= 31; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)

    if(i == 6) {
        select_element.push(`'<option value="./06.5.html">capitulo 06.5</option>'`)
    }
    if(i == 12) {
        select_element.push(`'<option value="./12.5.html">capitulo 12.5</option>'`)
    }
    if(i == 15) {
        select_element.push(`'<option value="./15.5.html">capitulo 15.5</option>'`)
    }
    if(i == 18) {
        select_element.push(`'<option value="./18.5.html">capitulo 18.5</option>'`)
    }
    if(i == 24) {
        select_element.push(`'<option value="./24.5.html">capitulo 24.5</option>'`)
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


var nome_manga = 'Isekai de Tochi wo Katte Noujou wo Tsukurou'
var caminho  = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/Isekai%20de%20Tochi%20wo%20Katte%20Noujou%20wo%20Tsukurou/capitulo-'


var num_imgs = 80;
