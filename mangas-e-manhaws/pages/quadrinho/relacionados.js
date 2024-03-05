/*COLOCAR MANGA RELACIONADOS*/
var nomeDoManga = localStorage.getItem('NomeDoManga');

/*INICIAR O ARRAY COM OS NOMES DOS MANGAS RELACIONADOS E ARMAZENAR NO LOCALSTORAGE*/
let carousel_mangas_items = [
    { "nome": "Isekai Cheat Magician" },
    { "nome": "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken" },
    { "nome": "Isekai De Tochi O Katte Noujou O Tsukurou" },
    { "nome": "Estou Tentando Me Divorciar do Meu Esposo Vilão, Mas Teremos Um Filho" },
    { "nome": "Salvos A Monster Evolution LitRPG" },
    { "nome": "Musume ja Nakute Mama ga Suki nano" },
    { "nome": "Saint Seiya Meiou Iden Dark Wing" },
    { "nome": "Congelamento Global" },
    { "nome": "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru" },
];

localStorage.setItem('MangasRelacionados', JSON.stringify(carousel_mangas_items));

/*ADICONA MANGAS RELACIONADOS COM BASE NO NOME DO MANGA ATUAL*/

if (nomeDoManga == "Isekai Kenkokuki") {
    let carousel_mangas_items = [
        { "nome": "Isekai De Tochi O Katte Noujou O Tsukurou" },
        { "nome": "Estou Tentando Me Divorciar do Meu Esposo Vilão, Mas Teremos Um Filho" },
        { "nome": "Salvos A Monster Evolution LitRPG" },
        { "nome": "Musume ja Nakute Mama ga Suki nano" },
        { "nome": "Saint Seiya Meiou Iden Dark Wing" },
        { "nome": "Congelamento Global" },
        { "nome": "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru" },
    ];
    localStorage.setItem('MangasRelacionados', JSON.stringify(carousel_mangas_items));

} 
else if (nomeDoManga == "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken") {
    let carousel_mangas_items = [
        { "nome": "Isekai Cheat Magician" },
        { "nome": "Isekai De Tochi O Katte Noujou O Tsukurou" },
        { "nome": "Estou Tentando Me Divorciar do Meu Esposo Vilão, Mas Teremos Um Filho" },
        { "nome": "Salvos A Monster Evolution LitRPG" },
        { "nome": "Musume ja Nakute Mama ga Suki nano" },
        { "nome": "Saint Seiya Meiou Iden Dark Wing" },
        { "nome": "Congelamento Global" },
        { "nome": "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru" },
    ];
    localStorage.setItem('MangasRelacionados', JSON.stringify(carousel_mangas_items));
} 
else if (nomeDoManga == "Saint Seiya Meiou Iden Dark Wing") {
    let carousel_mangas_items = [
        { "nome": "Isekai Cheat Magician" },
        { "nome": "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken" },
        { "nome": "Isekai De Tochi O Katte Noujou O Tsukurou" },
        { "nome": "Estou Tentando Me Divorciar do Meu Esposo Vilão, Mas Teremos Um Filho" },
        { "nome": "Salvos A Monster Evolution LitRPG" },
        { "nome": "Musume ja Nakute Mama ga Suki nano" },
        { "nome": "Congelamento Global" },
        { "nome": "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru" },
    ];
    
    localStorage.setItem('MangasRelacionados', JSON.stringify(carousel_mangas_items));
}