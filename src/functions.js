function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi: " + productName + " adet : " + quantity)
}

addToCart(10)
addToCart(20,"Yumurta")
addToCart(1,"Karpuz")

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function() {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice){

}

addToCart2("Elma", 5, 10)

let product1 ={productName:"Elma", unitPrice:10, quantity:5}
function addToCart3(product){
    console.log("Ürün : "+ product.productName)
    console.log("Adet : "+ product.quantity)
    console.log("Fiyat : "+ product.unitPrice)
}

addToCart3(product1)

let product2 ={productName:"Elma", unitPrice:10, quantity:5}
let product3 ={productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(number1, number2){
    console.log(number1+number2)
}

add(20,30)

function add2(bisey,...numbers){ //... rest operatoru
    let total=0    
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total) 
    console.log(bisey) 
}

add2(20,30,40,10)

let numbers = [30,10,500,600,150]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"iç anadolu", population:"20M"},
    {name:"marmara", population:"30M" },
    {name:"karadeniz", population:"10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)

let newproductName, newunitPrice, newquantity
({productName:newproductName, unitPrice:newunitPrice, quantity:newquantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)