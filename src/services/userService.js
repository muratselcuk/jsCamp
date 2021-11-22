export default class UserService{
    constructor(loggerService){
        this.users =[]
        this.loggerService = loggerService
    }


    add(user){
        this.users.push(user)
        this.loggerService.log(user)
        //console.log("Kullanici eklendi" + user)
    }

    list(){
        return this.users
        //console.log("Kullanicilar listelendi.")
    }

    getById(id){
        return this.users.find(u=>u.id===id)
        //console.log("Kullanici detayi getirildi")
    }
}