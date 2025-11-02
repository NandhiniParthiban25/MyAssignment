import test,{expect} from '@playwright/test'

test("Create a lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a/img").click()
    await page.getByText("Create Lead").first().click();
    await page.locator("#createLeadForm_companyName").fill("Test Leaf")
    await page.locator("#createLeadForm_firstName").fill("Nandhini")
    await page.locator("#createLeadForm_lastName").fill("Parthiban")
    await page.locator("#createLeadForm_personalTitle").fill("Learner")
    await page.locator("#createLeadForm_generalProfTitle").fill("Student")
    await page.locator("#createLeadForm_annualRevenue").fill("100000")
    await page.locator("#createLeadForm_departmentName").fill("Playwright")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("7896541230")
    await page.locator("//input[@name='submitButton']").click()
    
    //auto -retry 
    console.log("Auto Retry Assertion")
   await expect(page.locator("#viewLead_companyName_sp")).toContainText("Test Leaf")
   await expect(page.locator("#viewLead_firstName_sp")).toContainText("Nandhini")
   await expect(page.locator("#viewLead_lastName_sp")).toContainText("Parthiban")
   await expect(page.locator("#viewLead_statusId_sp")).toContainText("Assigned")

   //Non retry
   console.log("Non Retry Assertion")
   const companyName= await page.locator("#viewLead_companyName_sp").textContent()
   const firstName= await page.locator("#viewLead_firstName_sp").textContent()
   const lastName = await page.locator("#viewLead_lastName_sp").textContent()
   const status= await page.locator("#viewLead_statusId_sp").textContent()
   
   expect(companyName).toContain("Test Leaf")
   expect(firstName).toEqual("Nandhini")
   expect(lastName).toEqual("Parthiban")
   expect(status).toEqual("Assigned")
})