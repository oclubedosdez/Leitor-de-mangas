var box3 = document.querySelector(".box3");

var nome = 'A 99° Noiva do Duque'; // nome do manga/manhwa
let capitulos = [];

// Substitua esta linha pelo valor da data desejada (ano, mês, dia)
const dataInicial = new Date('2023-03-26'); // Por exemplo, 30 de outubro de 2024

// Função para formatar a data no formato desejado
function formatData(data) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return data.toLocaleDateString("pt-BR", options);
}

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = nome;

const mangaEncontrado = mangas_e_manhwas.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());

if (mangaEncontrado) {
    const numCapitulos = mangaEncontrado.num_capitulos;
    const textoCap = mangaEncontrado.text_cap;
    
    const semanasPorCapitulo = 1; // Ajuste o valor conforme necessário

    for (let i = 1; i <= numCapitulos; i++) {
        const intervaloEmSemanas = i * semanasPorCapitulo;
        const dataAtual = new Date(dataInicial);
        dataAtual.setDate(dataInicial.getDate() + 1); // Ajuste do dia para corrigir o problema de começar em 24 de fevereiro
        dataAtual.setDate(dataAtual.getDate() + intervaloEmSemanas * 5 + i); // Multiplicamos por 2 para converter semanas em dias

        capitulos.push({
            "id": `${i < 10 ? `0${i}` : i}`,
            "data": formatData(dataAtual),
            "valor": `${i}`,
        });
    }

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


var nome = 'A 99° Noiva do Duque'; //nome do manga/manhwa
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>The Duke’s 99th Bride</span>
<span class='nome_alt'>The 99th Bride of the Duke</span>
<span class='nome_alt'>공작가의 99번째 신부</span>
`

var tipo = 'manhwa' // é manga ou manhwa

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/A 99° Noiva do Duque.jpg';







var autor_da_obra = '<span>Autor(es): </span> <p>Lisabel</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>ALLYN</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<strong>Sinopse:</strong>Grace, que perdeu a mãe e ficou órfã, vivia na rua esperando sua morte, foi salva por Penelope Erdona e se tornou Grace Erdona. Um dia, enquanto ela e Penelope estavam juntas, Penelope falou sobre se casar. A pessoa com quem ela deve se casar não é outro senão o duque de Felton, a família mais poderosa do mundo. Corria o boato de que todas as mulheres que ali se casavam haviam desaparecido ou voltado com um estado mental muito estranho. Para proteger Penelope, Grace pretende se casar com o duque em seu lugar. ‘Ouvi dizer que esta não é a primeira vez que você se casa, posso saber quantas vezes é?’ – Deixe-me ver … você é a 99º. Grace Erdona, acorde!';

let generos_link = `
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Histórico</a>
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
    let mangaInfo = mangas_e_manhwas.find(info => info.nome === item.nome);

    // Se encontrar, adiciona a informação de número de capítulos
    if (mangaInfo) {
        item.capitulos = mangaInfo.num_capitulos;
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







