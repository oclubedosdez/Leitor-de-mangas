
let select_element = [
    
];

for(let i = 1; i <= 6; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)
}

select_element.push(`'<option value="./06.5.html">capitulo 06.5</option>'`)

for(let i = 7; i <= 16; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)
}

select_element.push(`'<option value="./16.5.html">capitulo 16.5</option>'`)


for(let i = 17; i <= 46; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)
}

select_element.push(`'<option value="./46.5.html">capitulo 46.5</option>'`)
select_element.push(`'<option value="./47.html">capitulo 47</option>'`)
select_element.push(`'<option value="./47.1.html">capitulo 47.1</option>'`)
select_element.push(`'<option value="./47.2.html">capitulo 47.2</option>'`)
select_element.push(`'<option value="./48.html">capitulo 48</option>'`)
select_element.push(`'<option value="./49.html">capitulo 49</option>'`)
select_element.push(`'<option value="./49.1.html">capitulo 49.1</option>'`)
select_element.push(`'<option value="./49.2.html">capitulo 49.2</option>'`)
select_element.push(`'<option value="./49.3.html">capitulo 49.3</option>'`)
select_element.push(`'<option value="./50.html">capitulo 50</option>'`)
select_element.push(`'<option value="./50.1.html">capitulo 50.1</option>'`)
select_element.push(`'<option value="./50.2.html">capitulo 50.2</option>'`)
select_element.push(`'<option value="./51.5.html">capitulo 51.5</option>'`)
select_element.push(`'<option value="./52.html">capitulo 52</option>'`)
select_element.push(`'<option value="./53.html">capitulo 53</option>'`)
select_element.push(`'<option value="./53.5.html">capitulo 53.5</option>'`)

for(let i = 54; i <= 61; i++) {
    select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)
}

select_element.push(`'<option value="./61.5.html">capitulo 61.5</option>'`)
select_element.push(`'<option value="./62.html">capitulo 62</option>'`)











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


var nome_manga = 'Kekkon Yubiwa Monogatari'
var caminho  = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/Kekkon%20Yubiwa%20Monogatari/capitulo-'


var num_imgs = 80;
