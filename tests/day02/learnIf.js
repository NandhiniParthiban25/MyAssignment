let number=10

//if block 
if(number>0){
//block scoped
let num=45
console.log("The number is positive :"+ number) //number =10
console.log("Under Block scoped :"+num)
}

console.log("Outside the block :"+number)


let mark=30

if(mark>=40){
    console.log("pass")
     let mark1=40
     console.log(mark1)
}else{
    console.log("fail")
    let mark =30
    console.log(mark)

}

let num=0

if(num>0){
    console.log("Positive")
}else if(num==0){
console.log("neutral number")
}else{
    console.log("Negative")
}