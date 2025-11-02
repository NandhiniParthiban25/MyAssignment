import test from "@playwright/test";

test("login with Xpath", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("//input[@id='username']").fill('DemoSalesManager')
    await page.locator("(//input[@class='inputLogin'])[2]").fill('crmsfa')
    await page.locator("//input[@type='submit']").click()

    console.log(await page.title())
})