import { MyHomePage } from "./myHome";

//gp-> LoginPage
//p-> MyHomePage
//c-> HomePage

class HomePage extends MyHomePage{

clickOnLeads(){
    console.log("Clicked on Leads link")
}

}
let hp=new HomePage()
hp.loadurl()
hp.enterUsername()
hp.enterPassword()
hp.clickOnLogin()
hp.clickOnCrmsfa()
hp.clickOnLeads()