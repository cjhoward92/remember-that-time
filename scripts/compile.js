const babel = require('./babel');
const scss = require('./sass');

console.log('starting...');

babel()
  .then(() => scss())
  .catch(err => console.log(err));