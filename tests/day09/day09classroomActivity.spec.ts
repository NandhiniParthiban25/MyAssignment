import test from '@playwright/test'

test("Handle Multiple Window",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")

//create Promise
const [mulWindow]=await Promise.all([

    //action
    context.waitForEvent('page'),
 page.locator("//span[text()='Open Multiple']").click()
])

//[window -> parent ,c1,c2,c3,c4.....]
//count of windows is open
await page.waitForTimeout(10000)
const count=mulWindow.context().pages()
console.log(count.length)

//title -> Best away to handle multiple window
let dashBroad:any
let webTable:any 

for(let i=0;i<count.length;i++){
const title=await count[i].title()
// console.log(title)
// await page.waitForTimeout(2000)

if(title==='Web Table'){
    //resolve the promise
  webTable=count[i]  
}else if(title==='Dashboard'){
    dashBroad=count[i]
}

}

await webTable.locator("//input[@id='form:j_idt89:globalFilter']").fill("India")
await dashBroad.locator("//input[@id='email']").fill("nandhiniparthi25@gmail.com")
await page.bringToFront()

await page.waitForTimeout(2000)


})
