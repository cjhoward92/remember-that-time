const remote = require('electron').remote; // eslint-disable-line
const dialog = remote.dialog;
const fs = require('fs');
const path = require('path');

const LOCAL_DIR = 'rtt-local';

const getFiles = dir => new Promise((resolve, reject) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      reject(err);
      return;
    }

    resolve(files);
  });
});

const readFile = fileName => new Promise((resolve, reject) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    resolve(data);
  });
});


const writeFile = (filename, filedata) => new Promise((resolve, reject) => {
  fs.writeFile(filename, filedata, (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
});


module.exports.selectImage = (cb) => {
  dialog.showOpenDialog({
    filters: {
      name: 'Images',
      extensions: [
        'jpg', 'jpeg', 'gif', 'png', 'bmp',
      ],
    },
  }, (file) => {
    if (file.length === 0) {
      cb(null);
    } else {
      cb(file[0]);
    }
  });
};

// Immediately return the folder
const userFolder = (function () { // eslint-disable-line
  let directory = process.env.APPDATA ||
    (process.platform === 'darwin'
      ? `${process.env.HOME}Library/Preferences`
      : process.env.HOME);

  directory = path.join(directory, LOCAL_DIR);
  return directory;
}());

const createUserFolder = () => {
  const folder = userFolder;
  if (fs.existsSync(folder)) return;
  fs.mkdirSync(folder);
};

module.exports.copyFileToUserFolder = (filename, title) => {
  createUserFolder();
  let newName;
  let data;
  return readFile(filename)
  .then((fileData) => {
    data = fileData;
    newName = title + path.parse(filename).ext;
    return getFiles(userFolder);
  })
  .then((files) => {
    if (files && files.find(f => f === newName)) {
      throw new Error(`A file with the name ${title} already exists`);
    }
    return writeFile(path.join(userFolder, newName), data);
  });
};

module.exports.loadFilesFromUserFolder =
    () => fs.readdirSync(userFolder).map(f => path.join(userFolder, f));

module.exports.getFileName = fullpath => path.parse(fullpath).name;
