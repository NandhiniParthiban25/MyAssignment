//union (pipe symbol is used either this or that )
let details : string | number
details= 'Nandhini'
details = 25

//intersection (ampsand symbol is used, both should be used)
//we cannot declare directly like data = tre & 'Nandhini' 
//so to resolev we use type alias (create cutom data type)
let data: boolean & string
// instead of useing the above line 9 ,we do it as below 
//custom data type
type admin={
    adminId : string
    adminPassword : string
}
type user={
    userId : string
    userStatus ? : boolean
    userPassword : string
}
type db = admin & user
let login : db = {
     adminId : 'demo',
     adminPassword : 'Admin',
     userId : 'user',
    // userStatus : true,
     userPassword : 'user'

}
console.log(login)
// to make any varible option in type custe data type we can us '?'