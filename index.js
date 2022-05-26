const { app, BrowserWindow, Notification, globalShortcut   } = require('electron')
const NOTIFICATION_TITLE = 'hewwo;)'
const NOTIFICATION_BODY = 'press alt+! to close;)'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}
const createWindow = () => {
    const { screen } = require('electron')
    
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize

    const win = new BrowserWindow({
        width: 400,
        height: 400,
        x: width-250,
  y: height-220,
        
        transparent:true,
        frame: false
    })
  
    win.loadFile('index.html')
    win.setIgnoreMouseEvents(true, { forward: true });
    const ret = globalShortcut.register('Alt+!', () => {
      win.close()
    })
    /*
    win.webContents.on("before-input-event", (event, input) => {
      if(input.key=='+'&&input.alt){
        win.close()
      }
       
  });*/
        win.setAlwaysOnTop(true);
    
  }
  app.whenReady().then(() => {
    createWindow()
    showNotification ()
    
  })
