var box3 = document.querySelector(".box3");

let capitulos = [
    {id : '01', data:'6 de novembro de 2023'},
    {id : '02', data:'6 de novembro de 2023'},
    {id : '03', data:'6 de novembro de 2023'},
    {id : '04', data:'6 de novembro de 2023'},
    {id : '05', data:'6 de novembro de 2023'},
    {id : '05.5', data:'6 de novembro de 2023'},
    {id : '05.6', data:'6 de novembro de 2023'},
    {id : '05.1', data:'6 de novembro de 2023'},
    {id : '05.2', data:'6 de novembro de 2023'},
    {id : '05.3', data:'6 de novembro de 2023'},
    {id : '06', data:'6 de novembro de 2023'},
    {id : '07', data:'6 de novembro de 2023'},
    {id : '08', data:'6 de novembro de 2023'},
    {id : '09', data:'6 de novembro de 2023'},
    {id : '10', data:'6 de novembro de 2023'},
    {id : '11', data:'6 de novembro de 2023'},
    {id : '12', data:'6 de novembro de 2023'},
    {id : '13', data:'6 de novembro de 2023'},
    {id : '14', data:'6 de novembro de 2023'},
    {id : '15', data:'6 de novembro de 2023'},
    {id : '16', data:'6 de novembro de 2023'},
    {id : '17', data:'6 de novembro de 2023'},
    {id : '18', data:'6 de novembro de 2023'},
    {id : '19', data:'6 de novembro de 2023'},
    {id : '20', data:'6 de novembro de 2023'},
    {id : '21', data:'6 de novembro de 2023'},
    {id : '22', data:'6 de novembro de 2023'},
    {id : '23', data:'6 de novembro de 2023'},
    {id : '24', data:'6 de novembro de 2023'},
    {id : '25', data:'6 de novembro de 2023'},
    {id : '26', data:'6 de novembro de 2023'},
    {id : '27', data:'6 de novembro de 2023'},
    {id : '28', data:'6 de novembro de 2023'},
    {id : '29', data:'6 de novembro de 2023'},
    {id : '30', data:'6 de novembro de 2023'},
    {id : '31', data:'6 de novembro de 2023'},
    {id : '32', data:'6 de novembro de 2023'},
    {id : '33', data:'6 de novembro de 2023'},
    {id : '34', data:'6 de novembro de 2023'},
    {id : '34.5', data:'6 de novembro de 2023'},
    {id : '35', data:'6 de novembro de 2023'},
    {id : '36', data:'6 de novembro de 2023'},
    {id : '37', data:'6 de novembro de 2023'},
    {id : '38', data:'6 de novembro de 2023'},
    {id : '39', data:'6 de novembro de 2023'},
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


var nome = 'Nihon e Youkoso elf-san.'; //nome do manga/manhaw
var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>Welcome to Japan, Elf-san!</span>
`

var tipo = 'manga' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Nihon e Youkoso Elf-san (Welcome to Japan, Elf-san).png'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Makishima Suzuki</p>';
var artista_da_obra = '<span>Artista: </span> <p>Shimo Aono</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Kitase Kazuhiro é um assalariado comum que sempre deixa o escritório na hora certa. Embora este seja o Japão, talvez ele não seja realmente comum, afinal. O que é verdadeiramente estranho vem depois disso; Toda noite, ele toma banho, troca seu pijama e tem uma boa noite de sono, em seguida, ele sonha com um mundo de fantasia, e só acorda quando ele morre ou dorme nesse mundo. Um dia, ele morreu depois de tropeçar no covil de um dragão. Nisso ele tem “Um pesadelo”, ele fica amuado, até que ele encontra sua amiga elfo em sua cama. Curioso para ver um elfo waifu experimentar a vida cotidiana no Japão? Como é andar com a fantasia de todo homem nas ruas de Tóquio? Este mangá é para todos vocês amantes de elfos por aí!";

let generos_link = `
<a class="genero" href="http://">Aventura</a>
<a class="genero" href="http://">Comédia</a>
<a class="genero" href="http://">Ecchi</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Shounen</a>
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




