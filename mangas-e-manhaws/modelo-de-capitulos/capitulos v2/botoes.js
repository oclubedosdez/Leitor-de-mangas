


/*PROXIMO CAPITULO*/
// botao_proximo_capitulo.forEach((next_captulo) => {
//     next_captulo.onclick = function () {

//         capitulo++;
//         titulo1.innerHTML = `${nome_manga} - capitulo ${capitulo < 10 ? "0" : ""}${capitulo}`
//         nome.innerHTML = `${nome_manga} - capitulo ${capitulo < 10 ? "0" : ""}${capitulo}`

//         var diretorio = `${caminho}${capitulo < 10 ? "0" : ""}${capitulo}/imgs/`;


//         document.body.scrollTop = 0


//         var capitulo_fra = Math.trunc(capitulo)//caso o numero do capitulo seja fracionado;


//         select_element[capitulo_fra - 1] = `<option id="cap_selecionado" selected="selected" value="1">capitulo ${capitulo < 10 ? "0" : ""}${capitulo} </option>`


//         botoes_de_baixo.classList.add('none')



//         // Função para exibir a imagem atual
//         function showCurrentImage() {
//             mangaImage.src = mangaImages[currentImageIndex];
//             updatePageInfo();
//         }

//         // Função para avançar para a próxima imagem
//         function nextImage() {
//             if (currentImageIndex < mangaImages.length - 1) {
//                 currentImageIndex++;
//                 showCurrentImage();
//             }
//         }

//         // Função para voltar para a imagem anterior
//         function previousImage() {
//             if (currentImageIndex > 0) {
//                 currentImageIndex--;
//                 showCurrentImage();
//             }
//         }

//         // Função para atualizar as informações da página
//         function updatePageInfo() {
//             const currentPage = currentImageIndex + 1;
//             const totalPages = mangaImages.length;
//             pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
//             updatePageSelect();
//         }

//         // Função para atualizar o seletor de página
//         function updatePageSelect() {
//             pageSelect.innerHTML = "";
//             for (let i = 0; i < mangaImages.length; i++) {
//                 const option = document.createElement("option");
//                 option.value = i;
//                 option.text = `Página ${i + 1}`;
//                 if (i === currentImageIndex) {
//                     option.selected = true;
//                 }
//                 pageSelect.appendChild(option);
//             }
//         }


//         // Evento de alteração no seletor de página
//         pageSelect.addEventListener("change", function () {
//             currentImageIndex = parseInt(pageSelect.value);
//             showCurrentImage();
//         });



//         // Exibir a imagem inicial e as informações da página
//         showCurrentImage();



//         const container = document.getElementById('manga-container');
//         const pageAberta = document.querySelector('.selecao-de-paginas');
//         const seletorCapitulos = document.querySelector('.seletor-de-capitulos');
//         const capSelect = document.querySelector('.seletor-de-capitulos select');

//         capSelect.innerHTML = '';


//         capSelect.innerHTML += select_element;




//         container.innerHTML = ''
//         container.classList.add('paginas-abertas')

//         botoes_de_baixo.classList.remove('none')


//         var imagens = [];

//         for (let i = 0; i < num_imgs; i++) {
//             imagens.push(`${diretorio}${i}.jpg`);
//         }

//         function adicionarImagem(src) {
//             var img = new Image();
//             img.src = src;

//             img.onload = function () {
//                 container.appendChild(img);
//                 carregarProximaImagem();
//             };

//             img.onerror = function () {
//                 // A imagem não carregou com sucesso, não faz nada
//                 carregarProximaImagem();
//             };
//         }

//         function carregarProximaImagem() {
//             if (imagens.length > 0) {
//                 adicionarImagem(imagens.shift()); // Remove a primeira imagem da lista e a carrega
//             }
//         }


//         carregarProximaImagem();
//     }
// })

/*CAPITULO ANTERIOR*/


