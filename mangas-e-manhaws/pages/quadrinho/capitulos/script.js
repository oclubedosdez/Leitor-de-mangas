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

for (let i = 0; i <= num_imgs; i++) {
    let img_manga = { 'id': i };

    let manga_page = document.createElement('img');
    manga_page.classList.add('page_cap');

    manga_page.src = `${diretorio}/imgs/${img_manga.id}.jpg`;
   

    if (nome_manga == 'Isekai Kenkokuki') {
        if (capitulo == 58 || capitulo == 59) {
            manga_page.src = `${diretorio}/imgs/${i < 10 ? 0 : ''}${img_manga.id}.jpg`;
        }
    }


    //Contos de Demônios e Deuses
    if(nome_manga == 'Contos de Demônios e Deuses') {
        var capitulosmudados = [];
        for(let i = 270; i <= 500; i++) {
            capitulosmudados.push(i)
        }
        console.log(capitulosmudados)

        // Verificando se o número está no array
          if (capitulosmudados.includes(capitulo)) {
              //O número está presente no array
              manga_page.src = `${diretorio}/${img_manga.id}.jpg`;
         } else {
               //O número não está presente no array
         }
    }
    //Contos de Demônios e Deuses

    if (nome_manga == 'Minha esposa é de mil anos atrás') {
       manga_page.src = `${diretorio}/imgs/${i < 10 ? 0 : ''}${img_manga.id}.jpg`;
    }

    if (nome_manga == 'Eu tive um filho do tirano') {
        if (capitulo == 1) {
            var num_imgs = 141;
        }
    }

    if (nome_manga == 'De Tantas Coisas, Me Tornei um Corvo') {
        if (capitulo < 88) {
            manga_page.src = `${diretorio}/imgs/${i < 10 ? 0 : ''}${img_manga.id}.jpg`;
        }
    }

    if (nome_manga == 'Knight of the Frozen Flower') {
        if (capitulo < 52) {
            manga_page.src = `${diretorio}/imgs/${i < 10 ? 0 : ''}${img_manga.id}.jpg`;
        }
    }

    if (nome_manga == 'um garoto na escola feminina') {
        num_imgs = 30;
    }


    if (nome_manga == 'My Amazing Wechat') {

        if (capitulo < 100) {
            manga_page.src = `${diretorio}/${i < 10 ? 0 : ''}${img_manga.id}.jpg`;
        } else {
            manga_page.src = `${diretorio}/${img_manga.id}.jpg`;
        }
    }

    if (nome_manga == 'Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi') {

        if (capitulo == 1) {
            num_imgs = 81;
        }
    }


    if (nome_manga == 'A Returner’s Magic Should be Special') {

        document.querySelector('#manga-container').style.width = '50%'
        num_imgs = 95;

        if (capitulo == 1) {
            num_imgs = 143;
        }
        if (capitulo == 2) {
            num_imgs = 88;
        }
        if (capitulo > 3) {
            num_imgs = 98;
        }
        if (capitulo > 10) {
            num_imgs = 63;
        }
    }

    

    if (nome_manga == 'The Duchess with an Empty Soul') {
        if (capitulo == 3 || capitulo == 2) {
            num_imgs = 87;
            document.querySelector('#manga-container').style.width = '48%'
        }
    }

    if (nome_manga == 'Goshujin-sama To Yuku Isekai Survival') {
        if (capitulo == 17) {
            manga_page.src = `${diretorio} /imgs/${img_manga.id}.webp`;
        }
    }

    if (nome_manga == 'Bannou “Murazukuri” Cheat de Otegaru Slow Life ~Mura desu ga Nani ka?~') {

        document.querySelector('#manga-container').style.width = '70%'
    }

  

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

for (let i = 0; i <= num_imgs; i++) {
    let img_manga = { 'id': i };

    let manga_page = document.createElement('img');
    manga_page.classList.add('page_cap');

    manga_page.src = `${diretorio}/imgs/${img_manga.id}.webp`;

    manga_page.alt = '';


     //Contos de Demônios e Deuses
     if(nome_manga == 'Contos de Demônios e Deuses') {
        var capitulosmudados = [171];

        // Verificando se o número está no array
          if (capitulosmudados.includes(capitulo)) {
              //O número está presente no array
              manga_page.src = `${diretorio}/imgs/${i < 10 ? 0 : ''}${img_manga.id}.jpg`;
         } else {
               //O número não está presente no array
         }
         if(capitulo >= 271) {
            manga_page.src = `${diretorio}/${img_manga.id}.webp`;
         }
    }
    //Contos de Demônios e Deuses

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

for (let i = 0; i <= num_imgs; i++) {
    let img_manga = { 'id': i };

    let manga_page = document.createElement('img');
    manga_page.classList.add('page_cap');

    manga_page.src = `${diretorio}/imgs/${img_manga.id}.png`;

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
  






