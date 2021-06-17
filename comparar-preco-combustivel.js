function compararPrecoCombustivel(alcool, gasolina){
return alcool / gasolina;
}

function calcularPrecoCombustivel () {
    do{
   var gasolina = parseFloat(prompt('Digite o valor da gasolina: '))
   var alcool = parseFloat(prompt('Digite o valor do Alcool: '))
    
    var resultado = (alcool / gasolina)
    alert (resultado)
    const taxaComparacao = 0.7;
    if(resultado > taxaComparacao){
      alert('Compensa abastecer com gasolina')
    }
    if(resultado < taxaComparacao){
      alert('Compensa abastecer com alcool')
    }if(resultado === 0.7){
      alert('Tanto faz abastecer com Gasolina ou alcool')
    }
    var repetir = parseInt(alert('Deseja fazer uma nova comparação? Digite 1 para sim ou 2 para não'))
    }
    while(repetir == '1')
        if(repetir == '2'){
            alert('Obrigada, até logo!')
    }
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
        texto = 'Tanto faz abastecer com Gasolina ou alcool'
    }
    res.innerHTML = `A taxa de variação é ${resultado} <strong>${texto}</strong.`;

}