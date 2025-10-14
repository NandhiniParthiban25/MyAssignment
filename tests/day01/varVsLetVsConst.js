//varf -> 1995 (stopped using this after 2015)
//let -> 2015 -> ES6
//const -> 2015 -> ES6

//var -> will do re-assginement and re-declaration
var empDetails='Nandhini'
empDetails = true //re-assginement
console.log(empDetails) // prints 'true' which is not expected

var comName='TestLeaf'
var comName='TL' //re-declaration
console.log(comName) // prints 'TL' which is not expected

//let ->will do re-assginement but cannot do re-declaration , Blocked scoped {}
let testCaseName='Leads'
testCaseName='Created Leads' //re-assginement
testCaseName=true //re-assginement
console.log(testCaseName) // prints 'true'

let testCaseId=45
//let testCaseId='TC_0023' // Throws error as it is not possible to do re-declaration

//const -> will not allow both re-declaration and re-assginement , Blocked scoped {}
//like final value - cannot rchange this 

const ts =34
//ts ='re' // re-assginement - throws error during runtime that is during execution - error: Assignment to constant variable
//const ts = 56 // Throws error as it is not possible to do re-declaration
console.log(ts)