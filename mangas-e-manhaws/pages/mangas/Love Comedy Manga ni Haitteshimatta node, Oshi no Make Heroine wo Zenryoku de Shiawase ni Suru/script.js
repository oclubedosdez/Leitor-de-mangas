var box3 = document.querySelector(".box3")

let capitulos = [
    {
        "id": "01",
        "data" : "outubro 12, 2023"
    },
    {
        "id": "02.1",
        "data" : "outubro 12, 2023"
    },
    {
        "id": "02.3",
        "data" : "outubro 12, 2023"
    },
];

capitulos.forEach((banner) => {
    let banner_element = `
    <a class="capitulo" href="./capitulos/${banner.id}.html">
            <img class="img-fluid w-25" src="https://github.com/oclubedosdez.png" alt="">
            <div class="titulo_data">
            <h1>Capitulo ${banner.id}</h1>
            <h3>${banner.data}</h3> 
            </div>
        </a>
    `;
    box3.innerHTML += banner_element;
})

