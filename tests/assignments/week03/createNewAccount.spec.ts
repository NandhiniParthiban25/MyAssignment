import test,{expect} from '@playwright/test'

test.use({
    storageState:"Data/salesforceLogin.json"
})

test("Create a new Account",async({page})=>{
    // await page.goto("https://login.salesforce.com/")
    // await page.getByLabel("Username").fill("nandhiniparthi25831@agentforce.com")
    // await page.getByLabel("Password").fill("Nandhini98@")
    // await page.locator("#Login").click();
    // await page.waitForTimeout(15000)
    // await page.waitForLoadState('load');
    // const title = await page.title()
    // expect(title).toContain("Home")
    // const url =  await page.url()
    // expect(url).toContain("https://orgfarm")
    await page.goto("https://orgfarm-2eb006a8e4-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
    await page.locator("//div[@class='appLauncher slds-context-bar__icon-action']").click();
    //await page.getByText("View All").click(); //Not working
    await page.locator("//button[text()='View All']").click()
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.locator("(//lightning-formatted-rich-text/span)[1]").click()
    await page.locator("one-app-nav-bar-item-root:nth-child(3) > a > span").click()
    await page.getByRole("button",{name:"New"}).click();
    await page.locator(" [name='Name']").fill("Nandhini Test")
    await page.locator("//button[text()='Save']").click()
    const toast = await page.locator("//span[contains(@class,'toastMessage')]")
    await expect(toast).toBeVisible()
    await expect(toast).toContainText(" was created.")

})