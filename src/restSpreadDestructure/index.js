//rest
//params
//varArgs
let showProducts = function(id,...product){
    console.log(id)
    console.log(product)
}

console.log(typeof showProducts)
showProducts(10,"elma","armut", "karpuz")

//spread
let points =[1,2,3,4,50,4,60,15]
console.log(...points)
console.log(Math.max(...points))
console.log("ABC", "D",..."EFG","H")

//Destructuring
let populations =[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1,number]){
    console.log(small1)
}

someFunction(populations)

let category = {id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} =category
console.log(id)
console.log(name)