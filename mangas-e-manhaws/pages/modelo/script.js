var box3 = document.querySelector(".box3");

let capitulos = [];


// Obter a data atual
const dataAtual = new Date();

// Função para formatar a data no formato desejado
function formatData(data) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return data.toLocaleDateString("pt-BR", options);
}

// Adicionar capítulos com base na data atual
for (let i = 1; i <= 20; i++) { // Adicionando 5 capítulos com base na data atual
    dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona 1 dia à data atual
    capitulos.push({
        "id": `${i < 10 ? `0${i}` : i}`,
        "data": formatData(dataAtual)
    });
}


// Criar elementos HTML e atualizar a caixa box3
const bannerElements = capitulos.map((banner) => `
    <a class="capitulo" href="./capitulos/${banner.id}.html">
        <img class="img-fluid w-25" src="https://github.com/oclubedosdez.png" alt="">
        <div class="titulo_data">
            <h1>Capitulo ${banner.id}</h1>
            <h3>${banner.data}</h3> 
        </div>
    </a>
`);



box3.innerHTML = bannerElements.join('');



const titulo1 = document.querySelector('.titulo1')
const titulo2 = document.querySelector('.titulo2')
const tipo_de_quadrinho = document.getElementById('tipo_de_quadrinho')
const img_fluid = document.getElementById('imagen_principal')
const banner = document.getElementById('imagen_banner')
const generos = document.querySelector('.generos')
const autor = document.getElementById('autor')
const artista = document.getElementById('artista')
const estatus = document.getElementById('estatus')
const sinopse = document.getElementById('sinopse')


var nome = 'I Am Trying to Divorce My Villain Husband, but We Have a Child'; //nome do manga/manhaw
var tipo = 'manhaw' // é manga ou manhaw
var caminho = '../../imgs/I Am Trying to Divorce My Villain Husband, but We Have a Child.jpg'; //caminho da imagem
var autor_da_obra = 'Baek Dan';
var artista_da_obra = 'Baek Dan';
var estatus_obra = 'Ativo';

var sinopese_da_obra = 'Ela possuiu a mulher que era casada com o diabo. Você desempenha o papel de alguém obcecada por um marido vilão. “Eu estarei ao seu lado!” Ela decidiu ser gentil com o marido, que mora na mesma casa que ela há muito tempo. Mas um dia, quando me tornei adulta e estava prestes a me divorciar… Uma má noite me deixou com uma criança inesperada. Então eu tentei sair antes que eles me pegassem. “Aquele Richard? Algo está errado com-” “Eu não quero deixar você ir, então morra em meus braços, Elisha.” Ela não conseguia se livrar disso enquanto tentava chorar e implorar com seu lindo rosto. “Para onde você vai fugir com meu filho?” Você me perseguiu com olhos tão frios? Acho que não posso escapar. O que eu faço agora?.';

let generos_link = `
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Josei</a>
<a class="genero" href="http://">Romance</a>
`

titulo1.innerHTML = nome;
titulo2.innerHTML = nome;
tipo_de_quadrinho.classList.add(tipo)
img_fluid.src = caminho;
banner.src = caminho;
generos.innerHTML += generos_link;
autor.innerHTML = autor_da_obra;
artista.innerHTML = artista_da_obra;
estatus.innerHTML = estatus_obra;
sinopse.innerHTML = sinopese_da_obra;

