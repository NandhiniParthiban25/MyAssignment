import test, { expect } from '@playwright/test'

test("Alert and frame",async({page})=>{
    page.on('dialog', dialog =>{
        const type = dialog.type();
        const message = dialog.message();
        console.log(`The type of alert is ${type} and the message on the alert is ${message}`);
        dialog.accept();
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm",{ timeout: 60000 , waitUntil: "domcontentloaded" });
    await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click();
    await expect(page.frameLocator("#iframeResult").locator("#demo")).toContainText("OK!");

})