// replace() -> replace single old char to new char (only change the 1st occurance)
let info='TestLeaf'
//'e' to 'E'
let replace = info.replace('e','E')
console.log(replace)

//replaceAll() -> change more than one char
let input ='Welcome to 2026'
console.log(input.replaceAll(/[0-9]/g, "@")) // replace numbers
console.log(input.replaceAll(/[a-z]/g,'1')) // replace alphabets
console.log(input.replaceAll(/[A-Za-z]/g,'HI')) //combininga both without removing space 
console.log(input.replaceAll(/[A-Z a-z]/g,'*')) //combininga both with removing space 
console.log(input.replaceAll(/[^0-9 ]/g, "@")) // replace all other than numbers
console.log(input.replaceAll(/[o@2]/g,'&')) // replace specific number and alphabets

//subString -> print value from start index to end index
let data = 'Limited'
//index starts from 0
console.log(data.substring(2)) //prints from 'm' to last char
console.log(data.substring(2,5)) //prints 'm' to 't' (that is end index-1)
// when -ve index is given nothing will be printed to over come this we can use slice()
console.log(data.substring(-2,-5))

//slice() -> print value from start index to end index same as subStrig but accept -ve values
let word= 'JavaScript is Blooming'
console.log(word.slice(2,4))
console.log(word.slice(3))
console.log(word.slice(-12)) // 22-12 = 12 (start index is 12) (end index -1 )
console.log(word.slice(-15,-12)) // index for -ve values should start from lower to higher value that is (-15 < -12)
console.log(word.slice(-12,-15)) // print empty as highter value is not available 
console.log(word.slice(2,-12)) // this values cannot be given (both should be either +ve or -ve ,one +ve and one -Ve is not possbile)
