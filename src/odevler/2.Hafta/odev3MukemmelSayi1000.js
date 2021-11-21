function perfectNumber(number){
    let numberTotal=0
    for(let i=1; i<number; i++) {
        if(number%i==0){
            numberTotal=numberTotal+i
        }
    }
    if (number==numberTotal) {
        return true
        
    }
}
function listPerfectNumber(number){
    for (let j=1; j<number;j++){
        if(perfectNumber(j)){
            console.log(j + " : Mukemmel sayidir.")
        }
    }
}

listPerfectNumber(1001)