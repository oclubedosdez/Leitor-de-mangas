var box3 = document.querySelector(".box3");



let capitulos = [];

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = 'Pretendente Surpresa';

const mangaEncontrado = manga_info.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());

if (mangaEncontrado) {
    const numCapitulos = mangaEncontrado.num_capitulo;
    const textoCap = mangaEncontrado.text_cap;
    console.log(`${numCapitulos}`);


    // Obter a data atual
    const dataAtual = new Date();

    // Função para formatar a data no formato desejado
    function formatData(data) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return data.toLocaleDateString("pt-BR", options);
    }



    // Adicionar capítulos com base na data atual
    for (let i = 1; i <= numCapitulos; i++) { // Adicionando 5 capítulos com base na data atual
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


} else {
    console.log(`Manga não encontrado.`);
}







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


var nome = 'Pretendente Surpresa'; //nome do manga/manhaw
var rating = 5.2;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>A Business Proposal</span>
<span class='nome_alt'>The Office Blind Date</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Pretendente Surpresa.jpg';
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
    caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor(es): </span> <p>Guava Farm / Perilla</p>';
var artista_da_obra = '<span>Artista: </span> <p>NARAK</p>';
var estatus_obra = '<span>Status: </span> <p>Iato</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Ha-ri fez um acordo - sair em um encontro às cegas para sua melhor amiga e fingir ser uma super sedutora para acabar com todos os casamentos indesejados que lhe arranjavam! Infelizmente, em vez de dinheiro fácil, Ha-ri arrumou uma dor de cabeça. Seu encontro é com Taemu, o novo e charmoso CEO da empresa em que trabalha, e ele tem seus próprios planos para fazer sua família recuar, casando-se com quem quer que apareça no encontro. Deveria Ha-ri aceitar a proposta dele de continuar fingindo? Nada poderia dar errado ao mentir sobre sua verdadeira identidade enquanto namora o chefe... certo??";

let generos_link = `
<a class="genero" href="http://">Comédia</a>
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Josei</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Slice of Life</a>
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







