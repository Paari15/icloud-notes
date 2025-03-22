const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

// Check if config exists, otherwise set default URL
const configPath = path.join(__dirname, 'config.json');
let url = 'https://www.icloud.com/notes/';

if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    url = config.url || url;
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Notes',
        icon: path.join(__dirname, 'icon.ico'),
        transparent: false,
        frame: true,
        alwaysOnTop: false,
        resizable: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            enableRemoteModule: false,
            spellcheck: false,
            devTools: false,
            backgroundThrottling: true,
            webSecurity: true,
            hardwareAcceleration: false,
        },
    });

    win.loadURL(url);
    win.setMenuBarVisibility(false);

    // Properly handle the window close to kill the app
    win.on('closed', () => {
        app.quit();
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit(); // Kill the entire app when all windows are closed
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
