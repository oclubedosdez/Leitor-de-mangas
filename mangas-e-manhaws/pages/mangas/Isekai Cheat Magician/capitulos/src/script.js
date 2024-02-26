let select_element = [];

var inicia = 0;

var nome_manga = 'Isekai Cheat Magician'

const select_custom = document.getElementById('selectOptions');

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = nome_manga;

const mangaEncontrado = mangas_e_manhwas.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());

if (mangaEncontrado) {
    const numCapitulos = mangaEncontrado.num_capitulos;
    const textoCap = mangaEncontrado.text_cap;

    for (let i = inicia; i <= numCapitulos; i++) {
        select_element.push(`<div class='option' data-value='${i}'>capitulo ${i < 10 ? '0' : ''}${i}</div>`);
    }

} else {
    console.log(`Manga não encontrado.`);
}

select_custom.innerHTML = select_element.join('');




var modo_escuro = document.querySelector('.modo-claro');
var botao = document.querySelector('.modo-claro')
var cabecalho = document.querySelector('.titulo2')
var navbar = document.querySelector('.navbar')

// Adicione esta linha para verificar o estado do modo escuro no localStorage
if (localStorage.getItem('modoEscuro') === 'ativo') {
    document.body.classList.add('modo_black');
    botao.innerHTML = 'Modo claro';
}

modo_escuro.addEventListener('click', function () {
    // Alternar entre o modo claro e escuro
    document.body.classList.toggle('modo_black');

    // Atualizar o localStorage com o estado atual do modo escuro
    if (document.body.classList.contains('modo_black')) {
        localStorage.setItem('modoEscuro', 'ativo');
        botao.innerHTML = 'Modo claro';
    } else {
        localStorage.setItem('modoEscuro', 'inativo');
        botao.innerHTML = 'Modo escuro';

        // Adicionar/remover outras classes ou estilos conforme necessário
        cabecalho.classList.remove('modo_escuro');
        botao.classList.remove('botao_escuro');
        document.getElementById('logo').style.border = '2px solid white';
    }
});


var titulo1 = document.querySelector('.titulo1');
var titulo2 = document.querySelector('.titulo2');
var nome = document.getElementById('nome_manga');



var caminho = 'https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/I/Isekai%20Cheat%20Magician/capitulo-'

var num_imgs = 80;







if ('scrollBehavior' in document.documentElement.style === false) {
    import('smoothscroll-polyfill').then(module => {
        module.polyfill();
    });
}






/*===============================================REDERIZA OS CAPITULOS DA PAGINA===================================================*/




var capitulo = Number(localStorage.getItem('ValorCapitulo'))


const mangaImages = [];
let currentImageIndex = 0;

const figura = document.createElement('img');








const mangaImage = document.getElementById("manga-image");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const pageSelect = document.getElementById("page-select");
const pageInfo = document.getElementById("page-info");
var botao_proximo_capitulo = document.querySelectorAll(".botao-avancar-capitulo")
var botao_voltar_capitulo = document.querySelectorAll(".botao-capitulo-anterior")
const botoes_de_baixo = document.querySelector(".botões-de-baixo")
const capitulo_selecionado = document.getElementById('cap_selecionado')



var capitulo_fra = Math.trunc(capitulo)//caso o numero do capitulo seja fracionado;



