if (nome_manga == 'A Returner’s Magic Should be Special') {

    document.querySelector('#manga-container').style.width = '50%'
    num_imgs = 95;
    
    if (capitulo == 1) {
        num_imgs = 143;
    }
    if (capitulo == 2) {
        num_imgs = 88;
    }
    if (capitulo > 3) {
        num_imgs = 98;
    }
}