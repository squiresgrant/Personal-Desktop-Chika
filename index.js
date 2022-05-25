const { app, BrowserWindow } = require('electron')

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
    
        win.setAlwaysOnTop(true);
    
  }
  app.whenReady().then(() => {
    createWindow()
    
  })