"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Move = function Move(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12.5 5.5V7H9V3.5h1.5L8 1 5.5 3.5H7V7H3.5V5.5L1 8l2.5 2.5V9H7v3.5H5.5L8 15l2.5-2.5H9V9h3.5v1.5L15 8" })
		)
	);
};

exports.default = Move;