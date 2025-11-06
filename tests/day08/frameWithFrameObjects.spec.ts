import test from '@playwright/test'

test("Handiling frames wit h frame object",async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click").click();


})