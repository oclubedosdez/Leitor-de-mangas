



document.addEventListener("DOMContentLoaded", function () {
  var sinopseElements = document.querySelectorAll('.Sinopse_manga');
  sinopseElements.forEach(function (element) {
    var texto = element.textContent;
    var limite = 200; // Limite de caracteres desejado
    if (texto.length > limite) {
      element.textContent = texto.substr(0, limite) + '...'; // Mostra apenas a quantidade desejada de caracteres
    }
  });
});

const carrocel = document.querySelector('.carousel-inner');

/*INICIAR O ARRAY COM OS NOMES DOS MANGAS RELACIONADOS E ARMAZENAR NO LOCALSTORAGE*/
let carousel_mangas_cabecalho = [];

console.log(carousel_mangas_cabecalho)



var ultimo_manga = mangas_e_manhwas.length; //ultimo manga do array
var oitavo_manga = ultimo_manga - 8;

carousel_mangas_cabecalho.push({"nome" : mangas_e_manhwas[ultimo_manga - 9].nome, "class" : "active"})


for (i = oitavo_manga; i < ultimo_manga; i++) {
  carousel_mangas_cabecalho.push({"nome" : mangas_e_manhwas[i].nome})

}





carousel_mangas_cabecalho.forEach((item) => {
  // Procura o manga correspondente no array manga_info
  let mangaInfo = mangas_e_manhwas.find(info => info.nome === item.nome);

  // Se encontrar, adiciona a informação de número de capítulos
  if (mangaInfo) {
    item.capitulos = mangaInfo.num_capitulos;
    item.text_cap = mangaInfo.text_cap;
    item.estado = mangaInfo.estado;
    item.lancamento = mangaInfo.lancamento;
    item.tipo = mangaInfo.tipo;
    item.pasta = mangaInfo.pasta;
    item.imagem = mangaInfo["caminho-img"];
    item.historia = mangaInfo.historia;
    item.genero = mangaInfo.genero;
  }

  let carrocel_items = `
  <div class="carousel-item ${item.class}">
          <img src="${item.imagem}" class="d-block w-100 img_banner" alt="Slide 1">
          <div class="manga-info">
            <h3 title="${item.nome}">${item.nome}</h3>
            <p class="Sinopse_manga" title="${item.historia}">${item.historia}</p>
            <p>Gêneros: ${item.genero}</p>
            <p class="capitulo_atual">Capítulo: ${item.capitulos}</p>
            <a href="./mangas-e-manhaws/pages/quadrinho/index.html" class="btn btn-go-to-manga">Ir para o Mangá</a>
          </div>
          <img src="${item.imagem}" class="overlay-image" alt="Capa do Mangá">
        </div>
`;
  carrocel.innerHTML += carrocel_items;
});







// // Função para puxar cada gênero do array "generos"
// function getGeneros(generos) {
//   return generos.map((genero) => genero.genero).join(' ');
// }




/**/
//====CARROCEL 2 =====================================================

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
    item.estado = mangaInfo.estado;
    item.lancamento = mangaInfo.lancamento;
    item.tipo = mangaInfo.tipo;
  }

  let manga_item = `
    <div class="item_manga">
  <a href="#">
    <div class="book_png">
      <img style="width: 150px;" src="./src/img/book.png" alt="">
    </div>
    <span class="${item.tipo}_carrocel"></span>
    <div class="manga_image">
      <img src="./mangas-e-manhaws/imgs/${item.img}" alt="">
    </div>
    <h1 title="${item.nome}">${item.nome}</h1>
    <span class="ep">${item.lancamento}</span>
    <span></span>
  </a>

</div>
    
  `;

  slider_mangas.innerHTML += manga_item;
});


var manga_selecionado = document.querySelectorAll(".carousel-item");

manga_selecionado.forEach((manga) => {
  var botao_manga = manga.querySelector('.btn-go-to-manga')
  const pegar_manga = manga.querySelector('h3').innerText;
  botao_manga.onclick = function() {
    localStorage.setItem('NomeDoManga', pegar_manga);
  }
});










