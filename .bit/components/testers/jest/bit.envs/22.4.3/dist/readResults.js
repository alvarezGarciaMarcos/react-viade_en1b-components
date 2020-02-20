'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readResults = function readResults() {
    var filePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'results.json';

    var results = _fs2.default.readFileSync(filePath);
    var parsedResults = JSON.parse(results);
    _fs2.default.unlinkSync(filePath);
    return parsedResults;
};

exports.default = readResults;
module.exports = exports['default'];

//# sourceMappingURL=readResults.js.map