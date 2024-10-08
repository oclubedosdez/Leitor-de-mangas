/*==================================LER FAVORITOS================================================*/
var botao_favoritos = document.querySelector('#ler_favoritos')
var estadoAtual = localStorage.getItem('ModoFavoritos'); // Obtém o estado atual do localStorage
var modo_favoritos = document.querySelectorAll('.modo_favoritos');
var capitulos_gostei = JSON.parse(localStorage.getItem('gostei'));
var divs_option = document.querySelectorAll('.option');



// Define a função a ser executada quando o botão for clicado
botao_favoritos.onclick = function() {
    // Verifica o estado atual e altera para o oposto
    if (estadoAtual === 'ativo') {
        localStorage.setItem('ModoFavoritos', 'inativo');
        window.location.reload(true)
        localStorage.setItem('ValorCapitulo', mangaEncontrado.CapituloInicia);
        estadoAtual = 'inativo'; // Atualiza o estado atual para 'inativo'
    } else {
        localStorage.setItem('ModoFavoritos', 'ativo');
        estadoAtual = 'ativo'; // Atualiza o estado atual para 'ativo'
        window.location.reload(true)
        localStorage.setItem('ValorCapitulo', capitulos_gostei[0]); //inciar com o primeiro capitulo que gostou
        localStorage.setItem('contador', 0); //inciar o contador com base nos capitulos favoritos

        
    }

    
    modo_favoritos.forEach((favoritos) => {
        if (localStorage.getItem('ModoFavoritos') === 'ativo') {
            favoritos.classList.add('favorito')
        } else if (localStorage.getItem('ModoFavoritos') === 'inativo') {
            favoritos.classList.remove('favorito')
        }
    })

    
};

// Aqui você pode adicionar qualquer outra ação que deseja executar ao clicar no botão
modo_favoritos.forEach((favoritos) => {
    if (localStorage.getItem('ModoFavoritos') === 'ativo') {
        favoritos.classList.add('favorito')
    } else if (localStorage.getItem('ModoFavoritos') === 'inativo') {
        favoritos.classList.remove('favorito')
    }
})



if (localStorage.getItem('ModoFavoritos') === 'ativo') {
    // Seleciona todos os elementos <div> com a classe "option"
var divsOption = document.querySelectorAll('div.option');

// Percorre os elementos e verifica se cada um tem a classe "favorito"
divsOption.forEach(function(div) {
    if (!div.classList.contains('favorito')) {
        // Se não tiver a classe "favorito", remove o elemento
        div.remove();
    }
});
}



/*MODO ESCURO*/

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




var caminho_pasta = mangaEncontrado.pasta;


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





var diretorio = `${caminho_pasta}${capitulo < 10 ? "0" : ""}${localStorage.getItem("ValorCapitulo")}`;




botoes_de_baixo.classList.remove('none')



   
var imagensCarregadas = [];
var imagensComErro = 0;

// Adicione a classe 'no-scroll' ao corpo para desativar o scroll
document.body.classList.add('no-scroll');
container.classList.add('visibilidade')



MudarCaminhoPorNome()










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





document.addEventListener('click', function (event) {
    const isClickInside = selectHeader.contains(event.target) || selectOptions.contains(event.target);
    if (!isClickInside) {
        selectOptions.style.display = 'none';
    }
});





/*Botões*/






if(localStorage.getItem('ModoFavoritos') === 'inativo') {
    botao_proximo_capitulo.forEach((avancar_capitulo) => {
        avancar_capitulo.onclick = function () {
            capitulo++;
            titulo1.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
            nome.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
    
            localStorage.setItem('ValorCapitulo', capitulo)
            window.location.reload(false);
            window.scrollTo(0, 0);
        }
        if(capitulo == select_element.length) {
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
        if(capitulo_fra === mangaEncontrado.CapituloInicia) {
            capitulo_anterior.style.display = 'none'
        }
    });
}




var contado = Number(localStorage.getItem('contador'))

if(localStorage.getItem('ModoFavoritos') === 'ativo') {
    

    botao_proximo_capitulo.forEach((avancar_capitulo) => {
        avancar_capitulo.onclick = function () {
            contado++;
            localStorage.setItem('contador', contado);

            titulo1.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
            nome.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
    
            localStorage.setItem('ValorCapitulo', capitulos_gostei[contado])
            window.location.reload(true);
            window.scrollTo(0, 0);
        }
        if(capitulo == select_element.length) {
            avancar_capitulo.style.display = 'none'
        }
    
    });
    
    
    
    botao_voltar_capitulo.forEach((capitulo_anterior) => {
        capitulo_anterior.onclick = function () {
            contado--;
            localStorage.setItem('contador', contado);
    
            titulo1.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
            nome.innerHTML = `${nome_manga} - Cap.${capitulo < 10 ? "0" : ""}${capitulo}`
    
            localStorage.setItem('ValorCapitulo', capitulos_gostei[contado])
            window.location.reload(false);
            window.scrollTo(0, 0);
        }
        if(capitulo_fra === capitulos_gostei[0]) {
            capitulo_anterior.style.display = 'none'
        }
    });
}



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
  






