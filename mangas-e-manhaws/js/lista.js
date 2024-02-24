let Mangas = document.querySelector(".container")


let mangas_e_manhwas = [
    {
        "key" : "of",
        "id": "F",
        "nome": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)",
        "tipo": "manhwa",
        "status": "completo",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Fantasia, Histórico, Josei, Romance, Shoujo, Sobrenatural",
        "pasta": "Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!)",
        "caminho-img" : "./imgs/Father, I Don't Want this Marriage! (Father, I Don't Want to Get Married!).jpg"
    },
    {
        "key" : "of",
        "id": "H",
        "nome": "Hougong Tai Duo, Zhihao Feishengle - My Harem Grew So Large, I Was Forced to Ascend",
        "tipo": "manhwa",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Artes Marciais Aventura Fantasia Harem Isekai Romance Webtoon acao",
        "pasta" : "",
        "caminho-img" : "./imgs/Hougong Tai Duo, Zhihao Feishengle - My Harem Grew So Large, I Was Forced to Ascend.jpg"
    },
    {
        "key" : "on",
        "id": "I",
        "nome": "Isekai Cheat Magician",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Aventura acao Fantasia Isekai Romance Shounen",
        "pasta" : "Isekai Cheat Magician",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Isekai%20Cheat%20Magician.jpg"
    },
	{
        "key" : "of",
        "id": "J",
        "nome": "It's Time to Change the Genre",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Fantasia, Isekai, Reencarnação, Romance, Shoujo",
        "pasta": "It’s Time to Change the Genre",
        "caminho-img" : "./imgs/Jangleuleul Bakkwobodolog Hagessseubnida - It's Time to Change the Genre.jpg"
    },
    {
        "key" : "of",
        "id": "R",
        "nome": "Rebirth of the Divine Doctor",
        "tipo": "manhwa",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "estatus": "ativo",
        "genero": "acao Artes Marciais Aventura Comédia Fantasia Histórico Isekai Manhua Medicina Reencarnação",
        "pasta" : "",
        "caminho-img" : "./imgs/Rebirth of the Divine Doctor.jpg"
    },
    {
        "key" : "of",
        "id": "T",
        "nome": "Taming the Lady",
        "tipo": "manhwa",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "acao Fantasia Isekai Manhwa Shoujo Webtoon",
        "pasta" : "",
        "caminho-img" : "./imgs/Taming the Lady.jpg"
    },
    {
        "key" : "of",
        "id": "T",
        "nome": "The Lady Wants to Rest",
        "tipo": "manhwa",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Isekai Manhwa Romance Shoujo Webtoon",
        "pasta" : "",
        "caminho-img" : "./imgs/The Lady Wants to Rest.jpg"
    },
    {
        "key" : "of",
        "id": "W",
        "nome": "Wo Shi Yì Shijie Zui Qiang Lingzhu - I Am the Strongest Lord in Another World",
        "tipo": "manhwa",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Wo Shi Yì Shijie Zui Qiang Lingzhu - I Am the Strongest Lord in Another World.jpg"
    },
    {
        "key" : "of",
        "id": "B",
        "nome": "Bokutachi wa Hanshoku wo Yameta",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Bokutachi wa Hanshoku wo Yameta.jpg"
    },
    {
        "key" : "of",
        "id": "T",
        "nome": "Tensei shitara Slime Datta Ken Mamono no Kuni no Arukikata",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Tensei shitara Slime Datta Ken Mamono no Kuni no Arukikata.jpg"
    },
    {
        "key" : "of",
        "id": "T",
        "nome": "Tensei Shitara Ore ga Heroine de Aitsu ga Yuusha Datta",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Tensei Shitara Ore ga Heroine de Aitsu ga Yuusha Datta.jpg"
    },
    {
        "key" : "of",
        "id": "S",
        "nome": "Sensei Wa Koi Wo Oshie Rarenai",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Sensei Wa Koi Wo Oshie Rarenai.jpg"
    },
    {
        "key" : "of",
        "id": "L",
        "nome": "Lv2 kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Lv2 kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life.jpg"
    },
    {
        "key" : "on",
        "id": "O",
        "nome": "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Comedia Romance Shounen Slice-of-Life",
        "pasta": "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Otonari%20no%20Tenshi-sama%20ni%20Itsunomanika%20Dame%20Ningen%20ni%20Sareteita%20Ken.jpg"
    },
    {
        "key" : "of",
        "id": "K",
        "nome": "Kuro no Shoukanshi",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Kuro no Shoukanshi.jpg"
    },
    {
        "key" : "of",
        "id": "L",
        "nome": "Love Comedy Manga ni Haitteshimatta node, Oshi no Make Heroine wo Zenryoku de Shiawase ni Suru",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Love Comedy Manga ni Haitteshimatta node, Oshi no Make Heroine wo Zenryoku de Shiawase ni Suru",
        "caminho-img" : "./imgs/Love Comedy Manga ni Haitteshimatta node, Oshi no Make Heroine wo Zenryoku de Shiawase ni Suru.jpg"
    },
    {
        "key" : "on",
        "id": "I",
        "nome": "Isekai De Tochi O Katte Noujou O Tsukurou",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Isekai De Tochi O Katte Noujou O Tsukurou",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Isekai%20De%20Tochi%20O%20Katte%20Noujou%20O%20Tsukurou.jpg"
    },
    {
        "key" : "of",
        "id": "M",
        "nome": "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?",
        "tipo": "manga",
        "pasta": "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii.jpg"
    },
    {
        "key" : "on",
        "id": "I",
        "nome": "Isekai Kenkokuki",
        "tipo": "manga",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Isekai Kenkokuki",
        "caminho-img" : "https://github.com/oclubedosdez/Imagens/blob/main/mangas/img/Isekai%20Kenkokuki.jpg?raw=true./imgs/Isekai Kenkokuki.jpg"
    },
    {
        "key" : "of",
        "id": "R",
        "nome": "Release That Witch",
        "tipo": "manhwa",
        "simbolo": "",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "",
        "caminho-img" : "./imgs/Release That Witch.jpg"
    },
    {
        "key" : "of",
        "id": "S",
        "nome": "Survive On A Deserted Island With Beautiful Girls",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Survive On A Deserted Island With Beautiful Girls",
        "caminho-img" : "./imgs/Survive On A Deserted Island With Beautiful Girls.jpg"
    },
    {
        "key" : "of",
        "id": "S",
        "nome": "Fate/stay night",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Fate stay night",
        "caminho-img" : "./imgs/Fate stay night-14.jpg"
    },
    {
        "key" : "of",
        "id": "I",
        "nome": "Isekai Yurutto Survival Seikatsu: Gakkou no Minna to Isekai no Mujintou ni Tenishitakedo Ore Dake Rakushou desu",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "",
        "pasta": "Isekai Yurutto Survival Seikatsu Gakkou no Minna to Isekai no Mujintou ni Tenishitakedo Ore Dake Rakushou desu",
        "caminho-img" : "./imgs/Isekai Yurutto Survival Seikatsu Gakkou no Minna to Isekai no Mujintou ni Tenishitakedo Ore Dake Rakushou desu.jpg"
    },
    {
        "key" : "of",
        "id": "M",
        "nome": "Martial God Asura",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Artes Marciais Aventura Ação Harem Romance Seinen Sobrenatural",
        "pasta": "Martial God Asura",
        "caminho-img" : "./imgs/Martial God Asura.jpg"
    },
    {
        "key" : "of",
        "id": "M",
        "nome": "Tales of Demons and Gods",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Artes_Marciais Aventura Ação Fantasia Isekai Romance Seinen",
        "pasta": "Tales of Demons and Gods",
        "caminho-img" : "./imgs/Tales of Demons and Gods.jpg"
    },
    {
        "key" : "of",
        "id": "M",
        "nome": "My Amazing Wechat",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Aventura, Ação, Ecchi, Escolar, Fantasia, Manhua, Shounen, Slice of Life, Webtoon",
        "pasta": "My Amazing Wechat",
        "caminho-img" : "./imgs/My Amazing Wechat.jpg"
    },
    {
        "key" : "of",
        "id": "M",
        "nome": "My Villainous Master Brings Along the Peerless Apprentices",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Ação Artes Marciais Drama Fantasia Shounen",
        "pasta": "My Villainous Master Brings Along the Peerless Apprentices",
        "caminho-img" : "./imgs/My Villainous Master Brings Along the Peerless Apprentices.webp"
    },
    {
        "key" : "of",
        "id": "E",
        "nome": "Eu tive um filho do tirano",
        "tipo": "manhwa",
        "status": "completo",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Drama fantasia Josei Romance",
        "pasta": "Eu tive um filho do tirano",
        "caminho-img" : "./imgs/Eu tive um filho do tirano.jpg"
    },
    {
        "key" : "of",
        "id": "B",
        "nome": "Bloody Kiss (Yagami Rina)",
        "tipo": "manga",
        "status": "completo",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Romance Shoujo Sobrenatural",
        "pasta": "Bloody Kiss (Yagami Rina)",
        "caminho-img" : "./imgs/Bloody Kiss (Yagami Rina).jpg"
    },
    {
        "key" : "of",
        "id": "B",
        "nome": "Bloody Kiss",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Romance Shoujo Sobrenatural",
        "pasta": "Bloody Kiss",
        "caminho-img" : "./imgs/Bloody Kiss.jpg"
    },
    {
        "key" : "of",
        "id": "B",
        "nome": "Bara to Juudan",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Fantasia Romance Shoujo Sobrenatural Vida_Escolar",
        "pasta": "Bara to Juudan",
        "caminho-img" : "./imgs/Bara to Juudan.jpg"
    },
    {
        "key" : "of",
        "id": "A",
        "nome": "Ai Hime ~ Ai to Himegoto",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Drama Romance Shoujo",
        "pasta": "Ai Hime ~ Ai to Himegoto",
        "caminho-img" : "./imgs/Ai Hime ~ Ai to Himegoto.jpg"
    },
    {
        "key" : "of",
        "id": "B",
        "nome": "Bishounen No Oheya",
        "tipo": "manga",
        "status": "completo completo2",
        "capitulos": "",
        "estatus": "finalizado",
        "genero": "Comédia Harem Romance Shoujo Vida_Escolar",
        "pasta": "Bishounen No Oheya",
        "caminho-img" : "./imgs/Bishounen No Oheya.jpg"
    },
    {
        "key" : "of",
        "id": "Z",
        "nome": "Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made",
        "tipo": "manga",
        "status": "ativo",
        "capitulos": "Novo:03",
        "estatus": "ativo",
        "genero": "Ação Fantasia Shounen",
        "pasta": "Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made",
        "caminho-img" : "./imgs/Zatsuyou Fuyo Jutsushi ga Jibun no Saikyou ni Kizuku made.jpg"
    },
    {
        "key" : "of",
        "id": "O",
        "nome": "Otherworldly Magical Daoist Priest",
        "tipo": "manhwa",
        "status": "ativo",
        "capitulos": "novo: 40",
        "estatus": "ativo",
        "genero": "Ação, Artes Marciais, Comédia, Drama, Fantasia, Isekai, Magia, Shounen",
        "pasta": "Otherworldly Magical Daoist Priest",
        "caminho-img" : "./imgs/Otherworldly Magical Daoist Priest.jpg"
    },
    {
        "key" : "of",
        "id": "O",
        "nome": "I’m in Trouble Because My Husband Is So Cute",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Ação, Aventura, Drama, Fantasia, Histórico, Josei, Romance, Seinen",
        "pasta": "I’m in Trouble Because My Husband Is So Cute",
        "caminho-img" : "./imgs/I’m in Trouble Because My Husband Is So Cute.jpg"
    },
    {
        "key" : "of",
        "id": "O",
        "nome": "Saenai Riman to Yankee Joshi Kousei",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Comédia  Romance  Slice of Life",
        "pasta": "Saenai Riman to Yankee Joshi Kousei",
        "caminho-img" : "./imgs/Saenai Riman to Yankee Joshi Kousei.jpg"
    },
    {
        "key" : "of",
        "id": "W",
        "nome": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Fantasia Romance Shounen Sobrenatural",
        "pasta": "Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago",
        "caminho-img" : "./imgs/Wojia Laopo Laizi Yiqian Nian Qian – My Wife Is From a Thousand Years Ago.jpg"
    },
	{
        "key" : "of",
        "id": "I",
        "nome": "I Am Trying to Divorce My Villain Husband, but We Have a Child",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Fantasia Josei Romance",
        "pasta": "I Am Trying to Divorce My Villain Husband, but We Have a Child",
        "caminho-img" : "./imgs/I Am Trying to Divorce My Villain Husband, but We Have a Child.jpg"
    },
	{
        "key" : "of",
        "id": "M",
        "nome": "My Childhood Friend Became an Obsessive Male Lead",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Fantasia Josei Romance",
        "pasta": "My Childhood Friend Became an Obsessive Male Lead",
        "caminho-img" : "./imgs/My Childhood Friend Became an Obsessive Male Lead.jpg"
    },
	{
        "key" : "of",
        "id": "A",
        "nome": "A Proprietária Bebê Está se Aposentando",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Fantasia Romance Shoujo",
        "pasta": "A Proprietária Bebê Está se Aposentando",
        "caminho-img" : "./imgs/A Proprietária Bebê Está se Aposentando.jpg"
    },
	{
        "key" : "of",
        "id": "M",
        "nome": "My Three Tyrant Brothers",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Histórico Magia Romance Shoujo Sobrenatural",
        "pasta": "My Three Tyrant Brothers",
        "caminho-img" : "./imgs/My Three Tyrant Brothers.jpg"
    },
	{
        "key" : "of",
        "id": "K",
        "nome": "Knight of the Frozen Flower",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Ação Aventura Drama Fantasia Histórico Psicológico Romance Shoujo",
        "pasta": "Knight of the Frozen Flower",
        "caminho-img" : "./imgs/Knight of the Frozen Flower.jpg"
    },
	{
        "key" : "of",
        "id": "D",
        "nome": "De Tantas Coisas, Me Tornei um Corvo",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Fantasia Romance Shoujo Sobrenatural",
        "pasta": "De Tantas Coisas, Me Tornei um Corvo",
        "caminho-img" : "./imgs/De Tantas Coisas, Me Tornei um Corvo.jpeg"
    },
    {
        "key" : "on",
        "id": "N",
        "nome": "Nihon e Youkoso Elf-san (Welcome to Japan, Elf-san)",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Aventura Comédia Ecchi Fantasia Romance Shounen Slice of Life",
        "pasta": "Nihon e Youkoso Elf-san (Welcome to Japan, Elf-san)",
        "caminho-img" : "./imgs/Nihon e Youkoso Elf-san (Welcome to Japan, Elf-san).png"
    },
	{
        "key" : "of",
        "id": "A",
        "nome": "A 99° Noiva do Duque",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Fantasia Romance Shoujo",
        "pasta": "A 99° Noiva do Duque",
        "caminho-img" : "./imgs/A 99° Noiva do Duque.jpg"
    },
    {
        "key" : "of",
        "id": "I",
        "nome": "Fairy, Wait a Moment! Please Listen to My Argument",
        "tipo": "manhua",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Acao Aventura Drama Fantasia Shounen",
        "pasta": "Fairy, Wait a Moment! Please Listen to My Argument",
        "caminho-img" : "./imgs/Fairy, Wait a Moment! Please Listen to My Argument.jpg"
    },
	{
        "key" : "of",
        "id": "B",
        "nome": "Bon Appétit!",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Romance Shoujo",
        "pasta": "Bon Appétit!",
        "caminho-img" : "./imgs/Bon Appétit!.jpeg"
    },
    {
        "key" : "of",
        "id": "A",
        "nome": "Ano Oni Kyoushi ga Boku no Ane ni Narundesuka",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Comédia Ecchi Escolar Romance Shounen Slice-of-Life",
        "pasta": "Ano Oni Kyoushi ga Boku no Ane ni Narundesuka",
        "caminho-img" : "./imgs/Ano Oni Kyoushi ga Boku no Ane ni Narundesuka.jpg"
    },
    {
        "key" : "of",
        "id": "I",
        "nome": "I’m Not a Demon",
        "tipo": "manhua",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Acao Aventura Drama Fantasia Shounen",
        "pasta": "I’m Not a Demon",
        "caminho-img" : "./imgs/I’m Not a Demon.jpg"
    },
	{
        "key" : "of",
        "id": "K",
        "nome": "Kekkon Yubiwa Monogatari",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Ação Ecchi Fantasia Harem Magia Romance Seinen",
        "pasta": "Kekkon Yubiwa Monogatari",
        "caminho-img" : "./imgs/Kekkon Yubiwa Monogatari.jpg"
    },
    {
        "key" : "of",
        "id": "A",
        "nome": "Atenciosamente: Me Tornei a Empregada do Duque",
        "tipo": "manhwa",
        "status": "completo",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Fantasy Isekai Romance Shoujo",
        "pasta": "Atenciosamente Me Tornei a Empregada do Duque",
        "caminho-img" : "./imgs/Atenciosamente Me Tornei a Empregada do Duque.jpg"
    },
	{
        "key" : "of",
        "id": "B",
        "nome": "Beware of the Brothers!",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Fantasia Histórico Romance Shoujo",
        "pasta": "Beware of the Brothers!",
        "caminho-img" : "./imgs/Beware of the Brothers!.jpg"
    },
	{
        "key" : "of",
        "id": "C",
        "nome": "Circunstâncias da Irene",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Drama Fantasia Josei Romance",
        "pasta": "Circunstâncias da Irene",
        "caminho-img" : "./imgs/Circunstâncias da Irene.jpg"
    },
	{
        "key" : "of",
        "id": "K",
        "nome": "Fuufu Ijou, Koibito Miman",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Comédia Drama Escolar Romance Slice-of-Life",
        "pasta": "Fuufu Ijou, Koibito Miman",
        "caminho-img" : "./imgs/Fuufu Ijou, Koibito Miman.jpg"
    },
	{
        "key" : "of",
        "id": "K",
        "nome": "kikan shita yuusha no gojitsudan",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Comédia Ecchi Fantasia Harem Romance Magia Shounen Isekai",
        "pasta": "kikan shita yuusha no gojitsudan",
        "caminho-img" : "./imgs/kikan shita yuusha no gojitsudan.jpg"
    },
	{
        "key" : "of",
        "id": "I",
        "nome": "I Confessed to the Boss",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "ativo",
        "genero": "Comedia Drama Josei Romance Shoujo",
        "pasta": "I Confessed to the Boss",
        "caminho-img" : "./imgs/I Confessed to the Boss.jpg"
    },
    {
        "key" : "of",
        "id": "P",
        "nome": "Pretendente Surpresa",
        "tipo": "manhwa",
        "status": "completo",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Comédia Drama Josei Romance Slice-of-Life",
        "pasta": "Pretendente Surpresa",
        "caminho-img" : "./imgs/Pretendente Surpresa.jpg"
    },
	{
        "key" : "of",
        "id": "Q",
        "nome": "Quando a Filha Ilegítima do Conde se Casa",
        "img": "",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Comédia Drama Josei Romance Slice-of-Life",
        "pasta": "Quando a Filha Ilegítima do Conde se Casa",
        "caminho-img" : "./imgs/Quando a Filha Ilegítima do Conde se Casa.jpg"
    },
    {
        "key" : "of",
        "id": "A",
        "nome": "Adelaide",
        "img": "",
        "tipo": "manhwa",
        "status": "completo",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Fantasia Histórico Isekai Romance",
        "pasta": "Adelaide",
        "caminho-img" : "./imgs/Adelaide.jpg"
    },
	{
        "key" : "of",
        "id": "A",
        "nome": "A protagonista feminina está tentando me tornar sua madrasta",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Fantasia Histórico Josei Romance Shoujo",
        "pasta": "A protagonista feminina está tentando me tornar sua madrasta",
        "caminho-img" : "./imgs/A protagonista feminina está tentando me tornar sua madrasta.jpg"
    },
	{
        "key" : "of",
        "id": "A",
        "nome": "A Relação Simbiótica Entre uma Coelha e Uma Pantera Negra",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Aventura Comédia Drama Fantasia Romance Shoujo Sobrenatural",
        "pasta": "A Relação Simbiótica Entre uma Coelha e Uma Pantera Negra",
        "caminho-img" : "./imgs/A Relação Simbiótica Entre uma Coelha e Uma Pantera Negra.jpg"
    },
	{
        "key" : "of",
        "id": "I",
        "nome": "I Time-Traveled and Confessed to My Teacher Crush",
        "tipo": "manga",
        "status": "completo",
        "capitulos": "",
        "estatus": "completo",
        "genero": "Slice-of-life Romance Comédia Escolar Viagem-no-tempo",
        "pasta": "I Time-Traveled and Confessed to My Teacher Crush",
        "caminho-img" : "./imgs/I Time-Traveled and Confessed to My Teacher Crush.jpg"
    },
    {
        "key" : "of",
        "id": "E",
        "nome": "Eu Domei o Protagonista Masculino Que Tentou me Matar",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Drama Fantasia Romance Shoujo",
        "pasta": "Eu Domei o Protagonista Masculino Que Tentou me Matar",
        "caminho-img" : "./imgs/Eu Domei o Protagonista Masculino Que Tentou me Matar.jpg"
    },
	{
        "key" : "of",
        "id": "S",
        "nome": "Salvos A Monster Evolution LitRPG",
        "tipo": "manhwa",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Acao Aventura Comedia Drama Fantasia Jogo Shounen",
        "pasta": "Salvos Uma evolução de monstro LitRPG",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/pages/manhwas/imgs/Salvos A Monster Evolution LitRPG.jpg"
    },
	{
        "key" : "of",
        "id": "M",
        "nome": "Musume ja Nakute Mama ga Suki nano",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Comedia Romance",
        "pasta": "Musume ja Nakute Mama ga Suki nano",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Musume ja Nakute Mama ga Suki nano.jpg"
    },
	{
        "key" : "of",
        "id": "S",
        "nome": "Saint Seiya Meiou Iden Dark Wing",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Acao Aventura Fantasia Shounen Sobrenatural",
        "pasta": "Saint Seiya Meiou Iden Dark Wing",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Saint Seiya Meiou Iden Dark Wing.jpg"
    },
	{
        "key" : "of",
        "id": "C",
        "nome": "Congelamento Global",
        "tipo": "manhua",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Acao Aventura Romance Sobrevivência",
        "pasta": "Congelamento Global",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/manhuas/img/Congelamento Global.jpg"
    },
	{
        "key" : "of",
        "id": "T",
        "nome": "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Fantasia Romance Shounen Slice-of-Life",
        "pasta": "Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Tanbo de Hirotta Onna Kishi, Inaka de Ore no Yome dato Omowareteiru.jpg"
    },
	{
        "key" : "of",
        "id": "E",
        "nome": "Eternamente Level 1 Até A Morte",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Acao Aventura Fantasia Harem Romance Isekai Magia",
        "pasta": "Eternamente Level 1 Até A Morte",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Eternamente Level 1 Até A Morte.jpg"
    },
	{
        "key" : "of",
        "id": "M",
        "nome": "Mushoku no Eiyuu: Betsu ni Skill Nanka Iranakattan daga",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Acao Aventura Comédia Fantasia Shounen",
        "pasta": "Mushoku no Eiyuu Betsu ni Skill Nanka Iranakattan daga",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Mushoku no Eiyuu Betsu ni Skill Nanka Iranakattan daga.jpg"
    },
	{
        "key" : "of",
        "id": "S",
        "nome": "Shinigami ni Sodaterareta Shoujo wa Shikkoku no Tsurugi wo Mune ni Idaku",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Acao Aventura Fantasia Misterio Romance Seinen Sobrenatural",
        "pasta": "Shinigami ni Sodaterareta Shoujo wa Shikkoku no Tsurugi wo Mune ni Idaku",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Shinigami%20ni%20Sodaterareta%20Shoujo%20wa%20Shikkoku%20no%20Tsurugi%20wo%20Mune%20ni%20Idaku.jpg"
    },
	{
        "key" : "of",
        "id": "B",
        "nome": "Bannou “Murazukuri” Cheat de Otegaru Slow Life ~Mura desu ga Nani ka?~",
        "tipo": "manga",
        "status": "",
        "capitulos": "",
        "estatus": "",
        "genero": "Acao Aventura Comedia Fantasia Romance Shounen",
        "pasta": "Bannou “Murazukuri” Cheat de Otegaru Slow Life ~Mura desu ga Nani ka~",
        "caminho-img" : "https://raw.githubusercontent.com/oclubedosdez/Imagens/main/mangas/img/Bannou%20%E2%80%9CMurazukuri%E2%80%9D%20Cheat%20de%20Otegaru%20Slow%20Life%20%7EMura%20desu%20ga%20Nani%20ka%7E.jpg"
    },
];





mangas_e_manhwas.forEach((banner) => {
    let banner_element = `
    <div class="box letra-${banner.id} ${banner.key}">
          <span class="${banner.tipo}"></span>
          <span class="${banner.status}">${banner.capitulos}</span>
          <div class="imagem">
        <a href="./pages/${banner.tipo}s/${banner.pasta}/index.html">
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




