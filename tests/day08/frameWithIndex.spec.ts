import test from '@playwright/test'

test("Handling frame with help of index value",async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    //count teh number of frames in the wepage
    const totalFrame = page.frames();
    console.log("Number of frames: "+totalFrame.length)
    //it will count main page as one frmae
    //index value start from '0'
    //[0] > main page,[1] > f1,[2] > f2,[3] > f3,[4] > f4

    const frame= totalFrame[1]
    await frame.locator("#Click").click()
    const frame1= totalFrame[4]
    await frame1.locator("#Click").click()
    const frame2= totalFrame[5]
    await frame2.locator("#Click").click()

})