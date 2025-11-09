import test  from "@playwright/test";

test.use({
    storageState: "Data/leaftapsLogin.json"
})

test("Create contact- storage state",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.locator("//a[contains(text(),'Contacts')]").click()
    await page.locator("//input[@name='accountName']").fill("TestLeaf")
})

test("Create account- storage state",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.locator("//a[contains(text(),'Accounts')]").click()
    await page.locator("//input[@name='accountName']").first().fill("TestLeaf")
})