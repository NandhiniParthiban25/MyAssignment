let data ='playwright'

// o/p : thgirwyalp
let length= data.length
let rev=''
for(let i=length;i>=0;i--){
    //rev=rev+data.charAt(i)
    rev+=data.charAt(i)
}

console.log('Reversed string: '+rev)

//inbuild function
let reverse=data.split('').reverse()
console.log('Reversed string in array using inbuild function: '+reverse)

let reversed=data.split('').reverse().join('')
console.log('Reversed string using inbuild function: '+reversed)