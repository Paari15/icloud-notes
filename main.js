const { app, BrowserWindow } = require('electron');
const path = require('path');

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

    win.loadURL('https://www.icloud.com/notes/');
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
