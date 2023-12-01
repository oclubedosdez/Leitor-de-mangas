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
for (let i = 1; i <= 78; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'It’s Time to Change the Genre'; //nome do manga/manhaw
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>It’s Time to Change the Genre</span>
<span class='nome_alt'> I Will Make an Attempt to Change the Genre</span>
<span class='nome_alt'> I Will Make an Effort to Change the Genre</span>
<span class='nome_alt'> 장르를 바꿔보도록 하겠습니다</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = "../../../imgs/Jangleuleul Bakkwobodolog Hagessseubnida - It's Time to Change the Genre.jpg"; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Garin</p>';
var artista_da_obra = '<span>Artista: </span> <p>Ken</p>';
var estatus_obra = '<span>Status: </span> <p>ativo</p>';

var sinopese_da_obra = `<strong>Sinopse:</strong>Entrei no mundo do meu romance e gênero favorito através do corpo de outra pessoa.
Claro, de todos os personagens, eu só tinha que entrar no corpo da tia do protagonista, a mulher que abusou do sobrinho, a vilã egoísta.

De acordo com a história original, em qualquer caso, esperava-se que meu sobrinho deixasse meu lado em breve.
A compaixão por ele cresceu, então coloquei meu esforço mais sincero em cuidar dele até o dia em que nos separamos-

“Sei que é rude perguntar, já que você tem cuidado de Luca até agora, mas posso levar Luca para Winterwald comigo?”

Não tem como isso não acontecer! Quer dizer, acho que poderia ter corrido para mandá-lo embora e viver confortavelmente, mas, inesperadamente, meu sobrinho passou os braços em volta da minha cintura e gritou.

“M-mãe!”

Como me tornei sua mãe de repente?`;

let generos_link = `
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Isekai</a>
<a class="genero" href="http://">Reencarnação</a>
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




