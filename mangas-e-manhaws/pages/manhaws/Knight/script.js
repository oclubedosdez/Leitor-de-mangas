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
for (let i = 1; i <= 52; i++) { // Adicionando 5 capítulos com base na data atual
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


var nome = 'Knight of the Frozen Flower'; //nome do manga/manhaw
var tipo = 'manhaw' // é manga ou manhaw
var caminho = '../../../imgs/Knight of the Frozen Flower.jpg'; //caminho da imagem
var autor_da_obra = 'Jin Juha Towawa';
var artista_da_obra = 'Towawa';
var estatus_obra = 'Ativo';

var sinopese_da_obra = 'Julia, que possuía grande esgrima, foi morta depois de ser usada pelo homem que amava. Seu único crime foi ter vivido uma vida com cara feia por causa de uma maldição Logo antes de sua morte, ela testemunhou sua maldição se dissipando antes de retornar ao passado.Agora, ela jurou viver sua vida por si mesma.';

let generos_link = `
<a class="genero" href="http://">Ação</a>
<a class="genero" href="http://">Aventura</a>
<a class="genero" href="http://">Drama</a>
<a class="genero" href="http://">Fantasia</a>
<a class="genero" href="http://">Histórico</a>
<a class="genero" href="http://">Psicológico</a>
<a class="genero" href="http://">Romance</a>
<a class="genero" href="http://">Shoujo</a>
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

