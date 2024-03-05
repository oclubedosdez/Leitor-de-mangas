var nome = 'Saint Seiya Meiou Iden Dark Wing'; // nome do manga/manhwa

var tipo = 'manga' // é manga ou manhwa

const capitulo_inicia = 1;//indique se a obra incia no capitulo 1 ou 0

// Substitua esta linha pelo valor da data desejada (ano, mês, dia)
var data = '2023-03-22'; //data de postagem da obra


//CAMINHO DA IMAGEM
var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Saint Seiya Meiou Iden Dark Wing.jpg';


//CAMINHO DA PASTA DO MANGA
var caminho_pasta = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/Saint%20Seiya%20Meiou%20Iden%20Dark%20Wing/capitulo-'


var rating = 4.5;//nota da obra


var nome_alternativo = `
<span class='nome_alt'>聖闘士星矢 冥王異伝ダークウイング</span>
`



var autor_da_obra = '<span>Autor(es): </span> <p>Masami Kurumada . Kenji Saito</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>Nobufune Ueda</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<span>Sinopse:</span><span id="texto_sinopse">Um estudante do ensino médio sofre um acidente e acorda no Elíseo do Mundo dos Mortos. Em busca de respostas, ele se encontra com Hades, o Deus do Submundo.</span>';




let generos_link = `
<a class="genero" href="../../generos/acao.html">Acao</a>
<a class="genero" href="../../generos/aventura.html">Aventura</a>
<a class="genero" href="../../generos/fantasia.html">Fantasia</a>
<a class="genero" href="../../generos/shounen.html">Shounen</a>
<a class="genero" href="../../generos/sobrenatural.html">Sobrenatural</a>
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