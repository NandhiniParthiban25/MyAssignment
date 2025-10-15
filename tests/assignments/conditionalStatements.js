//if-else
let browserName = 'Chrome'
//let browserName = 'Firefox'

if(browserName=='Chrome'){
    console.log('Launching Chrome browser...')
}
else{
    console.log('Launching default browser...')
}

//Switch Case
let testType ='sanity'
//let testType ='smoke'
//let testType ='regression'
//let testType ='integration'

switch(testType){
    case 'smoke':
        console.log('Running Smoke Tests...')
        break;
    case 'sanity':
        console.log('Running Sanity Tests...')
        break;
    case 'regression':
        console.log('Running Regression Tests..')
        break;
    default:
        console.log('Running Default Smoke Tests...')
}