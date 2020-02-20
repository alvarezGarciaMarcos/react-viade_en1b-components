'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJestFailure = undefined;

var _bitUtilsValidation = require('@bit/bit.utils.validation.empty');

var _bitUtilsValidation2 = _interopRequireDefault(_bitUtilsValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertJestFormatToBitFormat = function convertJestFormatToBitFormat(results) {
  var testResults = results.testResults;
  var failures = [];
  var testProps = [];
  var res = testResults.map(function (test) {
    var duration = test.endTime - test.startTime;
    if ((0, _bitUtilsValidation2.default)(test.assertionResults)) {
      failures.push({
        title: 'Test suite failed to run',
        err: {
          message: test.message
        },
        duration: duration
      });
    } else {
      testProps = test.assertionResults.map(function (assertionRes) {
        var title = assertionRes.title;
        var pass = assertionRes.status === 'passed' ? true : false;
        var err = !pass ? { message: assertionRes.failureMessages[0], stack: assertionRes.failureMessages[0] } : undefined;
        if (err) return {
          title: title, pass: pass, duration: duration, err: err
        };
        return {
          title: title, pass: pass, duration: duration
        };
      });
    }
    var StatsProps = {
      start: test.startTime,
      end: test.endTime,
      duration: duration
    };
    var pass = test.status === 'passed' ? true : false;
    return { tests: testProps, stats: StatsProps, pass: pass, failures: failures };
  });
  return res[0];
};

var getJestFailure = exports.getJestFailure = function getJestFailure(message) {
  return {
    tests: [],
    pass: false,
    stats: {
      start: null,
      end: null
    },
    failures: [{ title: 'Jest failure',
      err: {
        message: message
      }
    }]
  };
};
exports.default = convertJestFormatToBitFormat;

//# sourceMappingURL=resultsAdapter.js.map