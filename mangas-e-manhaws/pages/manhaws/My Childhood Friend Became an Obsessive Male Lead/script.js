var box3 = document.querySelector(".box3");



let capitulos = [];

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = 'My Childhood Friend Became an Obsessive Male Lead';

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


var nome = 'Meu Amigo de Infância Tornou-se um Protagonista Masculino Obsessivo'; //nome do manga/manhaw
var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>내 어릴 적 친구는 강박 적인 남자 주인공이 되었다</span>
<span class='nome_alt'>My Childhood Friend Became an Obsessive Male Lead</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/My Childhood Friend Became an Obsessive Male Lead.jpg';
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
    caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Yoon-Dal</p>';
var artista_da_obra = '<span>Artista: </span> <p>Yoon-Dal</p>';
var estatus_obra = '<span>Status: </span> <p>Iato</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Ela foi vendida a um duque monstro com problemas na parte inferior do corpo. Mas só há uma maneira de não ser oferecido à nobreza é ser uma mulher casada. Por um momento, Isabel lembrou-se do seu amigo de infância Ricks, que não tinha interesse no amor. “Então Ricks, casa comigo. “Se eu me tornar uma mulher casada, o outro lado vai me rejeitar” “… Porque é que odeias tanto o Duke Cardiego? “ “Outras coisas estão bem. Mas ele é um tirano? Se viver uma vida dura é bom. Mas se fizer algo errado, será morto? Mesmo isso tem problema é inaceitável” Ricks ficou chateado e ficou louco. *** Alguns dias depois, Duque Cardiego, um homem que vivia em reclusão, chegou ao templo. Claro que o mais surpreendente é que a Isabel aprendeu o corpo da sua amiga de infância.";

let generos_link = `
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Josei</a>
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







