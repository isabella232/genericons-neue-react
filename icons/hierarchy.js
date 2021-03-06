"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hierarchy = function Hierarchy(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M2 5h2V3H2v2zm4-2v2h8V3H6zM2 9h2V7H2v2zm9-2H6v2h5V7zm-9 6h2v-2H2v2zm4 0h7v-2H6v2z" })
		)
	);
};

exports.default = Hierarchy;