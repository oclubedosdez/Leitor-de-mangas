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
for (let i = 1; i <= 105; i++) { // Adicionando 5 capítulos com base na data atual
    dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona 1 dia à data atual
    capitulos.push({
        "id": `${i < 10 ? `0${i}` : i}`,
        "data": formatData(dataAtual)
    });
}


// Criar elementos HTML e atualizar a caixa box3
const bannerElements = capitulos.map((banner) => `
    <a class="capitulo" href="./capitulos/${banner.id}.html">
        <div class="titulo_data">
            <h1>Capitulo ${banner.id}</h1> -
            <h3>${banner.data}</h3> 
        </div>
        <img class="capitulo-img" src="./imgs/book.png" alt="">
    </a>
`);



box3.innerHTML = bannerElements.join('');



const titulo1 = document.querySelector('.titulo1')
const titulo2 = document.querySelector('.titulo2')
const tipo_de_quadrinho = document.getElementById('tipo_de_quadrinho')
const img_fluid = document.getElementById('imagen_principal')
const banner = document.getElementById('imagen_banner')
//////////////////////////////////////////////////////////////
const generos = document.querySelector('.generos')
const autor = document.getElementById('autor')
const artista = document.getElementById('artista')
const estatus = document.getElementById('estatus')
const sinopse = document.getElementById('sinopse')
const alternativo = document.getElementById('Alternativa')


var nome = 'Eu tive um filho do tirano'; //nome do manga/manhaw
var rating = 4.6;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>폭군의 아이를 가졌습니다,</span>
<span class='nome_alt'>I Got Pregnant to the Tyrant’s Child</span>
`

var tipo = 'manhaw' // é manga ou manhaw
var caminho = '../../../imgs/Eu tive um filho do tirano.jpg'; //caminho da imagem
var autor_da_obra = '<span>Autor: </span> <p>Ryuran,SF_JD</p>';
var artista_da_obra = '<span>Artista: </span> <p>SF_JD</p>';
var estatus_obra = '<span>Status: </span> <p>Completo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Para Elan, o cavaleiro real, o festival de máscaras é uma rara chance de se soltar e relaxar. Mas sua noite de diversão rapidamente se transforma em uma manhã de horror quando ela acorda ao lado do implacável imperador Kylart. Sabendo o quão cruel ele pode ser com mulheres pegajosas, Elan foge, esperando que ele não tenha visto além de seu disfarce. Mas enquanto ela continua seus deveres estressantes de guardar o imperador, ela começa a sentir sintomas preocupantes de saúde. Uma ida ao médico revela que ela está grávida! Para piorar as coisas, há rumores de que Kylart está procurando a misteriosa mulher que conheceu na noite do festival. Elan pode manter seu segredo a salvo de todo o palácio, quando ela nem consegue controlar seus desejos constantes e enjôos matinais?";

let generos_link = `
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">josei</a>
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
alternativo.innerHTML += nome_alternativo;


//estrelas de avaliação

const estrelas = document.querySelectorAll(".estrela");



console.log(estrelas.length)


estrelas.forEach((estrela) => {
    estrela.onmouseenter = function() {
        estrela.innerHTML = '&#x2606'

    }
    estrela.onmouseout = function() {
        estrela.innerHTML = '&#x2605'
        
    }
})

