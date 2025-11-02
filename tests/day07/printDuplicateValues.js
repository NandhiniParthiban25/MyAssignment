let array = [56,78,90,23,90,76,43,56]

//nested loop
for (let i = 0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if (array[i]==array[j]){
            console.log(`Duplicate VAlues: ${array[j]}`)
        }
    }
}