function session(batchName,batchSize){
    console.log('Hi '+batchName + " "+batchSize )
}

session('Playwright')
session('Selenium') // will not throw error but print as undefined
function session1(batchName){
    return batchName
}

console.log(session1('Playwright'))