const { constants } = require("buffer")
const { error } = require("console")

let promise=new Promise((resolve,reject)=>{

    console.log("1st Output")

    setTimeout(()=>{
        resolve("2nd Output")
    },3000)
})
promise.then(result => console.log(result)).catch(error=>console.log(error))