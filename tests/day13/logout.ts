import { LoginPage } from "./login"

export class LogoutPage extends LoginPage{

    clickOnLogout(){
        console.log("Clicked on Logout link")
    }
}
let lop=new LogoutPage()
lop.loadurl()
lop.enterUsername()
lop.enterPassword()
lop.clickOnLogin()
lop.clickOnLogout()