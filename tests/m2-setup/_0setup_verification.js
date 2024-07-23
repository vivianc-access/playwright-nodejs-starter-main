const { chromium } = require('@playwright/test');

(async function firstScript() {   //  IIFE (Immediately Invoked Function Expression)
  const browser = await chromium.launch();  
  await browser.close();
  console.log("we reached this line");
})();