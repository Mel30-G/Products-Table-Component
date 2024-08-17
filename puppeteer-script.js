const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' // Actualiza esta ruta si es necesario
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3001/api/products');
  
  // Aquí puedes agregar más acciones, como capturar pantallas, interactuar con elementos, etc.
  
  await browser.close();
})();
