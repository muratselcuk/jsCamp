function numberTotal(number){
    let numberTotal=0
    for(let i=1; i<number; i++) {
        if(number%i==0){
            numberTotal=numberTotal+i
        }
    }
    return numberTotal
}
//console.log(numberTotal(10))

function friendNumber(number1,number2) {
    if(numberTotal(number1)==number2 && numberTotal(number2)==number1){
        console.log(number1+" ve "+ number2 + " Arkadas sayilardir.")
    }
    else{
        console.log(number1+" ve "+ number2 + " Arkadas sayi degiller")
    }
}

friendNumber(220,284)