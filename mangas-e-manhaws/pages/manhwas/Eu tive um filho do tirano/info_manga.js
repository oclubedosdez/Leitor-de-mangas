var nome = 'Beware of the Brothers!'; // nome do manga/manhwa

var tipo = 'manhwa' // é manga ou manhwa

const capitulo_inicia = 1;//indique se a obra incia no capitulo 1 ou 0

// Substitua esta linha pelo valor da data desejada (ano, mês, dia)
var data = '2022-02-26'; //data de postagem da obra


//CAMINHO DA IMAGEM
var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/manhaws/imgs/Beware%20of%20the%20Brothers!.jpg';


//CAMINHO DA PASTA DO MANGA
var caminho_pasta = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/Beware%20of%20the%20Brothers/capitulo-'


var rating = 5.4;//nota da obra


var nome_alternativo = `
<span class='nome_alt'>Cuidado com os irmãos!</span>
<span class='nome_alt'>그 오빠들을 조심해!</span>
`



var autor_da_obra = '<span>Autor(es): </span> <p>Plutus</p>';
var artista_da_obra = '<span>Artista(es): </span> <p>Shimo Aono</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<span>Sinopse:</span><span id="texto_sinopse">Hari foi adotada pelo duque Ernst aos 7 anos, quando perdeu sua mãe. Embora ela tenha recebido todo tipo de perseguição dos três filhos de Ernst, ela finalmente conseguiu escapar daquela vida que causou sangue e lágrimas quando ela estava prestes a se casar. “Mas o que é isso? Quando acordei do meu sonho, voltei àquela infância infernal! Isso é um sonho ?!” “Hmph. Se eu não consigo acordar desse sonho, pelo menos vou viver sem muita consideração pelos outros agora!” É assim que a história de Hari começa!</span>';




let generos_link = `
<a class="genero" href="../../generos/drama.html">Drama</a>
<a class="genero" href="../../generos/fantasia.html">Fantasia</a>
<a class="genero" href="../../generos/historico.html">Histórico</a>
<a class="genero" href="../../generos/romance.html">Romance</a>
<a class="genero" href="../../generos/shoujo.html">Shoujo</a>
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