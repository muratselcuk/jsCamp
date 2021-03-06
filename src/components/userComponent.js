import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import  UserService  from "../services/userService.js"

console.log("User Componenet yuklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Murat", "Selcuk", "istanbul")
let user2 = new User(2,"Attila", "Selcuk", "istanbul")
userService.add(user1)
userService.add(user2)

//console.log(userService.list())

//console.log(userService.getById(2))

//userService.list()
//userService.getById(1)


let customer = {id:1, firstName:"Murat"}

//prototyping
customer.lastName = "Selcuk"

console.log(customer.lastName)

console.log("-----------------------------")
userService.load()

let customerToAdd = new Customer(1,"Mete","Selcuk", "Ayvalık", 40)
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())