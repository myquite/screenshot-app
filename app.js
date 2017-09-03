const puppeteer = require('puppeteer');

(async (error) => {
  const url = 'https://myquite.github.io/';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });

  // Capture Desktop
  await page.setViewport({ width: 1440, height: 760 });
  await page.screenshot({ path: 'screenshot_desktop.png', fullPage: true });

  // Capture Mobile
  await page.setViewport({ width: 550, height: 760 });
  await page.screenshot({ path: 'screenshot_mobile.png', fullPage: true });

  if (error) {
    console.log(error);
  }
  console.log('Screenshot captured...');
    browser.close();
})();

