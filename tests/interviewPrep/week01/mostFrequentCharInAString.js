//Find the most frequent character in a string

let str = "successaaaa";

let maxChar = "";
let maxCount = 0;

for (let i=0;i<str.length;i++) {
  let charcount = str.split(str.charAt(i)).length - 1;
  
  console.log(str.split(str.charAt(i)));
  
  console.log(count);
  
  if (charcount > maxCount) 
  {     
    maxCount = charcount;
        
  }
  console.log(maxCount);
  
}

console.log(`Most frequent character: ' (${maxCount} times)`);