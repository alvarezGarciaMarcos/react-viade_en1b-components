"use strict";

var _react = _interopRequireDefault(require("react"));

require("@testing-library/jest-dom/extend-expect");

var _react2 = require("@testing-library/react");

var _InputText = _interopRequireDefault(require("../InputText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Tests for the input', function () {
  test("The placeholder is the one it is supposed to be", function () {
    var input = (0, _react2.render)(_react["default"].createElement(_InputText["default"], {
      placeholder: "Search"
    }));
    var i = input.getByTestId('input-field');
    expect(i).toBeVisible();
  });
  test("The placeholder text changes color with focus", function () {
    var input = (0, _react2.render)(_react["default"].createElement(_InputText["default"], {
      placeholder: "Search"
    }));
    expect(input.getByTestId('input-field')).toHaveAttribute('placeholder');
    expect(input.getByTestId('input-field')).not.toHaveFocus;
    expect(input.getByTestId('input-field')).toBeInTheDocument();
  });
});

//# sourceMappingURL=InputText.test.js.map