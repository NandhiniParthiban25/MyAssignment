import test, { chromium, webkit } from "@playwright/test";

test("Multiple context in single browser", async() => {
    //launch browser =>
    const browser = await chromium.launch({channel :"chrome"})
    //window
    const context = await browser.newContext()
    //page
    const page = await context.newPage()
    const page1 = await context.newPage()
    //url
    await page.goto('https://platform.testleaf.com/#/')
    console.log(await page.title())

    await page1.goto('https://www.google.com')
    console.log(await page1.title())

    //to execute -> npx playwright test filename.spec.ts
    //execute from the workspace 
})

test.only("Handle single window",async({page,context})=>{
    await page.goto("https:www.amazon.com")
    const data = page.locator("#twotabsearchtextbox")
    await data.fill("phones")
    await data.press("Enter")

    
    //create promise
     const promise = context.waitForEvent('page')
    //perform action
    await page.locator("//span[contains(text(),'Samsung Galaxy A16 5G A Series')]").first().click()
    //resolve promise
    const childPage = await promise
    await childPage.waitForTimeout(2000)
    console.log(await childPage.title())
    await childPage.close() // automatically goes to parent window

    await page.locator("//a[text()='Sell']").click()

   
    

})
