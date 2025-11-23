import test from '@playwright/test'

test("load url",async({page})=>{

    await page.goto("https://www.facebook.com/")
})

test.skip("Skip this testcase",async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("iphone13")
})

test.fail("This testcase will fail",async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.locator("qQ").fill("samsung galaxy s22 ultra")
})

test.fixme("This testcase is blocked by a bug",async({page})=>{

    await page.goto("https://www.myntra.com/")
    await page.locator("[name='search']").fill("men's t shirts")            

})

test("Add information of test case",async({page})=>{
    test.info().annotations.push({type:`Smoke test`,description:`This is my smoke test`},
        {type:`author`,description:`Dilip`}
    )

    test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
      });
     await page.goto("https://www.snapdeal.com/")
     await page.waitForTimeout(5000)

})
