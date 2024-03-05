var nome = 'Nihon e Youkoso Elf-san'; // nome do manga/manhwa

var tipo = 'manga' // é manga ou manhwa

const capitulo_incia = 1;//indique se a obra incia no capitulo 1 ou 0

// Substitua esta linha pelo valor da data desejada (ano, mês, dia)
var data = '2023-02-26'; //data de postagem da obra


//CAMINHO DA IMAGEM
var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Nihon%20e%20Youkoso%20elf-san.jpg';


//CAMINHO DA PASTA DO MANGA
var caminho_pasta = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/N/Nihon%20e%20Youkoso%20elf-san/capitulo-'


var rating = 4.5;//nota da obra


var nome_alternativo = `
<span class='nome_alt'>Welcome to Japan, Elf-san</span>
`



var autor_da_obra = '<span>Autor(es): </span> <p>Makishima Suzuki</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>Shimo Aono</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<span>Sinopse:</span><span id="texto_sinopse">Kitase Kazuhiro é um assalariado comum que sempre deixa o escritório na hora certa. Embora este seja o Japão, talvez ele não seja realmente comum, afinal. O que é verdadeiramente estranho vem depois disso; Toda noite, ele toma banho, troca seu pijama e tem uma boa noite de sono, em seguida, ele sonha com um mundo de fantasia, e só acorda quando ele morre ou dorme nesse mundo. Um dia, ele morreu depois de tropeçar no covil de um dragão. Nisso ele tem “Um pesadelo”, ele fica amuado, até que ele encontra sua amiga elfo em sua cama. Curioso para ver um elfo waifu experimentar a vida cotidiana no Japão? Como é andar com a fantasia de todo homem nas ruas de Tóquio? Este mangá é para todos vocês amantes de elfos por aí!</span>';




let generos_link = `
<a class="genero" href="../../generos/aventura.html">Aventura</a>
<a class="genero" href="../../generos/comedia.html">Comédia</a>
<a class="genero" href="../../generos/ecchi.html">Ecchi</a>
<a class="genero" href="../../generos/fantasia.html">Fantasia</a>
<a class="genero" href="../../generos/romance.html">Romance</a>
<a class="genero" href="../../generos/shounen.html">Shounen</a>
<a class="genero" href="../../generos/slice-of-life.html">Slice of Life</a>
`


/*Mude os mangas relacionados se quiser*/

let carousel_mangas_items = [
    {
        "nome": "Isekai Cheat Magician",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Isekai%20Cheat%20Magician.jpg",
    },

    {
        "nome": "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Otonari%20no%20Tenshi-sama%20ni%20Itsunomanika%20Dame%20Ningen%20ni%20Sareteita%20Ken.jpg",
    },
    {
        "nome": "Isekai De Tochi O Katte Noujou O Tsukurou",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Isekai%20De%20Tochi%20O%20Katte%20Noujou%20O%20Tsukurou.jpg",
    },
    {
        "nome": "Estou Tentando Me Divorciar do Meu Esposo Vilão, Mas Teremos Um Filho",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Estou%20Tentando%20Me%20Divorciar%20do%20Meu%20Esposo%20Vil%C3%A3o%2C%20Mas%20Teremos%20Um%20Filho.jpg",
    },
    {
        "nome": "Salvos A Monster Evolution LitRPG",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/pages/manhwas/imgs/Salvos A Monster Evolution LitRPG.jpg",
    },

    {
        "nome": "Musume ja Nakute Mama ga Suki nano",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Musume ja Nakute Mama ga Suki nano.jpg",
    },

    {
        "nome": "Saint Seiya Meiou Iden Dark Wing",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Saint Seiya Meiou Iden Dark Wing.jpg",
    },
    {
        "nome": "Congelamento Global",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/manhuas/img/Congelamento Global.jpg",
    },
    {
        "nome": "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru",
        "img": "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru.jpg",
    },
];