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
for (let i = 1; i <= 25; i++) { // Adicionando 5 capítulos com base na data atual
    dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona 1 dia à data atual
    capitulos.push({
        "id": `${i < 10 ? `0${i}` : i}`,
        "data": formatData(dataAtual)
    });
}


// Criar elementos HTML e atualizar a caixa box3
const bannerElements = capitulos.map((banner) => `
    <a class="capitulo" href="./capitulos/${banner.id}.html">
        <img class="img-fluid w-25" src="https://github.com/oclubedosdez.png" alt="">
        <div class="titulo_data">
            <h1>Capitulo ${banner.id}</h1>
            <h3>${banner.data}</h3> 
        </div>
    </a>
`);



box3.innerHTML = bannerElements.join('');



const titulo1 = document.querySelector('.titulo1')
const titulo2 = document.querySelector('.titulo2')
const tipo_de_quadrinho = document.getElementById('tipo_de_quadrinho')
const img_fluid = document.getElementById('imagen_principal')
const banner = document.getElementById('imagen_banner')
const generos = document.querySelector('.generos')
const autor = document.getElementById('autor')
const artista = document.getElementById('artista')
const estatus = document.getElementById('estatus')
const sinopse = document.getElementById('sinopse')


var nome = 'Saenai Riman to Yankee Joshi Kousei'; //nome do manga/manhaw
var tipo = 'manga' // é manga ou manhaw
var caminho = '../../../imgs/Saenai Riman to Yankee Joshi Kousei.jpg'; //caminho da imagem
var autor_da_obra = 'Tamaki Nao';
var artista_da_obra = 'Tamaki Nao';
var estatus_obra = 'Ativo';

var sinopese_da_obra = 'Yamada Hiroyuki tem 26 anos, tem um emprego estável, é um otaku, oprimido pelas ideias e pensamentos de sua família (quando você se casa? Você ainda assiste animes na sua idade?) Ele decide sair de casa e ir morar em um apartamento, sozinho e feliz, mas a imagem perfeita que ele tinha em mente quando se mudou, foi destruída quando soube que sua vizinha é uma yankee (delinquente) e ao mesmo tempo uma colegial, logo ele descobre que aquela garota rude e desbocada é alguém desajeitada, muito terna e muito fofa. A história desses dois jovens avançará para melhor?';

let generos_link = `
<a class="genero" href="http://">Comedia</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Slice of life</a>
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

