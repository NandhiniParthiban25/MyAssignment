function a(empName,callback){
    console.log(empName)
    callback(121)
}
function b(empID){
    console.log(empID)
}
a('Nandhini',b)