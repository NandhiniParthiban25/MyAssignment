/*
ClassRoom:
Use PageFixture
Url:https://www.telerik.com/contact
1st dropdown -> index
2nd dropdown -> value
3rd dropdown -> label
*/
import test from "@playwright/test"

test("Handling dropdown using select tag - classroom activity", async({page})=> {
    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("#Dropdown-1", {index: 4})
    await page.selectOption("[name='DropdownListFieldController']",{value: 'Kendo UI for jQuery'})
    await page.selectOption(".js-country-field",{label:'Canada'})
})

test.only("Login leaftaps", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()

    await page.waitForTimeout(3000)
    console.log(await page.title())

    await page.locator("//button[@title='App Launcher']").click()
    

})