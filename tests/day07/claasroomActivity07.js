//1. PrintDuplicate [56,78,90,23,90,76,43,56]
let array = [56,78,90,23,90,76,43,56]
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            console.log(`Duplicate Value ${array[j]}`)
        }
    }
}

//2. data ["chrome",true,132.8]
// add index 5 -> webkit
// use push -> firefox
// use shift
// use for..of to print value

let data = ["chrome",true,132.8]
data[5] = 'webkit'
data.push("firefox")
data.shift()
for(let value of data){
    console.log(value)
}