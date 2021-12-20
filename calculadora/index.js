let valor ;
let result;
function calcular(n1){
valor = document.calculadora.visor.value += n1

}

function apaga(){
    document.calculadora.visor.value = " "
}

function resultCalcular(){
    result = eval(valor);
    document.calculadora.visor.value = result;
}

