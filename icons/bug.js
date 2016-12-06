"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bug = function Bug(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 2.5C6.6 2.5 5.5 3.6 5.5 5h5c0-1.4-1.1-2.5-2.5-2.5zm5 6h-1V7.4l.7-.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.7.7H5.4l-.7-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7v1.1H3c-.6 0-1 .4-1 1s.4 1 1 1h1.1c0 .3.1.6.2.8l-1 1c-.4.4-.4 1 0 1.4s1 .4 1.4 0l.7-.7c.7.6 1.6 1 2.6 1s1.9-.4 2.6-1l.7.7c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1-1c.1-.3.2-.5.2-.8H13c.6 0 1-.4 1-1s-.4-1-1-1z" })
		)
	);
};

exports.default = Bug;