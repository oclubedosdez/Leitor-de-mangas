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


var nome = 'A 99° Noiva do Duque'; //nome do manga/manhaw
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>The 99th Bride of the Duke</span>
<span class='nome_alt'>The Duke's 99th Bride</span>
<span class='nome_alt'>공작가의 99번째 신부</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = 'https://flowermanga.com/wp-content/uploads/2023/05/a-99-noiva-do-duque-392-350x504.jpg'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Choi nokki</p>';
var artista_da_obra = '<span>Artista: </span> <p>Geumbi</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Grace, que perdeu a mãe e ficou órfã, vivia na rua esperando sua morte, foi salva por Penelope Erdona e se tornou Grace Erdona.Um dia, enquanto ela e Penelope estavam juntas, Penelope falou sobre se casar.A pessoa com quem ela deve se casar não é outro senão o duque de Felton, a família mais poderosa do mundo.Corria o boato de que todas as mulheres que ali se casavam haviam desaparecido ou voltado com um estado mental muito estranho.Para proteger Penelope, Grace pretende se casar com o duque em seu lugar.'Ouvi dizer que esta não é a primeira vez que você se casa, posso saber quantas vezes é?'- Deixe-me ver ... você é o 99º.Grace Erdona, acorde!'";

let generos_link = `
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Fantasia</a>
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




