// @ts-ignore
const { app, BrowserWindow, Notification, globalShortcut   } = require('electron')

function showNotification () {
  // @ts-ignore
  new Notification({ title: 'hewwo;)', body: 'press alt+! to close;)' }).show()
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
        skipTaskbar: true,
        transparent:true,
        frame: false
    })

    //never gonna give you up
    //never gonna let you down
    //never gonna run around and desert you
    //never gonna make you cry
    //never gonna say goodbye
    //never gonna tell a lie and hurt you

    win.loadFile('index.html')
    win.setIgnoreMouseEvents(true, { forward: true });
    globalShortcut.register('Alt+!', () => {
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
    showNotification()
    createWindow()
    
    
  })
