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
const alternativo = document.getElementById('Alternativa')


var nome = 'A Proprietária Bebê Está se Aposentando'; //nome do manga/manhaw

var nome_alternativo = `
<span class='nome_alt'>The Baby Land Lord Is Retiring</span>
<span class='nome_alt'>The Land Lord's Is Retiring</span>
<span class='nome_alt'>The Little Landlady</span>
<span class='nome_alt'>아기 건물주는 이만 은퇴합니다</span>
`

var tipo = 'manhaw' // é manga ou manhaw
var caminho = '../../../imgs/A Proprietária Bebê Está se Aposentando.jpg'; //caminho da imagem
var autor_da_obra = '<span>Autor: </span> <p>Sambaeghwa</p>';
var artista_da_obra = '<span>Artista: </span> <p>Pilmyeong</p>';
var estatus_obra = '<span>Status: </span> <p>Ativo</p>';

var sinopese_da_obra = '<strong>Sinopse:</strong>Em sua terceira vida, ela renasceu como a única filha de um vilão que não tinha nenhum sentimento. As pessoas viviam em uma casa a beira do colapso, então ela projetou um edifício usando os seus conhecimentos da sua vida passada. No entanto, seu pai a pegou e- "Nós aprovamos uma lei que os donos da construção o darão a pessoas que organizou a construção dela." Ela se tornou dona de um grande edifício. Vamos arrecadar uns fundos reservas e se aposentar! "A senhorita me impede de passar fome!" "Eu consigo dormir em uma casa aconchegante graças à vossa senhorita!" "Todos os empregos para jovens aumentaram bruscamente!" O que eu faço? É algo tão impactante que todos tenham que me elogiar tanto? Para piorar as coisas, meu pai descobriu sobre o meu plano de fugir de casa... "O que fiz de errado? Eu irei consertar tudo, então não saía." "N-Não é isso..." "Eu irei dar a você tudo o que quiser. Ah, certo, o filho do imperador não o incomoda? Eu também posso cortar a cabeça do imperador, o que acha?" Então, como um raio caindo do céu, ele pensou em começar uma guerra. "Por que continuo tendo mais trabalho?" ...Eu posso me aposentar em paz?';

let generos_link = `
<a class="genero" href="http://">Fantasia</a>
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
alternativo.innerHTML += nome_alternativo;

