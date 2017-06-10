const remote = require('electron').remote;
const dialog = remote.dialog;
const fs = require('fs')
const path = require('path')

const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }

            resolve(data)
        })
    })
}

const writeFile = function (filename, filedata) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, filedata, (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve()
        })
    })
}

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

const userFolder = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : process.env.HOME)

module.exports.copyFileToUserFolder = function (fileName) {
    return readFile(fileName)
    .then((fileData) => {
        let file = path.parse(fileName).base
        let newFile = path.join(userFolder, file)
        return writeFile(newFile, fileData)
    })
}