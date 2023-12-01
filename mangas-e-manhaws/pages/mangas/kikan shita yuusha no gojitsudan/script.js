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
for (let i = 1; i <= 14; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'kikan shita yuusha no gojitsudan'; //nome do manga/manhaw
var rating = 4.8;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>The Fate of the Returned Hero</span>
<span class='nome_alt'>帰還した勇者の後日譚</span>
<span class='nome_alt'>The Days After the Hero’s Return</span>
`

var tipo = 'manga' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/kikan shita yuusha no gojitsudan.jpg';
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
    caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Tsukiyono, Furudanuki</p>';
var artista_da_obra = '<span>Artista: </span> <p>Otono, Kurumi</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Um dia, um universitário qualquer — Kashiwagi Yuuya — foi invocado em um outro mundo por uma deusa idiota. Sua missão era fazer o que qualquer protagonista de isekai genérico faz: se tornar um herói, conseguir um harém, derrotar os reis demônios, salvar o reino/outro mundo e voltar para a Terra. Depois de fazer toda essa besteira, ele pôde voltar para seu mundo original tendo se passado apenas um segundo; apesar de ter desperdiçado 3 anos de sua vida trabalhando como “herói”. Esperando voltar a ser alguém comum, se surpreendeu quando viu que ainda tinha seus poderes de herói. Parece que sua missão ainda não havia acabado.";

let generos_link = `
<a class="genero" href="http://">Comédia</a>
<a class="genero" href="http://">Ecchi</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Harem</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Shounen</a>
<a class="genero" href="http://">Isekai</a>
<a class="genero" href="http://">Magia</a>
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




