// Regenerates assets/cv.pdf from index.html using the site's print styles.
// Needs Node.js and Playwright:  npm install playwright && npx playwright install chromium
// Run from the repository root:  node _tools/make-cv-pdf.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(root, 'index.html'));
  await page.pdf({
    path: path.join(root, 'assets', 'cv.pdf'),
    format: 'A4',
    margin: { top: '16mm', bottom: '16mm', left: '16mm', right: '16mm' },
    printBackground: true,
  });
  await browser.close();
  console.log('Wrote assets/cv.pdf');
})();
