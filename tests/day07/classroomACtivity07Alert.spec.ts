import test from '@playwright/test'
test("Alert classroom Activity", async({page})=>{
    page.once('dialog',type=>{
        type.accept()
    })
    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(1).click();
    await page.locator("//span[text()='Show']").nth(4).click();
})