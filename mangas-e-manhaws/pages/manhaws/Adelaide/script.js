var box3 = document.querySelector(".box3");



let capitulos = [
    {
        "id" : "01.1",
        "data" : "12 de dezembro de 2023"
    }
];

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = 'Adelaide';

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


var nome = 'A doce vida de Adelaide'; //nome do manga/manhaw
var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>A doce vida de adelaide</span>
<span class='nome_alt'>La dolce vita di Adelaide</span>
<span class='nome_alt'>아델라이드의 라 돌체 비타</span>
`

var tipo = 'manhwa' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Adelaide.jpg';







var autor_da_obra = '<span>Autor: </span> <p>Chae Habin</p>';
var artista_da_obra = '<span>Artista: </span> <p>Kim So-hee</p>';
var estatus_obra = '<span>Status: </span> <p>Finalizado</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>17 anos após sua reencarnação, Adelaide ouve que um viajante dimensional chegou repentinamente ao palácio imperial. Apenas o choque de excitação que minha vida chata precisava, ela pensou! Participando do baile de estreias para conhecer essa nova Susanne, Adelaide acaba fazendo um acordo com o belo duque Felix: tornar-se sua “falsa” noiva para que ele possa manter a garimpeira Susanne longe dele! Enquanto Felix trata sua companheira, Adelaide poderá vencer esta batalha por seu coração?";

let generos_link = `
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Histórico</a>
<a class="genero" href="http://">Isekai</a>
<a class="genero" href="http://">Romance</a>
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






