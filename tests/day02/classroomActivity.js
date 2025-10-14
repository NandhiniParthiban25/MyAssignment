//count the number of characters
/*

*/

let empName= 'Nandhini'
let tragetChar = 'i'
let count = 0
for(let i=0;i<empName.length;i++)
{
    if(empName.charAt(i)==tragetChar){
        count++
    }
}
console.log("Count is: "+count)