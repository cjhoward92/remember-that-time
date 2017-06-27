const remote = require('electron').remote;
const dialog = remote.dialog;
const fs = require('fs')
const path = require('path')

const LOCAL_DIR = 'rtt-local'

const getFiles = function (dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err)
                return
            }

            resolve(files)
        })
    })
}

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

// Immediately return the folder
const userFolder = (function () {
    let directory = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : process.env.HOME)
    directory = path.join(directory, LOCAL_DIR)
    return directory
})()

function createUserFolder() {
    const folder = userFolder
    if (fs.existsSync(folder)) return
    fs.mkdirSync(folder)
}

module.exports.copyFileToUserFolder = function (filename, title) {
    createUserFolder()
    let newName
    let data
    return readFile(filename)
    .then((fileData) => {
        data = fileData
        newName = title + path.parse(filename).ext
        return getFiles(userFolder)
    })
    .then(files => {
        if (files && files.find(f => f === newName)) {
            throw new Error(`A file with the name ${title} already exists`)
        }
        return writeFile(path.join(userFolder, newName), data)
    })
}

module.exports.loadFilesFromUserFolder = function () {
    return fs.readdirSync(userFolder).map(f => path.join(userFolder, f))
}

module.exports.getFileName = function (fullpath) {
    return path.parse(fullpath).name
}