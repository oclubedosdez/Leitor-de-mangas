let Mangas = document.querySelector(".container")


let mangas_e_manhaws = [
    {
        "id": "F",
        "nome": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)",
        "img": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!).jpg",
        "tipo": "manhaw",
        "status": "completo",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Fantasia, Histórico, Josei, Romance, Shoujo, Sobrenatural",
        "pasta": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)"
    },
    {
        "id": "H",
        "nome": "Hougong Tai Duo, Zhihao Feishengle - My Harem Grew So Large, I Was Forced to Ascend",
        "img": "Hougong Tai Duo, Zhihao Feishengle - My Harem Grew So Large, I Was Forced to Ascend.jpg",
        "tipo": "manhaw",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Artes Marciais Aventura Fantasia Harem Isekai Romance Webtoon acao"
    },
    {
        "id": "I",
        "nome": "Isekai Cheat Magician",
        "img": "Isekai Cheat Magician.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Aventura acao Fantasia Isekai Romance Shounen"
    },
    {
        "id": "J",
        "nome": "Jangleuleul Bakkwobodolog Hagessseubnida - It's Time to Change the Genre",
        "img": "Jangleuleul Bakkwobodolog Hagessseubnida - It's Time to Change the Genre.jpg",
        "tipo": "manhaw",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "acao Drama Fantasia Isekai Manhwa Shoujo Webtoon"
    },
    {
        "id": "R",
        "nome": "Rebirth of the Divine Doctor",
        "img": "Rebirth of the Divine Doctor.jpg",
        "tipo": "manhaw",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "estatus": "ativo",
        "genero": "acao Artes Marciais Aventura Comédia Fantasia Histórico Isekai Manhua Medicina Reencarnação"
    },
    {
        "id": "T",
        "nome": "Taming the Lady",
        "img": "Taming the Lady.jpg",
        "tipo": "manhaw",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "estatus": "ativo",
        "genero": "acao Fantasia Isekai Manhwa Shoujo Webtoon"
    },
    {
        "id": "T",
        "nome": "The Lady Wants to Rest",
        "img": "The Lady Wants to Rest.jpg",
        "tipo": "manhaw",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Isekai Manhwa Romance Shoujo Webtoon"
    },
    {
        "id": "W",
        "nome": "Wo Shi Yì Shijie Zui Qiang Lingzhu - I Am the Strongest Lord in Another World",
        "img": "Wo Shi Yì Shijie Zui Qiang Lingzhu - I Am the Strongest Lord in Another World.jpg",
        "tipo": "manhaw",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "B",
        "nome": "Bokutachi wa Hanshoku wo Yameta",
        "img": "Bokutachi wa Hanshoku wo Yameta.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "T",
        "nome": "Tensei shitara Slime Datta Ken Mamono no Kuni no Arukikata",
        "img": "Tensei shitara Slime Datta Ken Mamono no Kuni no Arukikata.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "T",
        "nome": "Tensei Shitara Ore ga Heroine de Aitsu ga Yuusha Datta",
        "img": "Tensei Shitara Ore ga Heroine de Aitsu ga Yuusha Datta.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "N",
        "nome": "Nihon e Youkoso Elf-san (Welcome to Japan, Elf-san)",
        "img": "Nihon e Youkoso Elf-san (Welcome to Japan, Elf-san).jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "S",
        "nome": "Sensei Wa Koi Wo Oshie Rarenai",
        "img": "Sensei Wa Koi Wo Oshie Rarenai.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "L",
        "nome": "Lv2 kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
        "img": "Lv2 kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "O",
        "nome": "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
        "img": "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "K",
        "nome": "Kuro no Shoukanshi",
        "img": "Kuro no Shoukanshi.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "L",
        "nome": "Love Comedy Manga ni Haitteshimatta node, Oshi no Make Heroine wo Zenryoku de Shiawase ni Suru",
        "img": "Love Comedy Manga ni Haitteshimatta node, Oshi no Make Heroine wo Zenryoku de Shiawase ni Suru.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Love Comedy Manga ni Haitteshimatta node, Oshi no Make Heroine wo Zenryoku de Shiawase ni Suru"
    },
    {
        "id": "I",
        "nome": "Isekai De Tochi O Katte Noujou O Tsukurou",
        "img": "Isekai De Tochi O Katte Noujou O Tsukurou.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Isekai De Tochi O Katte Noujou O Tsukurou"
    },
    {
        "id": "M",
        "nome": "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?",
        "img": "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii.jpg",
        "tipo": "manga",
        "pasta": "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "I",
        "nome": "Isekai Kenkokuki",
        "img": "Isekai Kenkokuki.jpg",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "R",
        "nome": "Release That Witch",
        "img": "Release That Witch.jpg",
        "tipo": "manhaw",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": ""
    },
    {
        "id": "S",
        "nome": "Survive On A Deserted Island With Beautiful Girls",
        "img": "Survive On A Deserted Island With Beautiful Girls.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Survive On A Deserted Island With Beautiful Girls"
    },
    {
        "id": "S",
        "nome": "Fate/stay night",
        "img": "Fate stay night-14.jpg",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Fate stay night"
    },
    {
        "id": "I",
        "nome": "Isekai Yurutto Survival Seikatsu: Gakkou no Minna to Isekai no Mujintou ni Tenishitakedo Ore Dake Rakushou desu",
        "img": "Isekai Yurutto Survival Seikatsu Gakkou no Minna to Isekai no Mujintou ni Tenishitakedo Ore Dake Rakushou desu.jpg",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Isekai Yurutto Survival Seikatsu Gakkou no Minna to Isekai no Mujintou ni Tenishitakedo Ore Dake Rakushou desu"
    },
    {
        "id": "M",
        "nome": "Martial God Asura",
        "img": "Martial God Asura.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Artes Marciais Aventura Ação Harem Romance Seinen Sobrenatural",
        "pasta": "Martial God Asura"
    },
    {
        "id": "M",
        "nome": "Tales of Demons and Gods",
        "img": "Tales of Demons and Gods.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Artes_Marciais Aventura Ação Fantasia Isekai Romance Seinen",
        "pasta": "Tales of Demons and Gods"
    },
    {
        "id": "M",
        "nome": "My Amazing Wechat",
        "img": "My Amazing Wechat.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Aventura, Ação, Ecchi, Escolar, Fantasia, Manhua, Shounen, Slice of Life, Webtoon",
        "pasta": "My Amazing Wechat"
    },
    {
        "id": "M",
        "nome": "My Villainous Master Brings Along the Peerless Apprentices",
        "img": "My Villainous Master Brings Along the Peerless Apprentices.webp",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Ação Artes Marciais Drama Fantasia Shounen",
        "pasta": "My Villainous Master Brings Along the Peerless Apprentices"
    },
    {
        "id": "E",
        "nome": "Eu tive um filho do tirano",
        "img": "Eu tive um filho do tirano.jpg",
        "tipo": "manhaw",
        "status": "completo",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Drama fantasia Josei Romance",
        "pasta": "Eu tive um filho do tirano"
    },
    {
        "id": "B",
        "nome": "Bloody Kiss (Yagami Rina)",
        "img": "Bloody Kiss (Yagami Rina).jpg",
        "tipo": "manga",
        "status": "completo",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Romance Shoujo Sobrenatural",
        "pasta": "Bloody Kiss (Yagami Rina)"
    },
    {
        "id": "B",
        "nome": "Bloody Kiss",
        "img": "Bloody Kiss.jpg",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Romance Shoujo Sobrenatural",
        "pasta": "Bloody Kiss"
    },
    {
        "id": "B",
        "nome": "Bara to Juudan",
        "img": "Bara to Juudan.jpg",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Fantasia Romance Shoujo Sobrenatural Vida_Escolar",
        "pasta": "Bara to Juudan"
    },
    {
        "id": "A",
        "nome": "Ai Hime ~ Ai to Himegoto",
        "img": "Ai Hime ~ Ai to Himegoto.jpg",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Drama Romance Shoujo",
        "pasta": "Ai Hime ~ Ai to Himegoto"
    },
    {
        "id": "B",
        "nome": "Bishounen No Oheya",
        "img": "Bishounen No Oheya.jpg",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Comédia Harem Romance Shoujo Vida_Escolar",
        "pasta": "Bishounen No Oheya"
    },
    {
        "id": "Z",
        "nome": "Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made",
        "img": "Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made.jpg",
        "tipo": "manga",
        "status": "ativo",
        "capitulos": "Novo:03",
        "estatus": "ativo",
        "genero": "Ação Fantasia Shounen",
        "pasta": "Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made"
    },
    {
        "id": "O",
        "nome": "Otherworldly Magical Daoist Priest",
        "img": "Otherworldly Magical Daoist Priest.jpg",
        "tipo": "manhaw",
        "status": "ativo",
        "capitulos": "novo: 40",
        "estatus": "ativo",
        "genero": "Ação, Artes Marciais, Comédia, Drama, Fantasia, Isekai, Magia, Shounen",
        "pasta": "Otherworldly Magical Daoist Priest"
    },
    {
        "id": "O",
        "nome": "I’m in Trouble Because My Husband Is So Cute",
        "img": "I’m in Trouble Because My Husband Is So Cute.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Ação, Aventura, Drama, Fantasia, Histórico, Josei, Romance, Seinen",
        "pasta": "I’m in Trouble Because My Husband Is So Cute"
    },
    {
        "id": "O",
        "nome": "Saenai Riman to Yankee Joshi Kousei",
        "img": "Saenai Riman to Yankee Joshi Kousei.jpg",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Comédia  Romance  Slice of Life",
        "pasta": "Saenai Riman to Yankee Joshi Kousei"
    },
    {
        "id": "W",
        "nome": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago",
        "img": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Fantasia Romance Shounen Sobrenatural",
        "pasta": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago"
    },
	{
        "id": "I",
        "nome": "I Am Trying to Divorce My Villain Husband, but We Have a Child",
        "img": "I Am Trying to Divorce My Villain Husband, but We Have a Child.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Fantasia Josei Romance",
        "pasta": "I Am Trying to Divorce My Villain Husband, but We Have a Child"
    },
	{
        "id": "M",
        "nome": "My Childhood Friend Became an Obsessive Male Lead",
        "img": "My Childhood Friend Became an Obsessive Male Lead.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Fantasia Josei Romance",
        "pasta": "My Childhood Friend Became an Obsessive Male Lead"
    },
	{
        "id": "A",
        "nome": "A Proprietária Bebê Está se Aposentando",
        "img": "A Proprietária Bebê Está se Aposentando.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Fantasia Romance Shoujo",
        "pasta": "A Proprietária Bebê Está se Aposentando"
    },
	{
        "id": "M",
        "nome": "My Three Tyrant Brothers",
        "img": "My Three Tyrant Brothers.jpg",
        "tipo": "manhaw",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Histórico Magia Romance Shoujo Sobrenatural",
        "pasta": "My Three Tyrant Brothers"
    },

];

console.log(mangas_e_manhaws)
mangas_e_manhaws.forEach((banner) => {
    let banner_element = `
    <div class="box letra-${banner.id}">
          <span class="${banner.tipo}"></span>
          <span class="${banner.status}">${banner.capitulos}</span>
          <div class="imagem">
        <a href="./pages/${banner.tipo}s/${banner.pasta}/index.html">
          <img class="img"
             src="./imgs/${banner.img}">
       </a>
          </div>
          <p title="${banner.nome}" class="nome">${banner.nome}</p>
        </div>
    `;
    Mangas.innerHTML += banner_element;
});

/*busca mangas por nome*/

const filterElement = document.querySelector('header input')
const mangas = document.querySelectorAll('.container .box')


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