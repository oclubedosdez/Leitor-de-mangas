// function $(elemento){
//     return document.getElementById(elemento);
//     }
    
//     function addEvent(obj, evType, fn){
//     try{obj.addEventListener(evType, fn, false);}catch(e){}
//     try{obj.attachEvent("on"+evType, fn);}catch(e){}
//     }
    
//     function editar(param){
//     var elem = param;
//     var input = document.createElement("input");
//     input.setAttribute("type","text");
//     input.setAttribute("value",elem.firstChild.nodeValue);
//     removerFilhos(elem);
//     elem.appendChild(input);
//     input.focus();
//     input.select();
//     addEvent(input,"blur",function(){
//     removerFilhos(elem);
//     elem.appendChild(document.createTextNode(input.value));
//     });
//     }

//     function removerFilhos(param){
//         for(var i=0,elem;elem = param.childNodes[i];i++){
//         elem.parentNode.removeChild(elem);
//         }
//         }
        
//         window.onload = function(){
//         addEvent($("titulo"),"click",new Function("editar(this)"));
//         }


var h2 = document.querySelector("h2");
var b = document.querySelector("button")

b.addEventListener("click", function() {
    h2.toggleAtribute("contenteditable");
    h2.hasAttribute("contenteditable")
    ? (b.innerText = "Salvar")
    : (b.innerText = "editar")
})