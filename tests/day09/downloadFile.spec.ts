//for download we can use only event listener

import test from '@playwright/test'

test ("File downlod with event Listner", async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    //crate promise 
    const download =page.waitForEvent('download')
    //action
    await page.locator("//span[text()='Download']").click()
    //resolve 
    const filedownload = await download
    //set the path 
    await filedownload.saveAs("utils/download/"+filedownload.suggestedFilename())
})