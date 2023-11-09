
let select_element = [];

for(let i = 1; i <= 5; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)
}

select_element.push(`'<option value="./05.5.html">capitulo05.5</option>'`)
select_element.push(`'<option value="./05.6.html">capitulo05.6</option>'`)
select_element.push(`'<option value="./05.1.html">capitulo05.1</option>'`)
select_element.push(`'<option value="./05.2.html">capitulo05.2</option>'`)
select_element.push(`'<option value="./05.3.html">capitulo05.3</option>'`)

for(let i = 6; i <= 34; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)
}

select_element.push(`'<option value="./34.5.html">capitulo34.5</option>'`)

for(let i = 35; i <= 39; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)
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


var nome_manga = 'Nihon e Youkoso elf-san'
var caminho  = 'https://oclubedosdez.github.io/Imagens/mangas/Nihon%20e%20Youkoso%20elf-san/capitulo-'


var num_imgs = 80;