titulo1.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
nome.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`






// console.log(select_element);


botoes_de_baixo.classList.add('none')




const container = document.getElementById('manga-container');
const pageAberta = document.querySelector('.selecao-de-paginas');
const seletorCapitulos = document.querySelector('.seletor-de-capitulos');





var diretorio = `${caminho}${capitulo < 10 ? "0" : ""}${localStorage.getItem("ValorCapitulo")}`;




botoes_de_baixo.classList.remove('none')



   
var imagensCarregadas = [];
var imagensComErro = 0;

// Adicione a classe 'no-scroll' ao corpo para desativar o scroll
document.body.classList.add('no-scroll');
container.classList.add('visibilidade')

for (let i = 0; i <= num_imgs; i++) {
    let img_manga = { 'id': i };

    let manga_page = document.createElement('img');
    manga_page.classList.add('page_cap');

    manga_page.src = `${diretorio}/imgs/${img_manga.id}.jpg`;
    manga_page.alt = '';

    manga_page.onload = function () {
        // A função será chamada se a imagem for carregada corretamente
        imagensCarregadas.push(img_manga);
        checkCarregamentoCompleto();
        window.scrollTo(0, 0);
    };

    manga_page.onerror = function () {
        // A função será chamada se a imagem não for carregada corretamente
        // console.log(`A imagem ${img_manga.id} não foi carregada corretamente.`);
        manga_page.classList.add('img_erro'); // Adiciona a classe 'img_erro'
        imagensComErro++;

        checkCarregamentoCompleto();
        window.scrollTo(0, 0);
    };

    container.appendChild(manga_page);
}

function checkCarregamentoCompleto() {
    // Verifica se todas as imagens foram processadas (carregadas ou com erro)
    if (imagensCarregadas.length + imagensComErro === num_imgs) {
        // console.log(`Número de imagens com erro: ${imagensComErro}`);
        // Remova a classe 'no-scroll' do corpo para reativar o scroll
        window.scrollTo(0, 0);
        document.body.classList.remove('no-scroll');
        container.classList.remove('visibilidade')
    }
}














/*============================================= SELELECT CUSTOMIZADO E BOTOES DE IR E VOLTAR =======================================================*/
const selectOptions = document.getElementById('selectOptions');

function incializarselect() {
    const selectHeader = document.getElementById('selectHeader');
    const selectOptions = document.getElementById('selectOptions');
    const options = document.querySelectorAll('.option');

    // Função para adicionar a classe 'selected' e armazenar no localStorage
    function selectOption(option) {
        selectHeader.textContent = option.textContent;
        selectOptions.style.display = 'none';

        options.forEach(function (otherOption) {
            otherOption.classList.remove('selected');
        });

        option.classList.add('selected');

        const valorSelecionado = option.getAttribute('data-value');
        localStorage.setItem('ValorCapitulo', valorSelecionado);
    }



    selectHeader.onclick = function () {
        selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
    }


    options.forEach(function (option) {
        option.addEventListener('click', function () {
            selectOption(option);
            window.location.reload(false);
        });
    });



    // console.log(`O valor armazenado é ${localStorage.getItem('ValorCapitulo')}`);

    // Ao carregar a página, aplicar a classe 'selected' se existir um valor armazenado
    const valorArmazenado = localStorage.getItem('ValorCapitulo');
    if (valorArmazenado) {
        const selectedOption = document.querySelector(`.option[data-value="${valorArmazenado}"]`);
        if (selectedOption) {
            selectOption(selectedOption);
        }
    }
}


incializarselect()




document.addEventListener('click', function (event) {
    const isClickInside = selectHeader.contains(event.target) || selectOptions.contains(event.target);
    if (!isClickInside) {
        selectOptions.style.display = 'none';
    }
});





/*Botões*/
botao_proximo_capitulo.forEach((avancar_capitulo) => {
    avancar_capitulo.onclick = function () {
        capitulo++;

        titulo1.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
        nome.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`

        localStorage.setItem('ValorCapitulo', capitulo)
        window.location.reload(false);
        window.scrollTo(0, 0);
    }
    if(capitulo_fra == select_element.length - 1) {
        avancar_capitulo.style.display = 'none'
    }

});



botao_voltar_capitulo.forEach((capitulo_anterior) => {
    capitulo_anterior.onclick = function () {
        capitulo--;

        titulo1.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
        nome.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`

        localStorage.setItem('ValorCapitulo', capitulo)
        window.location.reload(false);
        window.scrollTo(0, 0);
    }
    if(capitulo_fra === inicia) {
        capitulo_anterior.style.display = 'none'
    }
});


// function pararCarregamento() {
//     // Aguarda 5 segundos (5000 milissegundos) e depois cancela o carregamento
//     setTimeout(function() {
//       // Cancela o carregamento
//       window.stop(); // Para navegadores modernos
//       document.execCommand("Stop"); // Para navegadores mais antigos
//     }, 5000); // 5000 milissegundos = 5 segundos
//   }
  
//   // Chama a função para parar o carregamento após 5 segundos
//   pararCarregamento();
  






