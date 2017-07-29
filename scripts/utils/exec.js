const cp = require('child_process');

const exec = (command, opts) => new Promise((resolve, reject) => {
  const process = cp.exec(command, opts, (err, stdout, stderr) => {
    if (err) {
      return reject(err);
    }
    return resolve({ process, stdout, stderr });
  });
});

module.exports.exec = exec;