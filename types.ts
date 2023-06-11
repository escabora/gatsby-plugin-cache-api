/**
 * @param {string} pathOutput - String referring to the file creation path
 * @param {string} nameOutPath - String referring to the name and type of creation of the file
 * @param {Object} file - API object
 * @returns {Function} Returns asynchronous function to create the files
 **/

interface IcacheApi {
	pathOutput: string, 
  nameOutPath: string, 
  file: object
}

export { IcacheApi }