function compararPrecoCombustivel(alcool, gasolina){
return alcool / gasolina;
}

function calcular() {

    var gasolina = Number(document.getElementById('gasolina').value);
    var alcool = Number(document.getElementById('alcool').value)
    const resultado = compararPrecoCombustivel(alcool, gasolina ); 
  
    var res = document.getElementById('res');
    var texto = "";
    const taxaComparacao = 0.7
    if (resultado > taxaComparacao) {
        texto = 'Compensa abastecer com gasolina'
    }
    if (resultado < taxaComparacao) {
        texto = 'Compensa abastecer com alcool'
    } if (resultado === 0.7) {
        texto = 'Tanto faz abastecer com Gasolina ou Alcool'
    }
    res.innerHTML = `A taxa de variação é ${resultado} <strong>${texto}</strong.`;

}