import test from '@playwright/test';

test.describe("Run Smoke tests",()=>{

   // test.describe.configure({mode:"parallel"})

        test.describe.configure({mode:"default"})

           //test.describe.configure({mode:"serial"})

    test("load url",async({page})=>{
    
        await page.goto("https://www.facebook.com/")
        await page.waitForTimeout(5000);
    })
    
    test("testcase 1",async({page})=>{
    
        await page.goto("https://www.amazon.in/")
        await page.locator("#twotabsearchtextbox").fill("iphone13")
        await page.waitForTimeout(5000);
    })
    
    test("testcase 2",async({page})=>{
    
        await page.goto("https://www.flipkart.com/")
        await page.locator("q").fill("samsung galaxy s22 ultra")
        await page.waitForTimeout(5000);
    })











})


