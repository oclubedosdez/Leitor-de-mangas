let select_element = [];


var nome_manga = localStorage.getItem('NomeDoManga');

const select_custom = document.getElementById('selectOptions');

// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeDoMangaBuscado = nome_manga;

const mangaEncontrado = mangas_e_manhwas.find(manga => manga.nome.toLowerCase() === nomeDoMangaBuscado.toLowerCase());

if (mangaEncontrado) {
    const numCapitulos = mangaEncontrado.num_capitulos;
    const textoCap = mangaEncontrado.text_cap;


    for (let i = mangaEncontrado.CapituloInicia; i <= numCapitulos; i++) {
        select_element.push(`<div class='option' data-value='${i}'>capitulo ${i < 10 ? '0' : ''}${i}</div>`);
    }




} else {
    console.log(`Manga não encontrado.`);
}

select_custom.innerHTML = select_element.join('');

// console.log(select_element)


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






//CAPITULOS FAVORITOS
if (nome_manga == 'um garoto na escola feminina') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [2, 6, 13, 14, 20, 21, 32, 44, 50, 61, 70, 71, 86, 90, 91, 92, 93, 94, 98, 99, 109, 110, 111, 112, 118, 121, 124, 125, 126, 127, 128, 170, 171, 172, 173, 174, 175, 188, 193, 194, 195, 196, 197, 205, 211, 235, 245, 273, 285, 320, 335, 336, 338, 341, 344, 351, 356];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}

if (nome_manga == 'Undead King ~Teihen Bouken-sha, Mamono no Chikara de Shinka Musou~') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [2, 4, 5, 7, 8, 10, 11, 14, 17, 25];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}

if (nome_manga == 'Uketsukejo ni Kokuhaku Shitakute Guild ni Kayoitsumetara Eiyu ni Natteta') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [1, 4, 6];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}

if (nome_manga == 'My Amazing Wechat') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [1, 3, 4, 5, 7, 8, 9, 11, 15, 18, 19, 22, 23, 24, 25, 26, 27, 29, 30, 32, 34, 35, 36, 37, 38
        , 48, 49, 51, 52, 55, 56, 58, 60, 65, 68, 74, 76, 79, 80, 81, 83, 85, 87, 90, 100, 101, 102, 104, 110, 113, 117, 121, 122, 123, 125, 126, 127, 129, 130, 132, 139, 144, 147, 155, 159, 161];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}

if (nome_manga == 'Mushroom Brave') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [2, 3, 4, 6, 14, 16, 24, 28, 31, 35, 38, 49, 50, 55];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}

if (nome_manga == 'My Daughter Is the Final Boss') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [2, 4, 12, 20, 21, 26, 32, 39, 43, 45, 47, 49, 60, 69, 79];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}

if (nome_manga == 'A-Rank Boukensha no Slow Life') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [2, 4, 6, 8, 21, 26, 32, 39, 43, 45, 47, 49, 60, 69, 79];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}

if (nome_manga == 'Maou ni Natta node, Dungeon Tsukutte Jingai Musume to Honobono suru') {
    // Array com os números dos capítulos que você deseja adicionar a classe "favorito"
    var capitulosFavoritos = [3, 6, 7, 8, 9, 10, 11, 15, 20, 26, 45, 47, 49, 52, 56, 57];


    localStorage.setItem('gostei', JSON.stringify(capitulosFavoritos));

    // Loop para adicionar a classe "favorito" aos capítulos desejados
    capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");

    });
}







