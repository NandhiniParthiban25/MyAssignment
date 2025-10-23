function a(empName,callback){
    console.log(empName)
    callback(121)
}
function b(empID,callback){
    console.log(empID)
    callback(true)
}
function c(empStatus){
    console.log(empStatus)
}
a('Nandhini',b)