const fse = require('fs-extra');
// const IcacheApi = require('./types')

const cacheApi = async ({ pathOutput, nameOutPath, file }) => {
  try {
    const pathName = `./public/${pathOutput}/${nameOutPath}`;
    fse.outputFileSync(pathName, JSON.stringify(file));
    console.log('\x1b[32msuccess\x1b[0m', `create file in ${pathName}`);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = cacheApi;
