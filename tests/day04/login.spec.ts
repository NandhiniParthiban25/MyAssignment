import test from "@playwright/test";

test("Login leaftaps", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    //.first(), .last(), .nth()
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    const title = await page.title()
    console.log('Title: '+title)

    await page.locator("text='CRM/SFA'").click()

})


///to launch the reports after execution automatically 
// you have to chage in config files 
// change the -> reporter

// to create video/screenshot -> change in config file
// add video: 'on' below headless mode 
// add screenshot:'on' -> captures only final snapshot