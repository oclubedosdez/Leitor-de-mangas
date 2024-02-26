var box3 = document.querySelector(".box3");


var nome = 'Isekai Kenkokuki'; //nome do manga/manhwa

let capitulos = [];

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
        dataAtual.setDate(dataAtual.getDate() + intervaloEmSemanas * `${i < 4 ? 0.1 : 0.5}` * i); // Multiplicamos por 2 para converter semanas em dias

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
<span class='nome_alt'>Different World Foundation</span>
<span class='nome_alt'>Otherworld Nation Founding Chronicles</span>
<span class='nome_alt'>Isekai Kenkoku-ki</span>
`

var tipo = 'manga' // é manga ou manhwa

//CAMINHO DA IMAGEM
var caminho = 'https://github.com/oclubedosdez/Imagens/blob/main/mangas/img/Isekai%20Kenkokuki.jpg?raw=true./imgs/Isekai Kenkokuki.jpg';







var autor_da_obra = '<span>Autor(es): </span> <p>Sakuragi, Sakura</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>KOIZUMI</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<strong>Sinopse:</strong>Um protagonista renascido em outro mundo. Aparentemente ele havia reencarnado como um filho abandonado, junto a outros órfãos. Para sobreviver, ele os conduziu à agricultura. Pouco a pouco, os órfãos se reuniram, e ao ouvir rumores de uma aldeia, outros começaram a migrar. O grupo que tinha sido nada além de crianças tornou-se uma aldeia antes que alguém percebesse. E então, vários países nos arredores começaram a observá-lo... Este é o conto épico do homem que mais tarde seria conhecido como o Imperador Divino.';




let generos_link = `
<a class="genero" href="../../generos/acao.html">Ação</a>
<a class="genero" href="../../generos/drama.html">Drama</a>
<a class="genero" href="../../generos/fantasia.html">Fantasia</a>
<a class="genero" href="../../generos/harem.html">Harem</a>
<a class="genero" href="../../generos/isekai.html">Isekai</a>
<a class="genero" href="../../generos/romance.html">Romance</a>
<a class="genero" href="../../generos/slice-of-life.html">Slice-of-Life</a>
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




