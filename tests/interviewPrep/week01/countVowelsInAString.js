//Count the number of vowels in a string

let vowels="aeiou"

let empName="udai"

let count=0;
for(let i=0;i<empName.length;i++)
{

    if(vowels.includes(empName.charAt(i)))
    {
        count++;
    }
}

console.log(count);