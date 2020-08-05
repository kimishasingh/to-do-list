const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = ['./dist/app/main.js','./dist/app/polyfills.js','./dist/app/runtime.js'];

  await fs.ensureDir('dist');
  await fs.ensureDir('dist/app');
  await concat(files, './dist/app/custom-elements.js');
})();
