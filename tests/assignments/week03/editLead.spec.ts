import test,{expect} from '@playwright/test'

test("Edit a Lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a/img").click()
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Find Leads']").click();
    await page.locator("//input[@name='firstName']").last().fill("Nandhini")
    await page.locator("//button[text()='Find Leads']").click();
    await page.locator("//td/div/a[@class='linktext']").first().click();
    await page.locator("//a[@class='subMenuButton' and text()='Edit']").click();
    await page.locator("#updateLeadForm_companyName").clear()
    await page.locator("#updateLeadForm_companyName").fill("Test Leaf -1")
    await page.locator("#updateLeadForm_annualRevenue").clear()
    await page.locator("#updateLeadForm_annualRevenue").fill("200000")
    await page.locator("#updateLeadForm_departmentName").clear()
    await page.locator("#updateLeadForm_departmentName").fill("Playwright new")
    await page.locator("#updateLeadForm_description").fill("Joined now started to code in JS with Playwright")
    await page.locator("//input[@name='submitButton' and @value='Update']").click()

    const companyName= await page.locator("#viewLead_companyName_sp").textContent()
    const annualRevenue = await page.locator("#viewLead_annualRevenue_sp").textContent()
    const departmentName = await page.locator("#viewLead_departmentName_sp").textContent()
    const description = await page.locator("#viewLead_description_sp").textContent()

    expect(companyName).toContain("Test Leaf -1")
    expect(annualRevenue?.replace(/[$,]/g, '').split('.')[0].trim()).toContain("200000")
    expect(departmentName).toContain("Playwright new")
    expect(description).toContain("Joined now started to code in JS with Playwright")
})