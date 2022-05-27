// @ts-ignore
const { app, BrowserWindow, Notification, globalShortcut   } = require('electron')

function showNotification () {
  // @ts-ignore
  new Notification({ title: 'hewwo;)', body: 'press alt+! to evict, press alt+@ to toggle' }).show()
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
        resizable: false,
        frame: false
    })

    

    win.loadFile('index.html')
    var on = true
    win.setIgnoreMouseEvents(true, { forward: true });
    globalShortcut.register('Alt+!', () => {
      win.close()
    })
    globalShortcut.register('Alt+@', () => {
      if(on){
        win.loadFile('') // ! this causes a warning, dont know how to do it better
      } else {
        win.loadFile('index.html')
      }
      on=!on
      
    })
    win.on('close', () => {
      globalShortcut.unregisterAll()
    })
    /*
    win.webContents.on("before-input-event", (event, input) => {
      if(input.key=='+'&&input.alt){
        win.close()
      }
       
  });*/
//set window to always on top
    win.setAlwaysOnTop(true, "float", 1)
    
  }
  app.whenReady().then(() => {
    showNotification()
    createWindow()
    
    
  })
