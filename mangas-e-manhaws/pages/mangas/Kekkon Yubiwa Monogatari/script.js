var box3 = document.querySelector(".box3");

let capitulos = [
    {id : '01', data:'12 de novembro de 2023'},
    {id : '02', data:'12 de novembro de 2023'},
    {id : '03', data:'12 de novembro de 2023'},
    {id : '04', data:'12 de novembro de 2023'},
    {id : '05', data:'12 de novembro de 2023'},
    {id : '06', data:'12 de novembro de 2023'},
    {id : '06.5', data:'12 de novembro de 2023'},
    {id : '07', data:'12 de novembro de 2023'},
    {id : '08', data:'12 de novembro de 2023'},
    {id : '09', data:'12 de novembro de 2023'},
    {id : '10', data:'12 de novembro de 2023'},
    {id : '11', data:'12 de novembro de 2023'},
    {id : '12', data:'12 de novembro de 2023'},
    {id : '13', data:'12 de novembro de 2023'},
    {id : '14', data:'12 de novembro de 2023'},
    {id : '15', data:'12 de novembro de 2023'},
    {id : '16', data:'12 de novembro de 2023'},
    {id : '16.5', data:'12 de novembro de 2023'},
    {id : '17', data:'12 de novembro de 2023'},
    {id : '18', data:'12 de novembro de 2023'},
    {id : '19', data:'12 de novembro de 2023'},
    {id : '20', data:'12 de novembro de 2023'},
    {id : '21', data:'12 de novembro de 2023'},
    {id : '22', data:'12 de novembro de 2023'},
    {id : '23', data:'12 de novembro de 2023'},
    {id : '24', data:'12 de novembro de 2023'},
    {id : '25', data:'12 de novembro de 2023'},
    {id : '26', data:'12 de novembro de 2023'},
    {id : '27', data:'12 de novembro de 2023'},
    {id : '28', data:'12 de novembro de 2023'},
    {id : '29', data:'12 de novembro de 2023'},
    {id : '30', data:'12 de novembro de 2023'},
    {id : '31', data:'12 de novembro de 2023'},
    {id : '32', data:'12 de novembro de 2023'},
    {id : '33', data:'12 de novembro de 2023'},
    {id : '34', data:'12 de novembro de 2023'},
    {id : '35', data:'12 de novembro de 2023'},
    {id : '36', data:'12 de novembro de 2023'},
    {id : '37', data:'12 de novembro de 2023'},
    {id : '38', data:'12 de novembro de 2023'},
    {id : '39', data:'12 de novembro de 2023'},
    {id : '40', data:'12 de novembro de 2023'},
    {id : '41', data:'12 de novembro de 2023'},
    {id : '42', data:'12 de novembro de 2023'},
    {id : '43', data:'12 de novembro de 2023'},
    {id : '44', data:'12 de novembro de 2023'},
    {id : '45', data:'12 de novembro de 2023'},
    {id : '46', data:'12 de novembro de 2023'},
    {id : '46.5', data:'12 de novembro de 2023'},
    {id : '47', data:'12 de novembro de 2023'},
    {id : '47.1', data:'12 de novembro de 2023'},
    {id : '47.2', data:'12 de novembro de 2023'},
    {id : '48', data:'12 de novembro de 2023'},
    {id : '49', data:'12 de novembro de 2023'},
    {id : '49.1', data:'12 de novembro de 2023'},
    {id : '49.2', data:'12 de novembro de 2023'},
    {id : '49.3', data:'12 de novembro de 2023'},
    {id : '50', data:'12 de novembro de 2023'},
    {id : '50.1', data:'12 de novembro de 2023'},
    {id : '50.2', data:'12 de novembro de 2023'},
    {id : '51', data:'12 de novembro de 2023'},
    {id : '51.5', data:'12 de novembro de 2023'},
    {id : '52', data:'12 de novembro de 2023'},
    {id : '53', data:'12 de novembro de 2023'},
    {id : '53.5', data:'12 de novembro de 2023'},
    {id : '54', data:'12 de novembro de 2023'},
    {id : '55', data:'12 de novembro de 2023'},
    {id : '56', data:'12 de novembro de 2023'},
    {id : '57', data:'12 de novembro de 2023'},
    {id : '58', data:'12 de novembro de 2023'},
    {id : '59', data:'12 de novembro de 2023'},
    {id : '60', data:'12 de novembro de 2023'},
    {id : '61', data:'12 de novembro de 2023'},
    {id : '61.5', data:'12 de novembro de 2023'},
    {id : '62', data:'12 de novembro de 2023'},
];






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


var nome = 'Kekkon Yubiwa Monogatari'; //nome do manga/manhaw
var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>Tales of Wedding Rings</span>
`

var tipo = 'manga' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Kekkon Yubiwa Monogatari.jpg'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Maybe</p>';
var artista_da_obra = '<span>Artista: </span> <p>Maybe</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Satou é apaixonado por sua amiga de infância e vizinha, Hime, desde que ela e o avô apareceram do nada há 10 anos. Agora uma deslumbrante, mas ainda misteriosa estudante, ela torna mais difícil para Satou confessar seus sentimentos. Com o convite de Hime para ir ao festival de verão, ele vai conseguir reunir coragem para transformar sua amizade em algo mais? Ou aguardará este casal um destino totalmente diferente?";

let generos_link = `
<a class="genero" href="http://">Ação</a>
<a class="genero" href="http://">Ecchi</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Harem</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Seinen</a>
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




