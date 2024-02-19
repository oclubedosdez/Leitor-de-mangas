# Carrossel de Coruja 2

Plug-in [jQuery](https://jquery.com/) habilitado para toque que permite criar um controle deslizante de carrossel bonito e responsivo. **Para começar, confira https://owlcarousel2.github.io/OwlCarousel2/.**

**Aviso:** O antigo site Owl Carousel (owlgraphic [ponto] com) não está mais em uso. Exclua todas as referências a isso nos favoritos e na documentação de seus próprios produtos, pois está sendo usado para fins maliciosos.

## Começo rápido

### Instalar

Este pacote pode ser instalado com:

- [npm](https://www.npmjs.com/package/owl.carousel): `npm install --save owl.carousel` ou `yarn add owl.carousel jquery`
- [bower](http://bower.io/search/?q=owl.carousel): `bower install --save owl.carousel`

Ou baixe a [versão mais recente](https://github.com/OwlCarousel2/OwlCarousel2/releases).

### Carregar

#### Webpack

Adicione jQuery por meio de "webpack.ProvidePlugin" à configuração do seu webpack:
    
     const webpack = require('webpack');
    
     //...
     plug-ins: [
         novo webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'janela.jQuery': 'jquery'
         }),
     ],
     //...

Carregue a folha de estilo e JS necessários:

```js
importar 'owl.carousel/dist/assets/owl.carousel.css';
importar 'owl.carousel';
```

#### HTML estático

Coloque a folha de estilo necessária no [top](https://developer.yahoo.com/performance/rules.html#css_top) da sua marcação:

```html
<link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
```

```html
<link rel="stylesheet" href="/bower_components/owl.carousel/dist/assets/owl.carousel.min.css" />
```

**NOTA:** Se quiser usar os estilos de navegação padrão, você também precisará incluir `owl.theme.default.css`.


Coloque o script na parte inferior(https://developer.yahoo.com/performance/rules.html#js_bottom) da sua marcação logo após o jQuery:

```html
<script src="/node_modules/jquery/dist/jquery.js"></script>
<script src="/node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
```

```html
<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/bower_components/owl.carousel/dist/owl.carousel.min.js"></script>
```

### Uso

Envolva seus itens (`div`, `a`, `img`, `span`, `li` etc.) com um elemento contêiner (`div`, `ul` etc.). Apenas a classe `owl-carousel` é obrigatória para aplicar estilos adequados:

```html
<div class="owl-carousel coruja-tema">
   <div> Seu conteúdo </div>
   <div> Seu conteúdo </div>
   <div> Seu conteúdo </div>
   <div> Seu conteúdo </div>
   <div> Seu conteúdo </div>
   <div> Seu conteúdo </div>
   <div> Seu conteúdo </div>
</div>
```
**NOTA:** A classe `owl-theme` é opcional, mas sem ela, você precisará estilizar os recursos de navegação por conta própria.


Chame a função [plugin](https://learn.jquery.com/plugins/) e seu carrossel estará pronto.

```javascript
$(documento).ready(function(){
   $('.owl-carousel').owlCarousel();
});
```

## Documentação

A documentação, incluída neste repositório no diretório raiz, é construída com [Assemble](http://assemble.io/) e está disponível publicamente em https://owlcarousel2.github.io/OwlCarousel2/. A documentação também pode ser executada localmente.

## Prédio

Este pacote vem com [Grunt](http://gruntjs.com/) e [Bower](http://bower.io/). As seguintes tarefas estão disponíveis:

   * `default` compila o CSS e JS em `/dist` e constrói o documento.
   * `dist` compila CSS e JS apenas em `/dist`.
   * `watch` observa os arquivos de origem e os cria automaticamente sempre que você salva.
   * `test` executa testes [JSHint](http://www.jshint.com/) e [QUnit](http://qunitjs.com/) sem cabeça em [PhantomJS](http://phantomjs.org/) .

Para definir quais plug-ins serão incluídos na distribuição, basta editar `/_config.json` para atender às suas necessidades.

## Contribuindo

Por favor, leia [CONTRIBUTING.md](CONTRIBUTING.md).

## Roteiro

Não deixe de conferir nossa [discussão sobre roteiro](https://github.com/OwlCarousel2/OwlCarousel2/issues/1756).


## Licença

O código e a documentação são liberados sob a [Licença MIT](LICENSE).
