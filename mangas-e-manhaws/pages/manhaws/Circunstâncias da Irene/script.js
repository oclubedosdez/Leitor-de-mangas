var box3 = document.querySelector(".box3");

let capitulos = [];


// Obter a data atual

const dataAtual = new Date();




// Função para formatar a data no formato desejado
function formatData(data) {
    const options = { 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
    };
    return data.toLocaleDateString("pt-BR", options);
}

// Adicionar capítulos com base na data atual
for (let i = 1; i <= 58; i++) { // Adicionando 58 capítulos com base na data atual
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


var nome = 'Circunstâncias da Irene'; //nome do manga/manhaw
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>iraine’s circumstances</span>
<span class='nome_alt'>아이린의 상황</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Circunstâncias da Irene.jpg';
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
    caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Bok Sung Ah, Mongsu</p>';
var artista_da_obra = '<span>Artista: </span> <p>MStoryHub</p>';
var estatus_obra = '<span>Status: </span> <p>ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Irene, que passou sua vida de forma humilde, pensou que sua vida estava mudando depois da princesa reconhecer suas habilidades. No entanto, ela se apaixonou por alguém que não deveria. Até tentou fechar os seus olhos de forma silenciosa, mas… “Não tire os olhos de mim.” “Por que está interessado em mim?” Diferente das duras palavras, preciso suportar a vida de uma empregada no palácio imperial e também a tentação de um lindo homem que emana um doce e nobre odor que não consigo me esquecer. “Irei ficar bem?”";

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
alternativo.innerHTML += nome_alternativo;




