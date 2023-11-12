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
for (let i = 1; i <= 22; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'Isekai de Tochi wo Katte Noujou wo Tsukurou'; //nome do manga/manhaw
var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>Isekai de Tochi o Katte Noujou o Tsukurou</span>
<span class='nome_alt'> Let's Buy the Land and Cultivate in Different World</span>
<span class='nome_alt'>在异世界购买土地建造农场, 異世界で土地を買って農場を作ろう</span>
`

var tipo = 'manga' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Isekai De Tochi O Katte Noujou O Tsukurou.jpg'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>OKAZAWA Rokujuuyon</p>';
var artista_da_obra = '<span>Artista: </span> <p>SASAMEYUKI Jun</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Como nosso humilde corporativista Itonami Norio é repentinamente convocado para outro mundo, pareceria que ele seria enviado para um campo de batalha – ele, entretanto, não possui nenhuma habilidade para falar, e como ele é considerado inútil. Ele negocia com o rei e recebe um terreno – um terreno vazio e deserto, sem nenhum habitante à vista. Norio segura algo que ele não poderia contar a ninguém: O Mestre da Supremacia, um presente que lhe dará a mais confortável das vidas neste mundo. Aqui começa a colorida história de Norio – tendo uma sereia que ele pesca se declara sua esposa, tornando-se vizinha do Rei Morto-vivo, esta é sua vida ocupada, mas divertida – e agora um dragão aparece?!";

let generos_link = `
<a class="genero" href="http://">Ação</a>
<a class="genero" href="http://">Aventura</a>
<a class="genero" href="http://">Comédia</a>
<a class="genero" href="http://">Ecchi</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Harem</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Shounen</a>
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




