import {test} from "@playwright/test"

test.use({
    storageState:"Data/salesforceLogin.json"
})

test("Creating conatct using storage state",async({page})=>{
  await page.goto("https://orgfarm-2eb006a8e4-dev-ed.develop.lightning.force.com/lightning/page/home")
    
})