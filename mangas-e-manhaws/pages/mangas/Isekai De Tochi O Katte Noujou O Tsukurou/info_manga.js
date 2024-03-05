var nome = 'Isekai De Tochi O Katte Noujou O Tsukurou'; // nome do manga/manhwa

var tipo = 'manga' // é manga ou manhwa

const capitulo_incia = 1;//indique se a obra incia no capitulo 1 ou 0

// Substitua esta linha pelo valor da data desejada (ano, mês, dia)
var data = '2023-04-26'; //data de postagem da obra


//CAMINHO DA IMAGEM
var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Isekai%20De%20Tochi%20O%20Katte%20Noujou%20O%20Tsukurou.jpg';


//CAMINHO DA PASTA DO MANGA
var caminho_pasta = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/I/Isekai%20De%20Tochi%20O%20Katte%20Noujou%20O%20Tsukurou/capitulo-'


var rating = 5.5;//nota da obra


var nome_alternativo = `
<span class='nome_alt'>Isekai de Tochi o Katte Noujou o Tsukurou</span>
<span class='nome_alt'> Let's Buy the Land and Cultivate in Different World</span>
<span class='nome_alt'>在异世界购买土地建造农场</span>
<span class='nome_alt'>異世界で土地を買って農場を作ろう</span>
`



var autor_da_obra = '<span>Autor(es): </span> <p>OKAZAWA Rokujuuyon</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>SASAMEYUKI Jun</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<span>Sinopse:</span><span id="texto_sinopse">Como nosso humilde corporativista Itonami Norio é repentinamente convocado para outro mundo, pareceria que ele seria enviado para um campo de batalha – ele, entretanto, não possui nenhuma habilidade para falar, e como ele é considerado inútil. Ele negocia com o rei e recebe um terreno – um terreno vazio e deserto, sem nenhum habitante à vista. Norio segura algo que ele não poderia contar a ninguém: O Mestre da Supremacia, um presente que lhe dará a mais confortável das vidas neste mundo. Aqui começa a colorida história de Norio – tendo uma sereia que ele pesca se declara sua esposa, tornando-se vizinha do Rei Morto-vivo, esta é sua vida ocupada, mas divertida – e agora um dragão aparece?!</span>';




let generos_link = `
<a class="genero" href="../../generos/acao.html">Ação</a>
<a class="genero" href="../../generos/aventura.html">Aventura</a>
<a class="genero" href="../../generos/comedia.html">Comédia</a>
<a class="genero" href="../../generos/ecchi.html">Ecchi</a>
<a class="genero" href="../../generos/fantasia.html">Fantasia</a>
<a class="genero" href="../../generos/harem.html">Harem</a>
<a class="genero" href="../../generos/romance.html">Romance</a>
<a class="genero" href="../../generos/shounen.html">Shounen</a>
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