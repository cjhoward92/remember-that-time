const path = require('path');
const promisify = require('promisify-node');
const sass = promisify('node-sass');
const fse = require('fs-extra');
const fs = require('fs');

const outDir = './dist/public/styles';
const outFile = path.join(outDir, 'style.css');
const bootstrap = './node_modules/bootstrap/dist';
const bscss = 'css/bootstrap.css';
const bsjs = 'js/bootstrap.js';
const bsfonts = 'fonts';

let css;
sass.render({
  file: './src/public/styles/style.scss',
  includePaths: ['./src/public/styles/'],
  outFile
})
  .then(result => {
    css = result.css;
    return fs.writeFile(outFile, css);
  })
  .then(() => console.log('Completed writing out css files...'))
  .catch((err) => {
    console.log(`Error compiling sass: ${err.message}`);
    process.exit(1);
  });

// const scss = () => fse.ensureDir('./dist/public')
//   .then(() => renderer())
//   .then(() => fse.copy(path.join(bootstrap, bsfonts), './dist/public/fonts'))
//   .then(() => fse.copy(path.join(bootstrap, bscss), path.join(outDir, 'bootstrap.css')))
// scss();