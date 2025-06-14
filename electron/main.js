const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: path.join(__dirname, "assets", "WhatsApp.ico"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    menuBarVisible: false,
  });

  win.loadURL("http://localhost:5173");
  win.removeMenu();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
