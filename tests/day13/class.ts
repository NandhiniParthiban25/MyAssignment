export class Browser{ //to use this calss in anyother file use export keyword

    //property
    browserName:String ="Chrome"
    browserVersion: number 

    //methods
    launchBrowser(){
        console.log("Launching the browser")
    }
    //constructor
    // constructor(){
    //     console.log("I am default constructor")
    // }
    //only one constructor can be created eitehr default or paramaterized constructor
    constructor(bName:string,browserVersion:number){
        console.log(bName)
        //this.browserName=browserName  //assign value to property
        //access current calss property, method and constructor
        console.log(this.browserVersion=browserVersion)

    }
}
////Object should be created outside the calls
//if constructor is not given it creates default constructor
//let obj1= new Browser() // use this if we are using defaukt constructir
let obj1= new Browser("Nandhini",20)

//access property
console.log(obj1.browserName)
//access method
obj1.launchBrowser()