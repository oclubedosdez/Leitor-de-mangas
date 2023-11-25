const carrocel = document.querySelector('.carousel-inner');



let carrocel_cabecalho = [
  {
    'id': 'I',
    'cap': 'Capitulo: 72',
    'tipo': 'manhaws',
    'ativo': 'active',
    'img': 'I Am Trying to Divorce My Villain Husband, but We Have a Child.jpg',
    'nome': 'I Am Trying to Divorce My Villain Husband, but We Have a Child',
    'pasta': 'I Am Trying to Divorce My Villain Husband, but We Have a Child',
    'generos': [
      { 'genero': '<a href="">Drama</a>' },
      { 'genero': '<a href="">Fantasia</a>' },
      { 'genero': '<a href="">Josei</a>' },
      { 'genero': '<a href="">Romance</a>' },
    ],
    'sinopse': 'Elisha é casada com um homem abusivo que ela acredita ser o diabo. Ela fica grávida dele e tenta fugir, mas ele a captura e a ameaça de morte. Mas ela ainda não encontrou uma maneira de escapar.'
  },


  {
    'id': 'B',
    'cap': 'Capitulo: 05.5',
    'tipo': 'mangas',
    'ativo': '',
    'img': 'Bara to Juudan.jpg',
    'nome': 'Bara to Juudan',
    'pasta': 'Bara to Juudan',
    'generos': [
      { 'genero': '<a href="">Fantasia</a>' },
      { 'genero': '<a href="">Romance</a>' },
      { 'genero': '<a href="">Shoujo</a>' },
      { 'genero': '<a href="">Sobrenatural</a>' },
    ],
    'sinopse': 'Ela era apenas uma garota normal que tinha uma queda pelo seu vizinho, Ren. Mas no dia de seu aniversário, uma maldição hereditária desperta e Mitsuki libera a vampira dentro de si.'
  },

  {
    'id': 'Z',
    'cap': 'Capitulo: 03',
    'tipo': 'mangas',
    'ativo': '',
    'img': 'Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made.jpg',
    'nome': 'Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made',
    'pasta': 'Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made',
    'generos': [
      { 'genero': '<a href="">Ação</a>' },
      { 'genero': '<a href="">Fantasia</a>' },
      { 'genero': '<a href="">Shounen</a>' },
    ],
    'sinopse': 'Wimme Strauss, concedente um mago de suporte que luta para encontrar um trabalho decente, é expulso de seu partido após derrotar Boss. Ele é recrutado por sua amiga de infância, Heidemarie, para ajudar seu grupo mias só o que ela não sabe e ?.'
  },


  {
    'id': 'W',
    'cap': `Capitulo: 23`,
    'tipo': 'manhaws',
    'ativo': '',
    'img': 'Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago.jpg',
    'nome': 'Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago',
    'pasta': 'Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago',
    'generos': [
      { 'genero': '<a href="">Drama</a>' },
      { 'genero': '<a href="">Fantasia</a>' },
      { 'genero': '<a href="">Romance</a>' },
      { 'genero': '<a href="">Shounen</a>' },
      { 'genero': '<a href="">Sobrenatural</a>' },
    ],
    'sinopse': 'Jiang He, uma garota da Dinastia Tang, viajou mil anos e chegou ao lado de Xu Qing. Seu amor e sua família foram deixados para trás por 1.200 anos, deixando-o começar uma nova vida cheia de amor, confusão e risos..'
  },

  {
    'id': 'R',
    'cap': `Capitulo: 23`,
    'tipo': 'manhaws',
    'ativo': '',
    'img': 'Release That Witch 2.jpg',
    'nome': 'Release That Witch',
    'pasta': 'Release That Witch',
    'generos': [
      { 'genero': '<a href="">Ação</a>' },
      { 'genero': '<a href="">Aventura</a>' },
      { 'genero': '<a href="">Drama</a>' },
      { 'genero': '<a href="">Fantasia</a>' },
      { 'genero': '<a href="">Harem</a>' },
      { 'genero': '<a href="">Romance</a>' },
      { 'genero': '<a href="">Shounen</a>' },
      { 'genero': '<a href="">Sobrenatural</a>' },
    ],
    'sinopse': 'Um engenheiro transmigra para outro mundo, tornando-se um príncipe. Este lugar lembra a Idade Média da Europa, mas parece diferente. As bruxas existem e possuem poderes mágicos. Salve-os, liberte as forças produtivas e lute contra os demônios.'
  },
];








