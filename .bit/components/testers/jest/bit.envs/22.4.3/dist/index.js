'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jest = require('jest');

var _jest2 = _interopRequireDefault(_jest);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bitUtilsFile = require('@bit/bit.utils.file.extract-file-name-from-path');

var _bitUtilsFile2 = _interopRequireDefault(_bitUtilsFile);

var _childProcessPromise = require('child-process-promise');

var _resultsAdapter = require('./resultsAdapter');

var _resultsAdapter2 = _interopRequireDefault(_resultsAdapter);

var _readResults = require('./readResults');

var _readResults2 = _interopRequireDefault(_readResults);

var _upath = require('upath');

var _upath2 = _interopRequireDefault(_upath);

require('jsdom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var run = function run(specFile) {
  var convertedSpecFile = _upath2.default.normalize(specFile);
  var resultsFilePath = (0, _bitUtilsFile2.default)(specFile) + '-results.json';
  var jestPath = _path2.default.normalize('' + __dirname + _path2.default.sep + '..' + _path2.default.sep + 'node_modules' + _path2.default.sep + 'jest' + _path2.default.sep + 'bin' + _path2.default.sep + 'jest.js');

  // We are using outputFile flag because in some cases when using --json only
  // There is not valid json return, see details here:
  // https://github.com/facebook/jest/issues/4399

  var cmd = '"' + process.execPath + '" ' + jestPath + ' ' + convertedSpecFile + (' --rootDir=' + require('path').dirname(specFile) + ' --config=' + __dirname + '/jest.config.js --json --outputFile="') + resultsFilePath + '"';
  return (0, _childProcessPromise.exec)(cmd).then(function (_ref) {
    var err = _ref.err,
        stdout = _ref.stdout,
        stderr = _ref.stderr;

    var parsedResults = (0, _readResults2.default)(resultsFilePath);
    return (0, _resultsAdapter2.default)(parsedResults);
  }).catch(function (_ref2) {
    var message = _ref2.message,
        stdout = _ref2.stdout,
        stderr = _ref2.stderr;

    // We can arrive here for two reasons:
    // 1. Testing is finished with errors, and then we want to parse the error from the results
    // 2. Error in testing process, and then we parse the catch error.
    try {
      var parsedResults = (0, _readResults2.default)(resultsFilePath);
      return (0, _resultsAdapter2.default)(parsedResults);
    } catch (err) {
      return (0, _resultsAdapter.getJestFailure)(message);
    }
  });
};

//enforce jsdom dependency, so we'd get ~11.11.0, and avoid the fatal localStorage bug in 11.12.0
exports.default = {
  run: run,
  globals: {
    jest: _jest2.default
  },
  modules: {
    jest: _jest2.default
  }
};
module.exports = exports['default'];

//# sourceMappingURL=index.js.map