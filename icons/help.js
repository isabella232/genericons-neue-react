"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Help = function Help(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1.5-3.5c-.7.2-.7.6-.7.7H7.2c0-1 .6-1.8 1.8-2.2.7-.2.7-.7.7-.8 0-.4-.3-.8-.8-.8H7c-.4 0-.8.3-.8.8H4.8C4.8 5 5.8 4 7 4h2c1.2 0 2.2 1 2.2 2.2 0 1.1-.6 1.9-1.7 2.3z" })
		)
	);
};

exports.default = Help;