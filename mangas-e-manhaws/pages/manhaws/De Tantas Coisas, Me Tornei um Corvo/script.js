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
for (let i = 1; i <= 80; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'De Tantas Coisas, Me Tornei um Corvo'; //nome do manga/manhaw
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>하필이면 까마귀가 되어버렸다</span>
<span class='nome_alt'>Off All Things, I Became a Crow</span>
`

var tipo = 'manhaw' // é manga ou manhaw
var caminho = '../../../imgs/De Tantas Coisas, Me Tornei um Corvo.jpeg'; //caminho da imagem
var autor_da_obra = '<span>Autor: </span> <p>Sylvester</p>';
var artista_da_obra = '<span>Artista: </span> <p>Glee</p>';
var estatus_obra = '<span>Status: </span> <p>Iato</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Depois de morrer em um acidente, ela reencarnou em um jogo do gênero otome… Como um corvo! Não acredito que sou um corvo! Nem pra eu ser uma figurante! Quando eu estava observando a primeira pessoa que apareceu para mim… Era o príncipe herdeiro. “Como você pode ser tão amável, Reinelle?” Cawk, cawk caek (Me leve contigo e me crie!)” O príncipe herdeiro, Kameut, me deu um nome e me tratou com carinho. Eu sou um corvo, afinal. Não vai ter problema se eu tratá-lo com amor ou se meu coração se revira por ele. Não tinha problema até… “Olá, Reinelle?” “O que aconteceu de repente comigo?” ";

let generos_link = `
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Shoujo</a>
<a class="genero" href="http://">Sobrenatural</a>
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




