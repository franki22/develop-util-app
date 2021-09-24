const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {

    const win = new BrowserWindow({
        resizeable: false,
        moveable: false,
        alwaysOnTop: true,
        fullscreen: true,
        kiosk: true,
        autoHideMenuBar: true,
    });

    win.setAlwaysOnTop(true, 'screen');

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    win.loadURL(startUrl);
}

app.on('ready', createWindow);