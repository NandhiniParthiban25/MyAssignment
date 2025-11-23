import { LoginPage } from "./login"
import { LogoutPage } from "./logout"

//LoginPage is parent class
//MyHomePage is child class
export class MyHomePage extends LoginPage{

    clickOnCrmsfa(){
        console.log("Clicked on Crmsfa link")
    }
}

let home = new MyHomePage()
home.loadurl()
home.enterUsername()
home.enterPassword()
home.clickOnLogin()
home.clickOnCrmsfa()

let log=new LogoutPage()
log.loadurl()
log.enterUsername()
log.enterPassword()
log.clickOnLogin()
log.clickOnLogout()

