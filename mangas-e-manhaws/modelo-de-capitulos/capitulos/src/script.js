
let select_element = [];

// for (let i = 1; i < 71; i++) {
//     select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>' `)
// }

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = 'A protagonista feminina está tentando me tornar sua madrasta';

const mangaEncontrado = manga_info.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());

if (mangaEncontrado) {
    const numCapitulos = mangaEncontrado.num_capitulo;
    const textoCap = mangaEncontrado.text_cap;

    for (let i = 1; i <= numCapitulos; i++) {
        select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)


    }

} else {
    console.log(`Manga não encontrado.`);
}



var modo_escuro = document.querySelector('.modo-claro');
var botao = document.querySelector('.modo-claro')
var cabecalho = document.querySelector('.titulo2')
var navbar = document.querySelector('.navbar')

modo_escuro.addEventListener('click', function () {
    document.body.classList.toggle('modo_black')
    // navbar.classList.toggle('modo_escuro')

    document.querySelector(".nav-items").classList.remove('nav-item')
    document.querySelector(".nav-items-hover")

    if (document.body.classList.contains('modo_black')) {
        botao.innerHTML = 'Modo claro'
        
    } else {
        botao.innerHTML = 'Modo escuro'
        cabecalho.classList.remove('modo_escuro')
        botao.classList.remove('botao_escuro')
        document.getElementById('logo').style.border = '2px solid white'
    }
})


var titulo1 = document.querySelector('.titulo1');
var titulo2 = document.querySelector('.titulo2');
var nome = document.getElementById('nome_manga');


var nome_manga = 'A protagonista quer que eu seja sua madrasta'
var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/manhaws/A%20protagonista%20feminina%20est%C3%A1%20tentando%20me%20tornar%20sua%20madrasta/capitulo-'

var num_imgs = 90;







if ('scrollBehavior' in document.documentElement.style === false) {
    import('smoothscroll-polyfill').then(module => {
        module.polyfill();
    });
}


const slider_mangas = document.getElementById("carrocel")



let carousel_mangas_items = [
    {
        "tipo" : "manhwa",
        "nome": "A 99° Noiva do Duque",
        "img": "A 99° Noiva do Duque",
        "pasta" : "A 99° Noiva do Duque", 
    },
    {
        "tipo" : "manhwa",
        "nome": "Adelaide",
        "img": "Adelaide",
        "pasta" : "Adelaide", 
    },
    {
        "tipo" : "manhwa",
        "nome": "Circunstâncias da Irene",
        "img": "Circunstâncias da Irene",
        "pasta" : "Circunstâncias da Irene", 
    },
    {
        "tipo" : "manhwa",
        "nome": "Beware of the Brothers!",
        "img": "Beware of the Brothers!",
        "pasta" : "Beware of the Brothers!", 
    },
    {
        "tipo" : "manga",
        "nome": "Tensei Shitara Ore ga Heroine de Aitsu ga Yuusha Datta",
        "img": "Tensei Shitara Ore ga Heroine de Aitsu ga Yuusha Datta",
        "pasta" : "Tensei Shitara Ore ga Heroine de Aitsu ga Yuusha Datta", 
    },
];


carousel_mangas_items.forEach((mangas) => {
    let manga_item = `
    <a class="box" href="../../pages/${mangas.tipo}s/${mangas.pasta}/index.html">
    <span class="${mangas.tipo}"></span>
    <div class="img_manga">
      <img src="../../imgs/${mangas.nome}.jpg" alt="">
    </div>
    <div class="nome">
      <h1 title="${mangas.nome}">${mangas.nome}</h1>
    </div>

  </a>
    `
    slider_mangas.innerHTML += manga_item;
});

carousel_mangas_items.forEach((item) => {
    // Procura o manga correspondente no array manga_info
    let mangaInfo = manga_info.find(info => info.nome === item.nome);

    // Se encontrar, adiciona a informação de número de capítulos
    if (mangaInfo) {
        item.capitulos = mangaInfo.num_capitulo;
        item.text_cap = mangaInfo.text_cap;
        item.estado = mangaInfo.estado;
        item.lancamento = mangaInfo.lancamento;
    }
});