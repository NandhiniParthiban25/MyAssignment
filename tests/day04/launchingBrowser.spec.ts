import test, { chromium, webkit } from "@playwright/test";

test("Launching the browser", async() => {
    //launch browser =>
    const browser = await chromium.launch({ headless: false , channel :"chrome"}) // this headless mode can be also defined in configuration file as well
    //window
    const context = await browser.newContext()
    //page
    const page = await context.newPage()
    //url
    await page.goto('https://platform.testleaf.com/#/')

    //to execute -> npx playwright test filename.spec.ts
    //execute from the workspace 
})

test.only("Launch with Page Fixture" , async({page}) => {
    await page.goto("https://www.google.com")
})