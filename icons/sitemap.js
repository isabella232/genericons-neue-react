"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sitemap = function Sitemap(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M14 11.3V10c0-1.7-1.3-3-3-3H9V4.7c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7V7H5c-1.7 0-3 1.3-3 3v1.3c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V10c0-.6.4-1 1-1h2v2.3c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V9h2c.6 0 1 .4 1 1v1.3c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7zM8 2.2c.4 0 .8.3.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zM3 13.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8zm5 0c-.4 0-.8-.3-.8-.8s.3-.8.8-.8c.4 0 .8.3.8.8s-.4.8-.8.8zm5 0c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8z" })
		)
	);
};

exports.default = Sitemap;