/*SELECIONAR CAPITULOS*/
function atualizarContador() {


    const container = document.getElementById('manga-container');
    container.innerHTML = ''

    // Obtém o elemento do select
    var select = document.getElementById("selecionar");

    // Obtém o valor selecionado
    var valorSelecionado = select.value;

    // Atualiza o contador com o valor selecionado
    document.getElementById("contador").innerHTML = valorSelecionado;


    if (valorSelecionado > 1) {
        titulo1.innerHTML = `${nome_manga} - capitulo ${valorSelecionado < 10 ? "0" : ""}${valorSelecionado}`
        nome.innerHTML = `${nome_manga} - capitulo ${valorSelecionado < 10 ? "0" : ""}${valorSelecionado}`


        var diretorio = `${caminho}${valorSelecionado < 10 ? "0" : ""}${valorSelecionado}/imgs/`;


        document.body.scrollTop = 0




        const pageAberta = document.querySelector('.selecao-de-paginas');
        const seletorCapitulos = document.querySelector('.seletor-de-capitulos');
        const capSelect = document.querySelector('.seletor-de-capitulos select');

        // capSelect.innerHTML = '';


        // capSelect.innerHTML += select_element;




        container.innerHTML = ''
        container.classList.add('paginas-abertas')

        botoes_de_baixo.classList.remove('none')



        var imagens = [];

        for (let i = 0; i < num_imgs; i++) {
            imagens.push(`${diretorio}${i}.jpg`);
        }




        function adicionarImagem(src) {
            var img = new Image();
            img.src = src;

            img.onload = function () {
                container.appendChild(img);
                carregarProximaImagem();
            };

            img.onerror = function () {
                // A imagem não carregou com sucesso, não faz nada
                carregarProximaImagem();
            };
        }

        function carregarProximaImagem() {
            if (imagens.length > 0) {
                adicionarImagem(imagens.shift()); // Remove a primeira imagem da lista e a carrega
            }
        }


        carregarProximaImagem();

    }


    botao_proximo_capitulo.forEach((next_captulo) => {
        next_captulo.onclick = function () {

            capitulo++;
            // titulo1.innerHTML = `${nome_manga} - capitulo ${capitulo < 10 ? "0" : ""}${capitulo}`
            // nome.innerHTML = `${nome_manga} - capitulo ${capitulo < 10 ? "0" : ""}${capitulo}`

            var diretorio = `${caminho}${capitulo < 10 ? "0" : ""}${capitulo}/imgs/`;

            if (capitulo < valorSelecionado) {
                capitulo+=valorSelecionado;

                console.log(capitulo)
            }


            document.body.scrollTop = 0


            var capitulo_fra = Math.trunc(capitulo)//caso o numero do capitulo seja fracionado;


            select_element[capitulo_fra - 1] = `<option id="cap_selecionado" selected="selected" value="1">capitulo ${capitulo < 10 ? "0" : ""}${capitulo} </option>`


            botoes_de_baixo.classList.add('none')



            // Função para exibir a imagem atual
            function showCurrentImage() {
                mangaImage.src = mangaImages[currentImageIndex];
                updatePageInfo();
            }

            // Função para avançar para a próxima imagem
            function nextImage() {
                if (currentImageIndex < mangaImages.length - 1) {
                    currentImageIndex++;
                    showCurrentImage();
                }
            }

            // Função para voltar para a imagem anterior
            function previousImage() {
                if (currentImageIndex > 0) {
                    currentImageIndex--;
                    showCurrentImage();
                }
            }

            // Função para atualizar as informações da página
            function updatePageInfo() {
                const currentPage = currentImageIndex + 1;
                const totalPages = mangaImages.length;
                pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
                updatePageSelect();
            }

            // Função para atualizar o seletor de página
            function updatePageSelect() {
                pageSelect.innerHTML = "";
                for (let i = 0; i < mangaImages.length; i++) {
                    const option = document.createElement("option");
                    option.value = i;
                    option.text = `Página ${i + 1}`;
                    if (i === currentImageIndex) {
                        option.selected = true;
                    }
                    pageSelect.appendChild(option);
                }
            }


            // Evento de alteração no seletor de página
            pageSelect.addEventListener("change", function () {
                currentImageIndex = parseInt(pageSelect.value);
                showCurrentImage();
            });



            // Exibir a imagem inicial e as informações da página
            showCurrentImage();



            const container = document.getElementById('manga-container');
            const pageAberta = document.querySelector('.selecao-de-paginas');
            const seletorCapitulos = document.querySelector('.seletor-de-capitulos');
            const capSelect = document.querySelector('.seletor-de-capitulos select');

            capSelect.innerHTML = '';


            capSelect.innerHTML += select_element;




            container.innerHTML = ''
            container.classList.add('paginas-abertas')

            botoes_de_baixo.classList.remove('none')


            var imagens = [];

            for (let i = 0; i < num_imgs; i++) {
                imagens.push(`${diretorio}${i}.jpg`);
            }

            function adicionarImagem(src) {
                var img = new Image();
                img.src = src;

                img.onload = function () {
                    container.appendChild(img);
                    carregarProximaImagem();
                };

                img.onerror = function () {
                    // A imagem não carregou com sucesso, não faz nada
                    carregarProximaImagem();
                };
            }

            function carregarProximaImagem() {
                if (imagens.length > 0) {
                    adicionarImagem(imagens.shift()); // Remove a primeira imagem da lista e a carrega
                }
            }


            carregarProximaImagem();
        }
    })
}
atualizarContador()