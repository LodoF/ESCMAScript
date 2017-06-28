export class Windows {

  constructor (openDevTools, BrowserWindow) {
    this.openDevTools = openDevTools;
    this.BrowserWindow = BrowserWindow;
  }

  create ({url, height = 1080, width = 1920, fullScreen = true, menu = null}) {
    let BrowserWindow = this.BrowserWindow;
    let window = new BrowserWindow({
      height: height,
      width: width
    });
    window.setFullScreen(fullScreen);
    window.setMenu(menu);
    window.loadURL(url);
    this.openDevTools === true ? window.webContents.openDevTools() : '';
    return window;
  }
}