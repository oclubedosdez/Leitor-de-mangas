var iniciar = 1;


let select_element = [
];

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = 'Adelaide';

const mangaEncontrado = manga_info.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());

if (mangaEncontrado) {
    const numCapitulos = mangaEncontrado.num_capitulo;
    const textoCap = mangaEncontrado.text_cap;

    for(let i = iniciar; i <= numCapitulos; i++) {
        select_element.push(`'<option value="./${i < 10 ? "0" : ""}${i}.html">capitulo ${i < 10 ? "0" : ""}${i}</option>'`)


    }

} else {
    console.log(`Manga não encontrado.`);
}






var modo_escuro = document.querySelector('.modo-claro');
var botao = document.querySelector('.modo-claro')
var cabecalho = document.querySelector('.titulo2')

modo_escuro.addEventListener('click', function () {
    document.body.classList.toggle('modo_black')

    if (document.body.classList.contains('modo_black')) {
        botao.innerHTML = 'Modo claro'
        botao.classList.add('botao_escuro')
        cabecalho.classList.add('modo_escuro')
        document.getElementById('logo').style.border = '4px solid black'
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



var nome_manga = 'Adelaide'
// var caminho  = 'https://oclubedosdez.github.io/Imagens/mangas/My%20Childhood%20Friend%20Became%20an%20Obsessive%20Male%20Lead/capitulo-'

var caminho  = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/manhaws/Adelaide/capitulo-'


var num_imgs = 80;


