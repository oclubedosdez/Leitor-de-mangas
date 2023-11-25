var box3 = document.querySelector(".box3");

let capitulos = [];


// Obter a data atual
const dataAtual = new Date();

// Função para formatar a data no formato desejado
function formatData(data) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return data.toLocaleDateString("pt-BR", options);
}

// Adicionar capítulos com base na data atual
for (let i = 1; i <= 75; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'Estou Tentando Me Divorciar do Meu Esposo Vilão, Mas Teremos Um Filho'; //nome do manga/manhaw
var rating = 4.9;//nota da obra

var nome_alternativo = `
<span class='nome_alt'>I Am Trying To Divorce My Villain Husband</span>
<span class='nome_alt'>But We Have A Child - I Plan to Divorce My Villain Husband</span>
<span class='nome_alt'>But We Have A Child - I Plan to Divorce My Villain Husband</span>
<span class='nome_alt'>Pero Tenemos un Hijo. - 악당 남편과 이혼하려는데, 아이가 생겼다</span>
`

var tipo = 'manhaw' // é manga ou manhaw

//CAMINHO DA IMAGEM
var caminho = '../../../imgs/I Am Trying to Divorce My Villain Husband, but We Have a Child.jpg'; 
// Obtenha a referência da imagem
const img = document.querySelector("img");

// Verifique se a imagem está carregada
if (img.complete) {
  caminho = 'https://oclubedosdez.github.io/Leitor-de-mangas/mangas-e-manhaws/imgs/De%20Tantas%20Coisas,%20Me%20Tornei%20um%20Corvo.jpeg';
} else {
}







var autor_da_obra = '<span>Autor: </span> <p>Baek Dan</p>';
var artista_da_obra = '<span>Artista: </span> <p>Baek Dan</p>';
var estatus_obra = '<span>Status: </span> <p>ativo</p>';

var sinopese_da_obra = "<strong>Sinopse:</strong>Ela possuiu a mulher que era casada com o diabo. Você desempenha o papel de alguém obcecada por um marido vilão. “Eu estarei ao seu lado!” Ela decidiu ser gentil com o marido, que mora na mesma casa que ela há muito tempo. Mas um dia, quando me tornei adulta e estava prestes a me divorciar… Uma má noite me deixou com uma criança inesperada. Então eu tentei sair antes que eles me pegassem. “Aquele Richard? Algo está errado com-” “Eu não quero deixar você ir, então morra em meus braços, Elisha.” Ela não conseguia se livrar disso enquanto tentava chorar e implorar com seu lindo rosto. “Para onde você vai fugir com meu filho?” Você me perseguiu com olhos tão frios? Acho que não posso escapar. O que eu faço agora?";

let generos_link = `
<a class="genero" href="http://">Drama</a>
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




