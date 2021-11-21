function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let prime="Asal"
            if (numbers[i]==1) {
                prime="Asal değil"
            }
        for (let j=2; j<numbers[i]; j++) {
            if (numbers[i]%j==0) {
                prime="Asal değil"
            }
        }   
        console.log(numbers[i]+" : " + prime)  
    }
    
}

findPrime(9,2,5,1,8,3,17,18,20,21,23,997)