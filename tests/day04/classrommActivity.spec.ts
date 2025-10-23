import test from "@playwright/test";

test("Login leaftaps", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator(".input.r4.wide.mb16.mt8.password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    //page.waitForLoadState('domcontentloaded') -> not working
    await page.waitForTimeout(5000)
    const title = await page.title()
    console.log('Title: ' + title)
    await page.waitForTimeout(5000)
    

})