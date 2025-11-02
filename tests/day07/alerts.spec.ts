//By default playwright dismiss th alerts (that is canel the laret)
//if tehre is only one button , that button woould be clicked if not it would cancel the alert
import test from '@playwright/test'

test("Auto Dismis alert",async({page})=>{
    await page.goto("https://leafground.com/alert.xhtml")
    //nth - index will start from 0
    await page.locator("//span[text()='Show']").nth(1).click();

})

//  page.once => one of the event listener that  handles only 1st alert 
test("Handle alert with page.Once",async({page})=>{
    page.once('dialog',dialogType=>{
        //what type of alert
        const type = dialogType.type()
        console.log(type)
        //print the message from the dialogBox
        console.log(dialogType.message())
        //handle alert
        dialogType.accept()
    })

    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click(); //as we used page.once this will be accepted
    await page.locator("//span[text()='Show']").nth(1).click(); //this will be rejected

})