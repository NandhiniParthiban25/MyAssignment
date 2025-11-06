import test from '@playwright/test'

test("Handling frame with help of index value",async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[1]").locator("#Click").click();
    
})