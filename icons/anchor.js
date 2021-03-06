"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = function Anchor(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 8v2.5c0 .8-.7 1.5-1.5 1.5S9 11.3 9 10.5V9h1c.3 0 .5-.2.5-.5S10.3 8 10 8H9V5.8c.7-.3 1.1-1 1.1-1.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.3.9 1.7V8H6c-.3 0-.5.2-.5.5s.2.5.5.5h1v1.5c0 .8-.7 1.5-1.5 1.5S4 11.3 4 10.5V8c-1.1 0-2 .9-2 2v.5C2 12.4 3.6 14 5.5 14c1 0 1.9-.4 2.5-1.1.6.6 1.5 1.1 2.5 1.1 1.9 0 3.5-1.6 3.5-3.5V10c0-1.1-.9-2-2-2zM8 3.5c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5z" })
		)
	);
};

exports.default = Anchor;