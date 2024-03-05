// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = localStorage.getItem('NomeDoManga');

const mangaEncontrado = mangas_e_manhwas.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());


if (mangaEncontrado) {

    const numCapitulos = mangaEncontrado.num_capitulos;
    const textoCap = mangaEncontrado.text_cap;


    const semanasPorCapitulo = 1; // Ajuste o valor conforme necessário

    const nome_head = document.getElementById('nome_head');
    const nome_body = document.getElementById('nome_body');
    const manga_img_fundo = document.getElementById('manga_img_fundo');
    const tipo_quadrinho = document.getElementById('tipo_quadrinho');
    const imagen_principal = document.getElementById('imagen_principal');

    const generos = document.getElementById("generos");
    const autor = document.getElementById("autor");
    const artista = document.getElementById("artista");
    const alternativo = document.getElementById("alternativo");
    const estatus = document.getElementById("estatus");
    const sinopse = document.getElementById("sinopse");




    nome_head.innerText = nomeDoMangaBuscado;
    nome_body.innerText = nomeDoMangaBuscado;

    manga_img_fundo.src = `${mangaEncontrado["caminho-img"]}`;
    imagen_principal.src = `${mangaEncontrado["caminho-img"]}`;
    var rating = mangaEncontrado.nota;//nota da obra
    var capitulo_inicia = mangaEncontrado.CapituloInicia;


    // Obtenha o valor da propriedade "genero"
    var genero = mangaEncontrado.genero;

    // Separe os gêneros usando a espaço como delimitador
    var generosArray = genero.split(' ');

    // Mapeie os gêneros para os links formatados
    var genero_link = generosArray.map(genero => `<a class="genero" href="../../generos/${genero.toLowerCase()}.html">${genero}</a>`).join('\n');

    generos.innerHTML += `Genero(s): ${genero_link}`





    autor.innerHTML = `<span>Autor(es): </span> <p>${mangaEncontrado.autor}</p>`;
    artista.innerHTML = `<span>Artista(es): </span> <p>${mangaEncontrado.artista}</p>`;




    // Obtenha o valor da propriedade "nomes_alternativos"
    var nomesAlternativos = mangaEncontrado.nomes_alternativos;

    // Separe os nomes alternativos usando a vírgula como delimitador
    var nomesAlternativosArray = nomesAlternativos.split(', ');

    // Formate os nomes alternativos conforme desejado
    var nome_alternativo = nomesAlternativosArray.map(nome => `<span class='nome_alt'>${nome}</span>`).join('\n');

    alternativo.innerHTML = `Alternativo:${nome_alternativo}`;







    estatus.innerHTML = `<span>Status: </span> <p>${mangaEncontrado.estado}</p>`;
    sinopse.innerHTML = `<span>Sinopse:</span><span id="texto_sinopse">${mangaEncontrado.historia}</span>`;
    tipo_quadrinho.innerText = `Tipo: ${mangaEncontrado.tipo}`


    /*RENDERIZAR CAPITULO NA TELA*/
    var box3 = document.querySelector(".box3");


    let capitulos = [];

    // Substitua esta linha pelo valor da data desejada (ano, mês, dia)
    const dataInicial = new Date(mangaEncontrado.Postado); // Por exemplo, 30 de outubro de 2024

    // Função para formatar a data no formato desejado
    function formatData(data) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return data.toLocaleDateString("pt-BR", options);
    }






    for (let i = capitulo_inicia; i <= numCapitulos; i++) {
        const intervaloEmSemanas = i * semanasPorCapitulo;
        const dataAtual = new Date(dataInicial);
        dataAtual.setDate(dataInicial.getDate() + 1); // Ajuste do dia para corrigir o problema de começar em 24 de fevereiro
        dataAtual.setDate(dataAtual.getDate() + intervaloEmSemanas * 0.1 * i); // Multiplicamos por 2 para converter semanas em dias

        capitulos.push({
            "id": `${i < 10 ? `0${i}` : i}`,
            "data": formatData(dataAtual),
            "valor": `${i}`,
        });
    }

    const capituloElements = capitulos.map((capitulo) => `
        <a class="capitulo" href="./capitulos/index.html" data-valor="${capitulo.valor}">
            <div class="titulo_data">
                <h1>Capitulo ${capitulo.id}</h1> -
                <h3>${capitulo.data}</h3> 
            </div>
            <img class="capitulo-img" src="https://raw.githubusercontent.com/oclubedosdez/Leitor-de-mangas/main/src/img/book.png" alt="">
        </a>
    `);

    box3.innerHTML = capituloElements.join('');
} else {
    console.log(`Manga não encontrado.`);
}



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

const slider_mangas = document.querySelector('.owl-carousel');




carousel_mangas_items.forEach((item) => {
    // Procura o manga correspondente no array manga_info
    let mangaInfo = mangas_e_manhwas.find(info => info.nome === item.nome);

    // Se encontrar, adiciona a informação de número de capítulos
    if (mangaInfo) {
        item.capitulos = mangaInfo.num_capitulos;
        item.text_cap = mangaInfo.text_cap;
        item.estado = mangaInfo.estado;
        item.lancamento = mangaInfo.lancamento;
        item.tipo = mangaInfo.tipo;
        item.pasta = mangaInfo.pasta;
    }

    let manga_item = `
        <div class="item_manga">
            <a href="../../${item.tipo}s/${item.pasta}/index.html">
                 <span class="${item.tipo}_carrocel"></span>
                 <div class="manga_image">
                <img src="${item.img}" alt="">
                </div>
                <h1 title="${item.nome}">${item.nome}</h1>
                <span class="ep">${item.lancamento}</span>
            </a>
                    
         </div>
    
  `;

    slider_mangas.innerHTML += manga_item;
});



var mangas_capitulos = document.querySelectorAll('.capitulo')


mangas_capitulos.forEach((link) => {
    link.onclick = function () {
        const valorDoCapitulo = link.getAttribute('data-valor')

        localStorage.setItem('ValorCapitulo', valorDoCapitulo)




    }
});




