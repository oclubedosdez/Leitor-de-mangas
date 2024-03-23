let Mangas = document.querySelector(".container_mangas")


mangas_e_manhwas.forEach((banner) => {
    let banner_element = `
    <div class="box letra-${banner.id} ${banner.key}">
          <span class="${banner.tipo}"></span>

          <span class="${banner.estado} ${banner.novo_capitulo}">${banner.estado == "completo" || banner.novo_capitulo == "" ? "" : `Novo:${banner.num_capitulos}`}</span>

          <div class="imagem">
        <a href="./pages/quadrinho/index.html">
          <img class="img"
             src="${banner["caminho-img"]}">
       </a>
          </div>
          <p title="${banner.nome}" class="nome">${banner.nome}</p>
        </div>
    `;
    Mangas.innerHTML += banner_element;
});

/*busca mangas por nome*/

const filterElement = document.querySelector('header input')
const mangas = document.querySelectorAll('.container_mangas .box')


filterElement.addEventListener('input', filterCards)

function filterCards() {
    if (filterElement.value != '') {
        for (let manga of mangas) {
            let title = manga.querySelector('.nome')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()

            if (!title.includes(filterText)) {
                manga.style.display = "none"
            } else {
                manga.style.display = "flex"


            }
        }
    } else {
        for (let manga of mangas) {
            window.location.reload(true);
            manga.style.display = "flex"
        }

    }
}


var manga_selecionado = document.querySelectorAll(".box")

manga_selecionado.forEach((manga) => {
    manga.onclick = function() {
        const pegar_manga = manga.querySelector('.nome').innerText;
        console.log(pegar_manga)
        
        localStorage.setItem('NomeDoManga', pegar_manga);
    }
})


