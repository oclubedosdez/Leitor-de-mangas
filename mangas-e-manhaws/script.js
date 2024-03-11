(function ($) {
    var pagify = {
        items: {},
        container: null,
        totalPages: 1,
        perPage: 3,
        currentPage: 0,
        createNavigation: function () {
            this.totalPages = Math.ceil(this.items.length / this.perPage);
            $('.pagination', this.container.parent()).remove();

            var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');

            for (var i = 0; i < this.totalPages; i++) {
                var pageElClass = "page";
                if (!i)
                    pageElClass = "page current";
                var pageEl = '<a class="' + pageElClass + '" data-page="' + (i + 1) + '">' + (i + 1) + "</a>";
                pagination.append(pageEl);
            }

            pagination.append('<a class="nav next" data-next="true">></a>');

            this.container.after(pagination);

            var that = this;

            $("body").off("click", ".nav");
            this.navigator = $("body").on("click", ".nav", function () {
                var el = $(this);
                that.navigate(el.data("next"));
                sessionStorage.setItem('currentPage', that.currentPage);
            });

            $("body").off("click", ".page");
            this.pageNavigator = $("body").on("click", ".page", function () {
                var el = $(this);
                that.goToPage(el.data("page"));
                sessionStorage.setItem('currentPage', that.currentPage);
            });
        },
        navigate: function (next) {
            if (isNaN(next) || next === undefined) {
                next = true;
            }

            $(".pagination .nav").removeClass("disabled");

            if (next) {
                this.currentPage++;
                if (this.currentPage > (this.totalPages - 1))
                    this.currentPage = (this.totalPages - 1);
                if (this.currentPage == (this.totalPages - 1))
                    $(".pagination .nav.next").addClass("disabled");
            }
            else {
                this.currentPage--;
                if (this.currentPage < 0)
                    this.currentPage = 0;
                if (this.currentPage == 0)
                    $(".pagination .nav.prev").addClass("disabled");
            }

            this.showItems();
        },
        updateNavigation: function () {
            var pages = $(".pagination .page");
            pages.removeClass("current");

            $('.pagination .page[data-page="' + (this.currentPage + 1) + '"]').addClass("current");
        },
        goToPage: function (page) {
            this.currentPage = page - 1;

            $(".pagination .nav").removeClass("disabled");

            if (this.currentPage == (this.totalPages - 1))
                $(".pagination .nav.next").addClass("disabled");

            if (this.currentPage == 0)
                $(".pagination .nav.prev").addClass("disabled");

            this.showItems();
        },
        showItems: function () {
            this.items.hide();
            var base = this.perPage * this.currentPage;
            this.items.slice(base, base + this.perPage).show();
            this.updateNavigation();
        },
        init: function (container, items, perPage) {
            this.container = container;
            this.currentPage = 0;
            this.totalPages = 1;
            this.perPage = perPage;
            this.items = items;

            var storedPage = sessionStorage.getItem('currentPage');
            if (storedPage !== null) {
                this.currentPage = parseInt(storedPage, 10);
            }

            this.createNavigation();
            this.showItems();
        }
    };

    $.fn.pagify = function (perPage, itemSelector) {
        var el = $(this);
        var items = $(itemSelector, el);

        if (isNaN(perPage) || perPage === undefined) {
            perPage = 3;
        }

        if (items.length <= perPage) {
            return true;
        }

        pagify.init(el, items, perPage);
    };
})(jQuery);

$(".container_mangas").pagify(20, ".box");

var btn_scroll_top = $(".pagination");
btn_scroll_top.click(function () {
    $('html, body').animate({ scrollTop: 0 });

});


var cabecalho = document.getElementById('menu_cabecalho')


cabecalho.onmouseenter = function() {
   cabecalho.style.height = '60%'
}

cabecalho.onmouseleave = function() {
    cabecalho.style.height = '100px'
}

cabecalho.onclick = function() {
    cabecalho.style.height = '100px'
}
