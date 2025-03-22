const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the URL you want to launch with this app (e.g., https://youtube.com): ', (url) => {
  const configContent = `module.exports = { url: "${url}" };`;
  
  fs.writeFileSync('./config.js', configContent);
  console.log(`Configuration saved! Launching the app with: ${url}`);
  rl.close();
});
