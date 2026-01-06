const fs= require('fs');
const {browserSync} = require('vibium');

// Launch a new browser using Vibium
const vibe = browserSync.launch({ headless: true });

vibe.go('https://www.saucedemo.com/');

console.log('Loaded Sauce Demo homepage');

// Take a screenshot of the homepage
const pngData = vibe.screenshot();
fs.writeFileSync('saucedemo_homepage.png', pngData);
console.log('Screenshot saved as saucedemo_homepage.png');

//Find and click the link

const loginButton = vibe.find('[data-test="login-button"]');
console.log('Found login button');
loginButton.click();
console.log('Clicked login button');

vibe.quit();
console.log('Browser session ended');