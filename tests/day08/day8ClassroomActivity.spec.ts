import test from '@playwright/test'
import { Console } from 'console'

test("ClassroomActivity handiling alerts",async({page})=>{
    page.on('dialog',dialog => {
        const type = dialog.type()
        if(type === 'alert'){
            dialog.accept()
        }
        else if (type === 'confirm'){
            dialog.dismiss();
        }
        else{
            dialog.accept("Nandhini")
        }
    })
    await page.goto("https://leafground.com/alert.xhtml");
    await page.locator("//button[@type='submit']").first().click()
    await page.locator("//button[@type='submit']").nth(1).click();
    await page.locator("(//button[@type='submit'])[4]").click();
})
test("classroomActivity",async({page})=>{
     await page.goto("https://www.leafground.com/frame.xhtml")
     await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click();
     const innerText = await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").innerText()
     console.log(innerText)
})
test.only("classroomActivity handiling froames with frame object",async({page})=>{
     await page.goto("https://www.leafground.com/frame.xhtml")
     await page.frame({url:"https://www.leafground.com/framebutton.xhtml"})?.locator("#Click").click();
     const innerText = await page.frame({url:"https://www.leafground.com/framebutton.xhtml"})?.locator("#Click").innerText()
     console.log(innerText)
})