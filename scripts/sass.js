const fse = require('fs-extra');
const path = require('path');
const promisify = require('promisify-node');
const sass = promisify('node-sass');

const outDir = './dist/public/styles';
const outFile = path.join(outDir, 'style.css');

sass.render({
  file: './src/public/styles/style.scss',
  includePaths: ['./src/public/styles'],
  outFile
})
  .then(result => {
    return fse.ensureDir(outDir)
      then(() => result);
  })
  .then((result) => fse.writeFile(outFile, result.css))
  .then(() => console.log('Completed writing out css files...'))
  .catch((err) => {
    console.log(`Error compiling sass: ${err.message}`);
    process.exit(1);
  });