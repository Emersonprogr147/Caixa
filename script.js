let valor = prompt("Digite o valor a ser sacado") 

let resto = Number(valor) //80 30 

while(resto >= 100){
    document.write('<img src="img/100.jpg">') 
    resto = resto - 100 
}

while(resto >= 50){ 
    document.write('<img src="img/50.jpg">') 
    resto = resto - 50 // 0
}

while(resto >= 20){ 
    document.write('<img src="img/20.jpg">')
    resto = resto - 20
}

while(resto >= 10){ //0
    document.write('<img src="img/10.jpg">')
    resto = resto - 10
}



if(resto > 0) {
    document.write("<br /><br />Sobrou R$ "+resto.toFixed(2)+", o valor será devolvido para a sua conta")
}