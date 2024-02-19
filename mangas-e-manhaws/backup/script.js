(function ($) {
    var pagify = {
        items: {},
        container: null,
        totalPages: 1,
        perPage: 3,
        currentPage: 0,
        createNavigation: function () {
            // Calcula o número total de páginas com base no número de itens e itens por página
            this.totalPages = Math.ceil(this.items.length / this.perPage);

            // Remove a navegação de paginação existente
            $('.pagination', this.container.parent()).remove();

            // Cria a estrutura HTML da navegação de paginação
            var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');

            // Adiciona os elementos de página à navegação
            for (var i = 0; i < this.totalPages; i++) {
                var pageElClass = "page";
                if (!i)
                    pageElClass = "page current";
                var pageEl = '<a class="' + pageElClass + '" data-page="' + (i + 1) + '">' + (i + 1) + "</a>";
                pagination.append(pageEl);
            }

            pagination.append('<a class="nav next" data-next="true">></a>');

            // Insere a navegação de paginação após o contêiner dos itens
            this.container.after(pagination);

            var that = this;

            // Define o evento de clique para os botões de navegação
            $("body").off("click", ".nav");
            this.navigator = $("body").on("click", ".nav", function () {
                var el = $(this);
                that.navigate(el.data("next"));
            });

            // Define o evento de clique para os elementos de página
            $("body").off("click", ".page");
            this.pageNavigator = $("body").on("click", ".page", function () {
                var el = $(this);
                that.goToPage(el.data("page"));
            });
        },
        navigate: function (next) {
            // Define o próximo valor padrão como verdadeiro
            if (isNaN(next) || next === undefined) {
                next = true;
            }

            // Remove a classe "disabled" dos botões de navegação
            $(".pagination .nav").removeClass("disabled");

            if (next) {
                // Avança para a próxima página
                this.currentPage++;
                if (this.currentPage > (this.totalPages - 1))
                    this.currentPage = (this.totalPages - 1);
                if (this.currentPage == (this.totalPages - 1))
                    $(".pagination .nav.next").addClass("disabled");
            }
            else {
                // Volta para a página anterior
                this.currentPage--;
                if (this.currentPage < 0)
                    this.currentPage = 0;
                if (this.currentPage == 0)
                    $(".pagination .nav.prev").addClass("disabled");
            }

            // Exibe os itens da página atual
            this.showItems();
        },
        updateNavigation: function () {
            // Remove a classe "current" de todas as páginas
            var pages = $(".pagination .page");
            pages.removeClass("current");

            // Adiciona a classe "current" à página atual
            $('.pagination .page[data-page="' + (this.currentPage + 1) + '"]').addClass("current");
        },
        goToPage: function (page) {
            // Define a página atual com base no valor da página clicada
            this.currentPage = page - 1;

            // Remove a classe "disabled" dos botões de navegação
            $(".pagination .nav").removeClass("disabled");

            if (this.currentPage == (this.totalPages - 1))
                $(".pagination .nav.next").addClass("disabled");

            if (this.currentPage == 0)
                $(".pagination .nav.prev").addClass("disabled");

            // Exibe os itens da página atual
            this.showItems();
        },
        showItems: function () {
            // Esconde todos os itens
            this.items.hide();

            // Calcula o índice base para os itens da página atual
            var base = this.perPage * this.currentPage;

            // Exibe os itens da página atual
            this.items.slice(base, base + this.perPage).show();

            // Atualiza a navegação de página
            this.updateNavigation();
        },
        init: function (container, items, perPage) {
            // Inicializa as propriedades do pagify
            this.container = container;
            this.currentPage = 0;
            this.totalPages = 1;
            this.perPage = perPage;
            this.items = items;

            // Cria a navegação de paginação e exibe os itens da página atual
            this.createNavigation();
            this.showItems();
        }
    };

    // Adiciona o método pagify ao objeto jQuery
    $.fn.pagify = function (perPage, itemSelector) {
        var el = $(this);
        var items = $(itemSelector, el);

        // Define o valor padrão de itens por página como 3
        if (isNaN(perPage) || perPage === undefined) {
            perPage = 3;
        }

        // Não executa se houver menos itens do que o valor de itens por página
        if (items.length <= perPage) {
            return true;
        }

        // Inicializa o pagify com o contêiner, itens e itens por página
        pagify.init(el, items, perPage);
    };
})(jQuery);

// Chama o método pagify para o elemento com a classe "container" e define 18 itens por página
$(".container").pagify(18, ".box");

// Adiciona o evento de clique para o botão de voltar ao topo
var btn_scroll_top = $(".pagination");
btn_scroll_top.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});