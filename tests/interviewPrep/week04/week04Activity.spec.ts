import test, { expect } from "@playwright/test";

test("Week 04 Handling Alerts",async({page})=>{
    page.on('dialog',dialog =>{
        dialog.dismiss();
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.locator("//button[text()='Click for JS Confirm']").click();
    expect(page.locator("#result")).toContainText("You clicked: Cancel");
    

})