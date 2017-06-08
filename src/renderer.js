const remote = require('electron').remote;
const dialog = remote.dialog;

module.exports.selectImage = () => {
    const window = remote.BrowserWindow
    dialog.showOpenDialog({
        filters: {
            name: 'Images', extensions: [
                'jpg', 'jpeg', 'gif', 'png', 'bmp'
            ]
        }
    }, (file) => {
        console.log(file)
    })
}