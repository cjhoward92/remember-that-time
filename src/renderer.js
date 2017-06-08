// @flow
const { dialog, remote } = require('electron')

module.exports.selectImage = function (): string {
    const window = remote.BrowserWindow
    const paths = dialog.showOpenDialog(window, {
        filters: {
            name: 'Images', extensions: [
                'jpg', 'jpeg', 'gif', 'png', 'bmp'
            ]
        }
    })

    return paths[0]
}