var box3 = document.querySelector(".box3");


var nome = 'Eu Domei o Protagonista Masculino Que Tentou me Matar'; //nome do manga/manhwa

let capitulos = [];

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = nome;

const mangaEncontrado = manga_info.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());

if (mangaEncontrado) {
    const numCapitulos = mangaEncontrado.num_capitulo;
    const textoCap = mangaEncontrado.text_cap;


    // Obter a data atual
    const dataAtual = new Date();

    // Função para formatar a data no formato desejado
    function formatData(data) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return data.toLocaleDateString("pt-BR", options);
    }



    // Adicionar capítulos com base na data atual
    for (let i = 0; i <= numCapitulos; i++) { // Adicionando 5 capítulos com base na data atual
        dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona 1 dia à data atual
        capitulos.push({
            "id": `${i < 10 ? `0${i}` : i}`,
            "data": formatData(dataAtual),
            "valor": `${i}`,
        });
        
    }


    // Criar elementos HTML e atualizar a caixa box3
    const bannerElements = capitulos.map((banner) => `
    <a class="capitulo" href="./capitulos/index.html" data-valor="${banner.valor}">
        <div class="titulo_data">
            <h1>Capitulo ${banner.id}</h1> -
            <h3>${banner.data}</h3> 
        </div>
        <img class="capitulo-img" src="../src/imgs/book.png" alt="">
    </a>
`);



    box3.innerHTML = bannerElements.join('');


} else {
    console.log(`Manga não encontrado.`);
}

console.log(capitulos)





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



var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>I Tamed the Male Lead Who Tried to Kill Me</span>
<span class='nome_alt'>나를 죽일 남주를 길들여버렸다</span>
`

var tipo = 'manhwa' // é manga ou manhwa

//CAMINHO DA IMAGEM
var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/manhaws/imgs/Eu%20Domei%20o%20Protagonista%20Masculino%20Que%20Tentou%20me%20Matar.jpg';







var autor_da_obra = '<span>Autor(es): </span> <p>sugarjamong</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>STUDIO M</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<strong>Sinopse:</strong>A família de Latia acolheu Karshian quando seu pai foi em uma expedição marítima, mas depois de rumores de sua morte, eles passam a tratar Karshian como um parasita. Instigada por seus pais sádicos e desesperada por sua aprovação, Latia intimida Karshian implacavelmente. No entanto, quando o pai de Karshian retorna como um herói nacional e poderoso duque, Karshian se vinga executando toda a família de Latia! E, em seu último suspiro, ela percebe que sua família esteve mentindo o tempo todo. Então, ao reencarnar, ela está determinada a evitar sua morte e tratar Karshian decentemente. Porém, isso não será fácil, já que Karshian desconfia de cada movimento de Latia. Latia será capaz de conquistar Karshian e virar o jogo contra sua família desta vez, ou ela está fadada a morrer pelas mãos de Karshian mais uma vez?';




let generos_link = `
<a class="genero" href="../../generos/drama.html">Drama</a>
<a class="genero" href="../../generos/fantasia.html">Fantasia</a>
<a class="genero" href="../../generos/romance.html">Romance</a>
<a class="genero" href="../../generos/shoujo.html">Shoujo</a>
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



const slider_mangas = document.querySelector('.owl-carousel');


let carousel_mangas_items = [
    {
        "nome": "Atsumori-kun no Oyome-san",
        "img": "Atsumori-kun no Oyome-san.jpg",
    },

    {
        "tipo": "manhwa",
        "nome": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)",
        "img": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!).jpg",
        "pasta": "Knight of the Frozen Flower",
        "estatus": "Sem capitulos",
        "status": "completo",
        "data": "2021",
        "capitulos": "",
    },
    {
        "tipo": "manhwa",
        "nome": "My Childhood Friend Became an Obsessive Male Lead",
        "img": "My Childhood Friend Became an Obsessive Male Lead.jpg",
        "cor": "colorido",
        "pasta": "My Childhood Friend Became an Obsessive Male Lead",
        "estatus": "Capitulos: 46",
        "status": "ativo",
        "data": "2022"
    },
    {
        "tipo": "manhwa",
        "nome": "A Proprietária Bebê Está se Aposentando",
        "img": "A Proprietária Bebê Está se Aposentando.jpg",
        "pasta": "A Proprietária Bebê Está se Aposentando",
        "estatus": "Sem capitulos",
        "status": "ativo",
        "data": "2022",
    },
    {
        "tipo": "manga",
        "nome": "Isekai De Tochi O Katte Noujou O Tsukurou",
        "img": "Isekai De Tochi O Katte Noujou O Tsukurou.jpg",
        "pasta": "Isekai De Tochi O Katte Noujou O Tsukurou",
        "estatus": "Capitulos: 31",
        "status": "ativo",
        "data": "2019",
    },

    {
        "tipo": "manga",
        "nome": "Kekkon Yubiwa Monogatari",
        "img": "Kekkon Yubiwa Monogatari.jpg",
        "pasta": "Kekkon Yubiwa Monogatari",
        "estatus": "Capitulos: 62",
        "status": "ativo",
        "data": "2016",
    },

    {
        "tipo": "manhwa",
        "nome": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago",
        "img": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago.jpg",
        "pasta": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago",
        "estatus": "Capitulos: 31",
        "status": "ativo",
        "data": "2019",
    },
    {
        "tipo": "manga",
        "nome": "Fuufu Ijou, Koibito Miman",
        "img": "Fuufu Ijou, Koibito Miman.jpg",
        "pasta": "Fuufu Ijou, Koibito Miman",
        "status": "ativo",
    },
    {
        "tipo": "manhwa",
        "nome": "Adelaide",
        "img": "Adelaide.jpg",
        "pasta": "Adelaide",
        "estatus": "Sem capitulos",
        "status": "completo",
        "capitulos": "",
    },
];

carousel_mangas_items.forEach((item) => {
    // Procura o manga correspondente no array manga_info
    let mangaInfo = manga_info.find(info => info.nome === item.nome);

    // Se encontrar, adiciona a informação de número de capítulos
    if (mangaInfo) {
        item.capitulos = mangaInfo.num_capitulo;
        item.text_cap = mangaInfo.text_cap;
        item.estado = mangaInfo.estado;
        item.lancamento = mangaInfo.lancamento;
        item.tipo = mangaInfo.tipo;
    }

    let manga_item = `
        <div class="item_manga">
            <a href="#">
                 <span class="${item.tipo}_carrocel"></span>
                 <div class="manga_image">
                <img src="../../../imgs/${item.img}" alt="">
                </div>
                <h1 title="${item.nome}">${item.nome}</h1>
                <span class="ep">${item.lancamento}</span>
            </a>
                    
         </div>
    
  `;

    slider_mangas.innerHTML += manga_item;
});



var mangas_capitulos = document.querySelectorAll('.capitulo')


mangas_capitulos.forEach((link) => {
    link.onclick = function () {
        const valorDoCapitulo = link.getAttribute('data-valor')

        localStorage.setItem('ValorCapitulo', valorDoCapitulo)

        

       
    }
});




