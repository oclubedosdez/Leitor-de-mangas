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
for (let i = 1; i <= 57; i++) { // Adicionando 58 capítulos com base na data atual
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


var nome = 'I Confessed to the Boss'; //nome do manga/manhaw
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>Openly Workplace Romance</span>
<span class='nome_alt'>대놓고 사내 연애; 대놓고 사내연애</span>
`

var tipo = 'manhwa' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/I Confessed to the Boss.jpg';
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
    caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor(es): </span> <p>Eibe,Kangdalkong</p>';
var artista_da_obra = '<span>Artista(s): </span> <p>Mido</p>';
var estatus_obra = '<span>Status: </span> <p>ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Todo mundo ama o Sr. Perfeito, líder da equipe Ji Dohoon – exceto uma pessoa. Nos últimos dois anos, Dajung só teve olhos para seu colega de trabalho Hyunwoo. Na noite do jantar da empresa, Dajung corre atrás dele e pede para que ele seja seu namorado. No entanto, uma vez que a figura alta para quem ela se confessa sai das sombras, Dajung percebe que estava falando com ninguém menos que o próprio Sr. Perfeito! Mas o mais chocante é… ele concorda em sair com ela! O que diabos ele está pensando?!";

let generos_link = `
<a class="genero" href="http://">Comedia</a>
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Josei</a>
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




