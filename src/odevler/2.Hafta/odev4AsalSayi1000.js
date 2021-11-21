function findPrime(number) {
    if (number==1) {
        return false
    }
    if (number==2) {
        return true
    }
    for (let i=2; i<number; i++){
        if(number%i==0){
            return false
        }
    }
    return true
}

//console.log(findPrime(9))

function listPrime(number) {
   for (let j=2; j<number; j++){
       if (findPrime(j)) {
           console.log(j)
       }
   }
}

listPrime(1000)