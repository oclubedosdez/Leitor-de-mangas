const carrocel = document.querySelector('.carousel-inner')

for (let i = 0; i < mangas_e_manhaws.length; i++) {
    let mangas = `<h1>${i} ${mangas_e_manhaws[i].nome}</h1>`
    // console.log(mangas)
}

let lista_items = [];

lista_items.push({"active" : "active", "nome": mangas_e_manhaws[39].nome, "img": mangas_e_manhaws[39].img });

lista_items.push({ "active" : "", "nome": mangas_e_manhaws[38].nome, "img": mangas_e_manhaws[38].img });

console.log(lista_items)

lista_items.forEach((item) => {
    let carrocel_items = `<div href="#mainSlider" class="carousel-item ${item.active}">
<img class="carousel-img" src="./mangas-e-manhaws/imgs/${item.img}" alt="">

<img class="carousel-banner" src="./mangas-e-manhaws/imgs/${item.img}" alt="">

  <div class="carousel-caption">
    <h1>Capitulo: 70</h1>
    <h1>${item.nome}</h1>
    <h2>Elisha é casada com um homem abusivo que ela acredita ser o diabo. Ela fica grávida dele e tenta fugir, mas ele a captura e a ameaça de morte. Mas ela ainda não encontrou uma maneira de escapar.</h2>
    <div class="generos">
      <a href="">Drama</a>
      <a href="">Fantasia</a>
      <a href="">Josei</a>
      <a href="">Romance</a>
    </div>
    <a class="botao-manga" href="">
      <span>Ler agora</span>
      <img src="./src/img/book.png" alt="">
    </a>
  </div>

</div>`;
console.log(carrocel_items)
})

