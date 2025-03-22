// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(appName, appURL, appIcon) {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: appName,
        icon: path.join(__dirname, appIcon),
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

    win.loadURL(appURL);
    win.setMenuBarVisibility(false);

    win.on('closed', () => {
        app.quit();
    });
}

app.on('ready', () => {
    const appName = process.env.APP_NAME || 'Notes';
    const appURL = process.env.APP_URL || 'https://www.icloud.com/notes/';
    const appIcon = process.env.APP_ICON || 'icon.ico';
    createWindow(appName, appURL, appIcon);
});

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
