import test, {expect} from '@playwright/test'

test("hard assert ",async({page})=>{
    await page.goto("https://www.leafground.com/input.xhtml")

    //hard assert -> will stop the execution 
    await expect(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:10000}) //this is a textbox so it will be enable only
    console.log("Assertion done") //this line will not be executed
})
test("Auto retry assertion ",async({page})=>{
    await page.goto("https://www.leafground.com/input.xhtml")

    await expect(page.getByPlaceholder("Babu Manickam")).toBeEnabled() //this is a textbox so it will be enable only
    console.log("Assertion done") 
})
test.only("Non retry assertion ",async({page})=>{
    await page.goto("https://www.leafground.com/input.xhtml")
    const title = await page.title()
    const actualTitle = "Input Components"

    expect(actualTitle).toEqual(title)
    console.log("Assertion Successful")
})
test.only("soft assertion ",async({page})=>{
    await page.goto("https://www.leafground.com/input.xhtml")
    const title = await page.title()
    const actualTitle = "Input components"

    expect.soft(actualTitle).toEqual(title)
    console.log("Assertion Successful")
})