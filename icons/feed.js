"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feed = function Feed(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M2 6v2c3.3 0 6 2.7 6 6h2c0-4.4-3.6-8-8-8zm0-4v2c5.5 0 10 4.5 10 10h2C14 7.4 8.6 2 2 2zm1.5 9c-.8 0-1.5.7-1.5 1.5S2.7 14 3.5 14 5 13.3 5 12.5 4.3 11 3.5 11z" })
		)
	);
};

exports.default = Feed;