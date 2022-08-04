// In Cypress/plugin folder
const puppeteer = require("puppeteer");

module.exports = {

    debuggingPort: "",
    setDebuggingPortMyService(port) {

            [, debuggingPort] = port;
            return null;
    },
    async LcciLogin(options ={}){

        const username = options.username;
        const password = options.password;
        const appUrl = options.appUrl;
        const emailSelector = "[name='loginfmt']";
        const passwordSelector = "[name='passwd']";
        const nextButtonSelector = "[id='idSIButton9']";

        const browser = await puppeteer.connect({
            browserURL: `http://localhost:${debuggingPort}`,
           // headless: true,
        });

        const page = await browser.newPage();
    
            await page.goto(
                appUrl,
                { waitUntil: 'networkidle2', timeout: 0}
                );
            await page.waitForTimeout(10000);
    
            if (page.url().startsWith(appUrl)) {
    
                
                await page.close();
                return {};
            }
    
            await page.type(emailSelector, username);
            await page.click(nextButtonSelector);
            await page.waitForTimeout(10000);
    
            await page.type(passwordSelector, password);
            await page.click(nextButtonSelector);
            await page.waitForTimeout(10000);
    
          //  await page.screenshot({ path : 'capture.png'})
            await page.close();
            return {};
        

    },

};