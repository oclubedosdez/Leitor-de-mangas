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

console.log(select_element)


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
     var capitulosFavoritos = [2, 13, 20, 21, 32, 44, 50, 61, 71, 86, 91, 92, 93, 109, 112, 118, 121, 124, 125, 128, 170, 171, 172, 174, 175, 188, 193, 194, 195, 196, 197, 205, 211, 235, 245];

     // Loop para adicionar a classe "favorito" aos capítulos desejados
     capitulosFavoritos.forEach((capitulo) => {
        document.querySelector(`[data-value='${capitulo}']`).classList.add("favorito");
     });
}
