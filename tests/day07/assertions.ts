//Assertions in typescript
let price: number
price = 34567

//2 types of assertion 
//1. using keyword 'as' => example price as number
//2. using breackets <datatype>variable => example <number>price

const am1 = price as number
const am2 = <number>price
console.log(am1) // prints the values not true or false 
console.log(am2) // prints the values not true or false 

//here we cannot compare values , we can only verify the data type of the varibale declared 
