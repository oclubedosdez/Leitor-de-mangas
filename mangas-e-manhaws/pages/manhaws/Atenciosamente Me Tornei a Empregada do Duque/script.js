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
for (let i = 1; i <= 111; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'Atenciosamente: Me Tornei a Empregada do Duque'; //nome do manga/manhaw
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>Sincerely: I Became a Duke's Maid</span>
<span class='nome_alt'>A Tender Heart: The Story of How I Became a Duke's Maid</span>
<span class='nome_alt'>날것: 공작가의 하녀로 빙의했습니다</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Atenciosamente Me Tornei a Empregada do Duque.jpg'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Jooahri</p>';
var artista_da_obra = '<span>Artista: </span> <p>Aloha</p>';
var estatus_obra = '<span>Status: </span> <p>Completo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Alejandro foi atingido por uma terrível maldição ainda jovem, evitado por sua família e rejeitado por todos. Como personagem coadjuvante de um romance, ele está condenado a um papel de miséria e solidão. Isto é, até que um leitor simpático é repentinamente transportado para este mundo fictício como sua humilde empregada, determinado a mudar seu destino! Evelina pode libertar Alejandro de seu destino miserável e ajudá-lo a encontrar o amor verdadeiro?";

let generos_link = `
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Isekai</a>
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




