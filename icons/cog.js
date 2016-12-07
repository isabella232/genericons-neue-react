"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cog = function Cog(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M13 8c0-.4-.1-.8-.1-1.1l1.1-.8c.4-.3.5-.9.3-1.3l-.3-.6c-.3-.5-.8-.6-1.3-.4l-1.2.5c-.5-.5-1.2-.9-1.9-1.1l-.3-1.4c0-.5-.5-.8-.9-.8h-.7c-.5 0-.9.4-1 .9l-.2 1.3c-.7.3-1.3.6-1.9 1.1l-1.2-.5c-.5-.2-1 0-1.3.4l-.3.6c-.3.5-.2 1 .2 1.3l1.1.8c0 .3-.1.7-.1 1.1 0 .4.1.8.1 1.1L2 9.9c-.4.3-.5.9-.3 1.3l.3.6c.3.5.8.6 1.3.4l1.2-.5c.5.5 1.2.9 1.9 1.1l.3 1.4c.1.5.5.8 1 .8h.7c.5 0 1-.4 1-.9l.1-1.3c.7-.2 1.4-.6 1.9-1.1l1.2.5c.5.2 1 0 1.3-.4l.3-.6c.2-.4.1-1-.3-1.3l-1.1-.8c.1-.3.2-.7.2-1.1zm-5 2.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 5.5 8 5.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" })
		)
	);
};

exports.default = Cog;