import test from '@playwright/test'

test("Upload file  with Input  tage and type  as file",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    await page.locator("//span[text()='Choose']/following-sibling::input").first().setInputFiles("utils/Home Assignment - Promise.pdf")
})

test.only("Upload file with event listener when we dont have input tag",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    //create a promise
    const fileupload = page.waitForEvent('filechooser')
    //action
    await page.locator("//span[text()='Choose']/following-sibling::input").first().click()
    //resolve it 
    const upload = await fileupload
    await upload.setFiles("utils/Home Assignment - Promise.pdf")
})