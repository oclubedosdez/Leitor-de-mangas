var box3 = document.querySelector(".box3")

let capitulos = [
    {
        "id": "01",
        "data" : "outubro 11, 2023"
    },
    {
        "id": "02",
        "data" : "outubro 6, 2023"
    },
    {
        "id": "03",
        "data" : "outubro 1, 2023"
    },
    {
        "id": "04",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "05",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "06",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "06.5",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "07",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "08",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "09",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "10",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "11",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "12",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "12.5",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "13",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "14",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "15",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "15.5",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "16",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "17",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "18",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "18.5",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "19",
        "data" : "outubro 13, 2023"
    },
    {
        "id": "20",
        "data" : "outubro 16, 2023"
    },
    {
        "id": "21",
        "data" : "outubro 16, 2023"
    },
    {
        "id": "22",
        "data" : "outubro 16, 2023"
    },
    {
        "id": "23",
        "data" : "outubro 16, 2023"
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

