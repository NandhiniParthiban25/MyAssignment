//reverse a string and check if it is plaindrome or not

let originalWord='madam'
//let originalWord='nandhini'
let rev=originalWord.split('')
let reversedWord=''

for(let i=rev.length-1;i>=0;i--){
    reversedWord+=rev[i]
}
console.log('ReversedWord is: '+reversedWord)

if(originalWord==reversedWord){
    console.log('It’s a palindrome!')
}
else{
    console.log('Not a palindrome!')
}