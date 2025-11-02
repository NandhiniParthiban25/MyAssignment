import test from '@playwright/test'

test("Login salesforce using playwright locators",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.getByRole("textbox",{name:"username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.getByText("Remember me").click()
    await page.getByText("Remember me").click()
    await page.getByRole("button",{name:"Log in"}).click()
})