abstract class Wrapper{

//0 to 100 abstract methods
//both abstract and non-abstract methods

//non-abstract method -normal method
 loadUrl():void{
    console.log("Loading URL");
}

abstract launchBrowser():void

//abstract method
abstract loginInfo():void 
}


class TestCase extends Wrapper{
    loginInfo(): void {
        console.log("Login Info");

    }

    launchBrowser(): void {
        console.log("Launching Browser");
    }



}
let t1=new TestCase();
t1.loadUrl();
t1.loginInfo();
