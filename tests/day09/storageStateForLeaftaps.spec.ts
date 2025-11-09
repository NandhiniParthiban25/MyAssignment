import test from '@playwright/test'

test("Storage State for Leaftaps",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@type='submit']").click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    await page.context().storageState({path: "Data/leaftapsLogin.json"})

})