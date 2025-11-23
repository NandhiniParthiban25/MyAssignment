var Browser = /** @class */ (function () {
    //constructor
    // constructor(){
    //     console.log("I am default constructor")
    // }
    //only one constructor can be created eitehr default or paramaterized constructor
    function Browser(bName) {
        //property
        this.browserName = 'Chrome';
        console.log(bName);
    }
    //methods
    Browser.prototype.launchBrowser = function () {
        console.log("Launching the browser");
    };
    return Browser;
}());
////Object should be created outside the calls
//if constructor is not given it creates default constructor
//let obj1= new Browser() // use this if we are using defaukt constructir
var obj1 = new Browser("Nandhini");
//access property
console.log(obj1.browserName);
//access method
obj1.launchBrowser();
