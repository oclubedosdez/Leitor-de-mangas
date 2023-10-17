var box3 = document.querySelector(".box3")

let capitulos = [
    {"id" : "01"},
    {"id" : "02"},
    {"id" : "03"},
    {"id" : "04"},
    {"id" : "05"},
    {"id" : "05.5"},
];

capitulos.forEach((banner) => {
    let banner_element = `
    <a class="capitulo" href="./capitulos/${banner.id}.html">
            <img class="img-fluid w-25" src="https://github.com/oclubedosdez.png" alt="">
            <h1>Capitulo ${banner.id}</h1> 
        </a>
    `;
    box3.innerHTML += banner_element;
})

