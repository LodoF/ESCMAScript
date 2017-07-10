import { app, BrowserWindow, powerSaveBlocker} from 'electron';
import { Windows } from './window.js';
import { _Pouchdb } from '../app/services/_pouchdb.js';
let {mainWindow} = {};

// 阻止程序多开
const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  if (mainWindow)
    return true;
});

if (shouldQuit)
  app.quit();

// 阻止计算机进入睡眠
let id = powerSaveBlocker.start('prevent-display-sleep');

if (!powerSaveBlocker.isStarted(id))
  powerSaveBlocker.stop(id);

// app is ready
app.on('ready', createWindows);

// all window closed
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin')
    app.quit();
});

// app activate
app.on('activate', function() {
  if (mainWindow === null)
    createWindows();
});

// createwindow
function createWindows () {
  let window = new Windows(true, BrowserWindow);
  mainWindow = window.create({
    url: `file://${__dirname}/html/index.html`
  });
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  let pouchdb = new _Pouchdb();

  let db = pouchdb.createDatabase('xfang');

  console.log(db);
}