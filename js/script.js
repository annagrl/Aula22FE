var barraXPProgressoGlobal = 0;
let barraXPTamanhoInicialGlobal = 0;
var barraVidaProgressoGlobal = 0;
let barraVidaTamanhoInicialGlobal = 0;

function evoluiBarraXP(recebeValor) {

    var elem = document.getElementById("barraXPProgresso");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (barraXPTamanhoInicialGlobal >= recebeValor) {
            //Finaliza a execução do lopping da linha 13
            clearInterval(id);
        } else {
            barraXPTamanhoInicialGlobal++; //Incrementa o valor do tamanho-inicial da barra
            //Altera os estilos do css (Efetiva a animação visual)
            elem.style.width = barraXPTamanhoInicialGlobal + "%";
            elem.innerHTML = barraXPTamanhoInicialGlobal + "%";
        }
    }
}



function evoluir(){


    if (barraXPProgressoGlobal < 100) {
        barraXPProgressoGlobal += 10; 
        evoluiBarraXP(barraXPProgressoGlobal);
    } 
}
