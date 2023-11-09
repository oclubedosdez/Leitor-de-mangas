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
for (let i = 1; i <= 59; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'Bon Appétit!'; //nome do manga/manhaw
var rating = 5.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>맛본김에</span>
<span class='nome_alt'>Depois de Provar</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Bon Appétit!.jpeg'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Miso</p>';
var artista_da_obra = '<span>Artista: </span> <p>Kyun</p>';
var estatus_obra = '<span>Status: </span> <p>Iato</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>“Você está comendo numa situação dessas?” “É claro! Eu tenho que saborear até morrer. Você quer um?” Ela foi reincarnada em uma novel como Ruana, a princesa abandonada. E sua morte já estava decidida. Ela só queria deixar as pessoas saberem de seus dons culinários, mas ela foi confundida com uma bruxa por causa do seu bife jerky com queijo! O general do exército conquistador, Duque Legion, que perdeu seu paladar, a levou para o império por conta dos seus bife jerkies deliciosos e para quebrar a maldição que era passada de geração em geração. ";

let generos_link = `
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Shoujo</a>
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




