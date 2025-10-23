function fetchDataFromDatabase (){
    return new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        const data = true
        if(data){
            resolve("Data fetched successfully!")
        }else{
            reject("Data not found!")
        }
    },3000)
})
} 

fetchDataFromDatabase().then(result => console.log(result)).catch(error=>console.log(error))