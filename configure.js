const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the URL you want to launch with this app (default: https://www.icloud.com/notes/): ', (inputUrl) => {
    const url = inputUrl || 'https://www.icloud.com/notes/';
    const configContent = JSON.stringify({ url }, null, 2);
    
    fs.writeFileSync('./config.json', configContent);
    console.log(`Configuration saved! Launching the app with: ${url}`);
    rl.close();
});
