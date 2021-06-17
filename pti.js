
do{
  //  var gasolina = parseFloat(prompt('Digite o valor da gasolina: '))
//var alcool = parseFloat(prompt('Digite o valor do Alcool: '))

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

var repetir = parseInt(alert('Deseja fazer uma nova comparação?'))
}while(repetir == sim){
    if(repetir == nao){
        alert('Obrigada, até logo!')
    }
 
}