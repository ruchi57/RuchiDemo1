const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

let window
app.on('ready',_=>{
    window = new BrowserWindow({
        height: 400,
        width :400
    })
  
    window.loadURL(`file://${__dirname}/helloWorl.html`);

    const name = electron.app.getName()
    const template = [
        {
            label:name,
            submenu:[{
                label: `About ${name}`,
                click: _=>{
                  console.log('clicked about')
                },
                description :'This is about',
                role :'about' 
            }, {
                type:'separator'
            },{
                label : 'Quit',
                click : _=> {app.quit()},
                accelerator : 'cmd+Q'
            }
        ] 
        }
    ]

   const menu = Menu.buildFromTemplate(template)
   Menu.setApplicationMenu(menu)
})

let mainWindow