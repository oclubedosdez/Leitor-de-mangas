var nome = 'Saenai Riman to Yankee Joshi Kousei'; // nome do manga/manhwa

var tipo = 'manga' // é manga ou manhwa

const capitulo_inicia = 1;//indique se a obra incia no capitulo 1 ou 0

// Substitua esta linha pelo valor da data desejada (ano, mês, dia)
var data = '2023-02-22'; //data de postagem da obra


//CAMINHO DA IMAGEM
var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Saenai%20Riman%20to%20Yankee%20Joshi%20Kousei.jpg';


//CAMINHO DA PASTA DO MANGA
var caminho_pasta = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/S/Saenai%20Riman%20to%20Yankee%20Joshi%20Kousei/capitulo-'


var rating = 4.5;//nota da obra


var nome_alternativo = `
<span class='nome_alt'>Business-Geek e Highschool-Punk</span>
<span class='nome_alt'>冴えないリーマンとヤンキー女子高生</span>
`



var autor_da_obra = '<span>Autor(es): </span> <p>Tamaki Nao</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>Tamaki Nao</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<span>Sinopse:</span><span id="texto_sinopse">Yamada Hiroyuki tem 26 anos, tem um emprego estável, é um otaku, oprimido pelas ideias e pensamentos de sua família (quando você se casa? Você ainda assiste animes na sua idade?) Ele decide sair de casa e ir morar em um apartamento, sozinho e feliz, mas a imagem perfeita que ele tinha em mente quando se mudou, foi destruída quando soube que sua vizinha é uma yankee (delinquente) e ao mesmo tempo uma colegial, logo ele descobre que aquela garota rude e desbocada é alguém desajeitada, muito terna e muito fofa. A história desses dois jovens avançará para melhor?</span>';




let generos_link = `
<a class="genero" href="../../generos/comedia.html">Comedia</a>
<a class="genero" href="../../generos/romance.html">Romance</a>
<a class="genero" href="../../generos/slice-of-life.html">Slice of life</a>
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