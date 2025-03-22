const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Notes',
        icon: path.join(__dirname, 'icon.ico'),
        transparent: true,
        frame: false,
        alwaysOnTop: false,
        resizable: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            enableRemoteModule: false,
            spellcheck: false,
            devTools: false,
            backgroundThrottling: false,
            webSecurity: true,
            hardwareAcceleration: true,
        },
    });

    win.loadURL('https://www.icloud.com/notes/');
    win.setMenuBarVisibility(false);

    // Close the app properly when the window is closed
    win.on('closed', () => {
        app.quit();
    });

    // Handle close button to properly quit the app
    win.on('close', (event) => {
        event.preventDefault();
        app.quit();
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
