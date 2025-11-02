//1. Using funtion expression
function oddOrEvenExp(num){
    if(num%2 == 0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}
oddOrEvenExp(30)
//2. using arrow function 
const oddOrEvenArrow =(num)=> {
 if(num%2 == 0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}
oddOrEvenArrow(3)