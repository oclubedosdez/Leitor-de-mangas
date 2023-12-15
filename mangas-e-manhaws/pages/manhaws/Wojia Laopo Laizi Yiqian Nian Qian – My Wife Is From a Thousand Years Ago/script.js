var box3 = document.querySelector(".box3");



let capitulos = [];

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = 'Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago';

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
        if(i == 6) {
            capitulos.push({"id" : "06.5", "data" : formatData(dataAtual)})
        }
        if(i == 12) {
            capitulos.push({"id" : "12.5", "data" : formatData(dataAtual)})
        }
        if(i == 15) {
            capitulos.push({"id" : "15.5", "data" : formatData(dataAtual)})
        }
        if(i == 18) {
            capitulos.push({"id" : "18.5", "data" : formatData(dataAtual)})
        }
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


var nome = 'My Wife Is From a Thousand Years Ago'; //nome do manga/manhaw
var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>我家老婆来自一千年前</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago.jpg';
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
    caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Reading comics</p>';
var artista_da_obra = '<span>Artista: </span> <p>Reading comics</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Jiang He, uma garota da Dinastia Tang, viajou por mil anos e apareceu na frente de Xu Qing. O destino juntou esse amor que durou mil anos. Tudo o que a garota conhecia se tornou história. Parentes, amigos e inimigos foram deixados para trás 1.200 anos atrás. O menino não tem reservas e leva a menina a começar uma nova vida. Dor, confusão, aplausos e risos permanecerão neste novo mundo.";

let generos_link = `
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Shounen</a>
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







