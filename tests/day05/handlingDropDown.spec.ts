import test from '@playwright/test'
test("Handling dropdown with select tag with CSS selectors", async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml')

    //selectOption()
    await page.selectOption('.ui-selectonemenu',{label: 'Playwright'})
    await page.waitForTimeout(2000)
    await page.selectOption('.ui-selectonemenu',{index: 3})

    
})

test.only("Handling dropdown without select tag with CSS selectors", async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml')
    await page.locator('[id= "j_idt87:country_label"]').click()
    await page.locator('[id="j_idt87:country_3"]').click()

})