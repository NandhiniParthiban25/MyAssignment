import test from '@playwright/test'

test("Playwright locators",async({page})=> {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm;jsessionid=93014F9E15886EBC5061A98987187BD3")

    //getByText
    await page.getByText("Admin Page").click()

    //getByRole
    await page.getByRole("link",{name:"Forgot login info?"}).click()

    //getByAltText
    await page.getByAltText("ParaBank").click()

    //getByPlaceholder
    //await page.getByPlaceholder("Search").click()
    

})