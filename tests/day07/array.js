//array is collection of items can be stored  in a single variable
//[] => let browser = ["Chrome", "Firefox", "safari"]
//let browserDetails = ["chrome", 131.34 , true]
// array index starts with '0'

let empName = ["nandhini", "eyogesh", "aruna"]
console.log(empName[2])
//length of array
console.log("Length of the array: "+ empName.length)
//add emp name
empName[4] ='suseelan'
console.log("Length of the array after adding : "+ empName.length)
//what will the value in index 3 => it will be undefined

//replace value 
empName[2]= 'parthiban'

for(let i=0;i<empName.length;i++){
    console.log(empName[i])
}


//operations in array 
//1. push >> add values at the end of the array
//2. unshift >> add values at the begining of the array
//3. pop >> remove values at the end of the array
//4. shift >> remove values at the begining of the array

empName.push("Tharani")
console.log(empName)
empName.unshift("Learning")
console.log(empName)
empName.pop()
console.log(empName)
empName.shift()
console.log(empName)

empName.splice(3,2) // we cal also give like empName.splice(3,2,'Kumarn',"Madhu")
//3-> start index
//2-> how many elements to delete
//kumaran,madhu -> values to be replaced in that deleted element
console.log('Sliced: ' + empName)
empName.splice(3,2,'Kumarn',"Madhu")
console.log(empName)

let array = [1,2,3,4,5,6]
array.sort() //sort in accesending order
//for loop
// for .of -> arr will assign  new variable 
for(let value  of array){
    console.log(array)
}
for(let i=0;i<arr.length;i++){
    console.log(arr)
}