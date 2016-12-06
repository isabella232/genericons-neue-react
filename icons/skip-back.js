"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipBack = function SkipBack(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M11.5 2.9L6 6.2V3H3v10h3V9.7l5.5 3.3c.7.5 1.5 0 1.5-.8V3.8c0-.8-.8-1.3-1.5-.9z" })
		)
	);
};

exports.default = SkipBack;