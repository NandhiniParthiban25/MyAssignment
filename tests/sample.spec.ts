import test, { chromium, webkit } from "@playwright/test";

test("Launching the browser",async()=>{
    //launch browser =>
    const browser = await webkit.launch({ headless: false})
    //window
    const context = await browser.newContext()
    //page
    const page = await context.newPage()
    //url
    await page.goto('https://platform.testleaf.com/#/')

    //to execute -> npx playwright test filename.spec.ts
    //execute fm the workspace 
})