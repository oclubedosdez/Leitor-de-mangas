var box3 = document.querySelector(".box3");
var nome = 'Fuufu Ijou, Koibito Miman'; //nome do manga/manhaw

let capitulos = [];


// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = `${nome}`;

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

        if (i == 9) {
            capitulos.push({"id" : "09.5", "data" : formatData(dataAtual)})
        }
    
        if (i == 42) {
            capitulos.push({"id" : "42.5", "data" : formatData(dataAtual)})
        }
    
        if (i == 54) {
            capitulos.push({"id" : "54.5", "data" : formatData(dataAtual)})
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


var nome = 'Fuufu Ijou, Koibito Miman'; //nome do manga/manhaw
var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>夫婦以上、恋人未満</span>
`

var tipo = 'manga' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/Fuufu Ijou, Koibito Miman.jpg'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Yuuki Kanamaru</p>';
var artista_da_obra = '<span>Artista: </span> <p>Yuuki Kanamaru</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Jirou, um terceiro ano do ensino médio, é forçado a viver com um gyaru chamado Akari em um curso chamado “Prático de Casal”. A fim de serem emparelhados com seus próprios interesses românticos, eles vão agir como um casal…!?";

let generos_link = `
<a class="genero" href="http://">Comédia</a>
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Escolar</a>
<a class="genero" href="http://">Romance</a>
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




