
let select_element = [
    '<option value="./01.html">capitulo 01</option>',
    '<option value="./02.html">capitulo 02</option>',
    '<option value="./03.html">capitulo 03</option>',
    '<option value="./04.html">capitulo 04</option>',
    '<option value="./05.html">capitulo 05</option>',
    '<option value="./06.html">capitulo 06</option>',
    '<option value="./07.html">capitulo 07</option>',
    '<option value="./08.html">capitulo 08</option>',
    '<option value="./09.html">capitulo 09</option>',
    '<option value="./10.html">capitulo 10</option>',
    '<option value="./11.html">capitulo 11</option>',
    '<option value="./12.html">capitulo 12</option>',
    '<option value="./12.html">capitulo 12</option>',
    '<option value="./13.html">capitulo 13</option>',
    '<option value="./14.html">capitulo 14</option>',
    '<option value="./15.html">capitulo 15</option>',
    '<option value="./16.html">capitulo 16</option>',
    '<option value="./17.html">capitulo 17</option>',
    '<option value="./18.html">capitulo 18</option>',
    '<option value="./18.html">capitulo 18</option>',
    '<option value="./19.html">capitulo 19</option>',
    '<option value="./20.html">capitulo 20</option>',
    '<option value="./21.html">capitulo 21</option>',
    '<option value="./22.html">capitulo 22</option>',
    '<option value="./22.html">capitulo 23</option>',
];




var modo_escuro = document.querySelector('.modo-claro');
var botao = document.querySelector('.modo-claro')
var cabecalho = document.querySelector('.titulo2')

modo_escuro.addEventListener('click', function () {
    document.body.classList.toggle('modo_black')

    if (document.body.classList.contains('modo_black')) {
        botao.innerHTML = 'Modo claro'
        botao.classList.add('botao_escuro')
        cabecalho.classList.add('modo_escuro')
        document.getElementById('logo').style.border = '4px solid black'
    } else {
        botao.innerHTML = 'Modo escuro'
        cabecalho.classList.remove('modo_escuro')
        botao.classList.remove('botao_escuro')
        document.getElementById('logo').style.border = '2px solid white'
    }
})


var titulo1 = document.querySelector('.titulo1');
var titulo2 = document.querySelector('.titulo2');
var nome = document.getElementById('nome_manga');


var nome_manga = 'My Wife Is From a Thousand Years Ago'
var caminho  = 'https://oclubedosdez.github.io/Imagens/mangas/Wojia%20Laopo%20Laizi%20Yiqian%20Nian%20Qian%20%E2%80%93%20My%20Wife%20Is%20From%20a%20Thousand%20Years%20Ago/capitulo-'
