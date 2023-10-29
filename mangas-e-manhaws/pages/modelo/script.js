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
for (let i = 1; i <= 20; i++) { // Adicionando 5 capítulos com base na data atual
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
//////////////////////////////////////////////////////////////
const generos = document.querySelector('.generos')
const autor = document.getElementById('autor')
const artista = document.getElementById('artista')
const estatus = document.getElementById('estatus')
const sinopse = document.getElementById('sinopse')


var nome = 'My Childhood Friend Became an Obsessive Male Lead'; //nome do manga/manhaw
var tipo = 'manhaw' // é manga ou manhaw
var caminho = 'https://img.mangaschan.com/uploads/manga-images/m/my-childhood-friend-became-an-obsessive-male-lead/thumbnail.jpg'; //caminho da imagem
var autor_da_obra = '<span>Autor: </span> <p>Yoon-Dal</p>';
var artista_da_obra = '<span>Artista: </span> <p>Yoon-Dal</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<strong>Sinopse:</strong>Ela foi vendida a um duque monstro com problemas na parte inferior do corpo. Mas só há uma maneira de não ser oferecido à nobreza é ser uma mulher casada. Por um momento, Isabel lembrou-se do seu amigo de infância Ricks, que não tinha interesse no amor. “Então Ricks, casa comigo. “Se eu me tornar uma mulher casada, o outro lado vai me rejeitar” “… Porque é que odeias tanto o Duke Cardiego? “ “Outras coisas estão bem. Mas ele é um tirano? Se viver uma vida dura é bom. Mas se fizer algo errado, será morto? Mesmo isso tem problema é inaceitável” Ricks ficou chateado e ficou louco. *** Alguns dias depois, Duque Cardiego, um homem que vivia em reclusão, chegou ao templo. Claro que o mais surpreendente é que a Isabel aprendeu o corpo da sua amiga de infância.';

let generos_link = `
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

