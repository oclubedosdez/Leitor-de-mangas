var nome = 'Isekai Kenkokuki'; // nome do manga/manhwa

var tipo = 'manga' // é manga ou manhwa

const capitulo_inicia = 1;//indique se a obra incia no capitulo 1 ou 0

// Substitua esta linha pelo valor da data desejada (ano, mês, dia)
var data = '2023-05-01'; //data de postagem da obra


//CAMINHO DA IMAGEM
var caminho = 'https://github.com/oclubedosdez/Imagens/blob/main/mangas/img/Isekai%20Kenkokuki.jpg?raw=true./imgs/Isekai Kenkokuki.jpg';


//CAMINHO DA PASTA DO MANGA
var caminho_pasta = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/I/Isekai%20Kenkokuki/capitulo-'


var rating = 4.5;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>Different World Foundation</span>
<span class='nome_alt'>Otherworld Nation Founding Chronicles</span>
<span class='nome_alt'>Isekai Kenkoku-ki</span>
`



var autor_da_obra = '<span>Autor(es): </span> <p>Sakuragi, Sakura</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>KOIZUMI</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<span>Sinopse:</span><span id="texto_sinopse">Um protagonista renascido em outro mundo. Aparentemente ele havia reencarnado como um filho abandonado, junto a outros órfãos. Para sobreviver, ele os conduziu à agricultura. Pouco a pouco, os órfãos se reuniram, e ao ouvir rumores de uma aldeia, outros começaram a migrar. O grupo que tinha sido nada além de crianças tornou-se uma aldeia antes que alguém percebesse. E então, vários países nos arredores começaram a observá-lo... Este é o conto épico do homem que mais tarde seria conhecido como o Imperador Divino.</span>';




let generos_link = `
<a class="genero" href="../../generos/acao.html">Ação</a>
<a class="genero" href="../../generos/drama.html">Drama</a>
<a class="genero" href="../../generos/fantasia.html">Fantasia</a>
<a class="genero" href="../../generos/harem.html">Harem</a>
<a class="genero" href="../../generos/isekai.html">Isekai</a>
<a class="genero" href="../../generos/romance.html">Romance</a>
<a class="genero" href="../../generos/slice-of-life.html">Slice-of-Life</a>
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