const { exec } = require('./utils/exec');
const del = require('del');

const command = '\"./node_modules/.bin/babel\" src --out-dir dist --source-maps';

const start = () => {
  console.log('Deleting output directory...');
  return del('./dist')
    .then(() => {
      console.log('Using babel to transpile code...');
      return exec(command);
    })
    .then(({ stdout }) => console.log(stdout))
    .catch(err => console.log(err));
};

module.exports = start;