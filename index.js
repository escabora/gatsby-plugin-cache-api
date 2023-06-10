const fse = require('fs-extra');

/**
 * @param {string} pathOutput - String referring to the file creation path
 * @param {string} nameOutPath - String referring to the name and type of creation of the file
 * @param {Object} file - API object
 * @returns {Function} Returns asynchronous function to create the files
 **/
async function cacheApi(pathOutput, nameOutPath, file) {
  try {
    const pathName = `./public/${pathOutput}/${nameOutPath}`;
    fse.outputFileSync(pathName, JSON.stringify(file));
    console.log('\x1b[32msuccess\x1b[0m', `create file in ${pathName}`);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = cacheApi;
