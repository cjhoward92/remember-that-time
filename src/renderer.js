const remote = require('electron').remote;
const dialog = remote.dialog;

module.exports.selectImage = (cb) => {
    const window = remote.BrowserWindow
    dialog.showOpenDialog({
        filters: {
            name: 'Images', extensions: [
                'jpg', 'jpeg', 'gif', 'png', 'bmp'
            ]
        }
    }, (file) => {
        if (file.length === 0) {
            cb(null)
        } else {
            cb(file[0])
        }
    })
}