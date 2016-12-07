"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lock = function Lock(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 8V6c0-2.2-1.8-4-4-4S4 3.8 4 6v2c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zM6 8V6c0-1.1.9-2 2-2s2 .9 2 2v2H6z" })
		)
	);
};

exports.default = Lock;