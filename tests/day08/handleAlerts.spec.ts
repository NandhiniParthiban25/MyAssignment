import test from '@playwright/test'

test("Handling multiple alerts",async({page})=>{
    page.on('dialog',alertType => {
        const type = alertType.type();
        console.log(type)
        if(type === 'alert'){
            alertType.accept();
        }
        else if (type === 'confirm'){
            //alertType.accept();
            alertType.dismiss();
        }
        else{
            alertType.accept("Nandhini")
            //alertType.dismiss();
        }
    })

    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click(); //as we used page.on this will be accepted
    await page.locator("//span[text()='Show']").nth(1).click(); //this will be also be accepted /rejected based on the code
    await page.locator("//span[text()='Show']").nth(4).click();



})