{/* <li data-target="#mainSlider" data-slide-to="0" class="active"></li>
<li data-target="#mainSlider" data-slide-to="1"></li>
<li data-target="#mainSlider" data-slide-to="2"></li>
<li data-target="#mainSlider" data-slide-to="3"></li> */}


// Função para puxar cada gênero do array "generos"
function getGeneros(generos) {
  return generos.map((genero) => genero.genero).join(' ');
}

carrocel_cabecalho.forEach((item) => {
  let carrocel_items = `<div href="#mainSlider" class="carousel-item ${item.ativo}">
<img class="carousel-img" src="./mangas-e-manhaws/imgs/${item.img}" alt="">

<img class="carousel-banner" src="./mangas-e-manhaws/imgs/${item.img}" alt="">

  <div class="carousel-caption">
    <div>
    <h1>${item.cap}</h1>
    <h1>${item.nome}</h1>
    </div>
    <h2>${item.sinopse}</h2>
    <div class="generos">
      ${getGeneros(item.generos)}
    </div>
    <a class="botao-manga" href="./mangas-e-manhaws/pages/${item.tipo}/${item.pasta}/index.html">
      <span>Ler agora</span>
      <img src="./src/img/book.png" alt="">
    </a>
  </div>

</div>`;
  carrocel.innerHTML += carrocel_items;
});

//
/**/ 
//====CARROCEL 2 =====================================================
const slider_mangas = document.querySelector('.slide-ler-mangas')

let carousel_mangas_items = [
  {
    "tipo": "manga",
    "nome": "Atsumori-kun no Oyome-san",
    "img": "Atsumori-kun no Oyome-san.jpg",
    "cor": "preto-branco",
    "text-cor": "PB",
    "pasta" : "Atsumori-kun no Oyome-san"
  },

  {
    "tipo": "manhaw",
    "nome": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)",
    "img": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!).jpg",
    "cor": "colorido",
    "text-cor": "CL",
    "pasta" : "Knight of the Frozen Flower",
  },
  {
    "tipo": "manhaw",
    "nome": "My Childhood Friend Became an Obsessive Male Lead",
    "img": "My Childhood Friend Became an Obsessive Male Lead.jpg",
    "cor": "colorido",
    "text-cor": "CL",
    "pasta" : "My Childhood Friend Became an Obsessive Male Lead",
  },
  {
    "tipo": "manhaw",
    "nome": "A Proprietária Bebê Está se Aposentando",
    "img": "A Proprietária Bebê Está se Aposentando.jpg",
    "cor": "colorido",
    "text-cor": "CL",
    "pasta" : "A Proprietária Bebê Está se Aposentando",
  },
];


carousel_mangas_items.forEach((item) => {
  let manga_item = `
       <div class="box">
          <div class="tipo">
            <h2 class="${item.tipo}">${item.tipo}</h2>
            <span class="cor ${item.cor}">${item["text-cor"]}</span>
          </div>
          <a href="./mangas-e-manhaws/pages/${item.tipo}s/${item.pasta}/index.html" class="imagem-ler-mangas">
            <div class="img-book">
             <img class='' src="./src/img/book.png" alt=""> 
            </div>
            
           <img src="./mangas-e-manhaws/imgs/${item.img}" alt=""> 
          </a>
          <h2 class="nome" title="${item.nome}">${item.nome}</h2>
        </div>
  `;
  slider_mangas.innerHTML += manga_item
});


{/* <div class="box">

<div class="tipo">
  <h2 class="manhaw">Manhaw</h2>
  <span class="cor colorido">CL</span>
</div>
<a href="" class="imagem-ler-mangas">
  <div class="img-book">
   <img class='' src="./src/img/book.png" alt=""> 
  </div>
  
 <img src="./mangas-e-manhaws/imgs/Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!).jpg" alt=""> 
</a>
<h2 class="nome" title="Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)">Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)</h2>

</div> */}