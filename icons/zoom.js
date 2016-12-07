"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Zoom = function Zoom(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M7 4H6v2H4v1h2v2h1V7h2V6H7V4zm4 5.6c.6-.9 1-2 1-3.1C12 3.5 9.5 1 6.5 1S1 3.5 1 6.5 3.5 12 6.5 12c1.2 0 2.2-.4 3.1-1l3.7 3.7 1.4-1.4L11 9.6zm-4.5.9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" })
		)
	);
};

exports.default = Zoom;