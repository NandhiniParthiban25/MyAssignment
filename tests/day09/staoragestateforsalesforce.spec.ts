import {test} from "@playwright/test"
test('Storage state for Salesforce account',async({page})=>{
await page.goto('https://login.salesforce.com')
await page.fill("#username","nandhiniparthi25831@agentforce.com")
await page.fill("#password","Nandhini98@")
await page.click('#Login')
await page.waitForTimeout(10000)
//using storage state-store the information in the file with json format
await page.context().storageState({path:"Data/salesforceLogin.json"})
await page.waitForTimeout(3000)
})