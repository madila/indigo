const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: "usage",
			corejs: "3.x"
		},
	],
];

const plugins = [
	["@babel/plugin-transform-runtime",
		{
			"absoluteRuntime": false,
			"corejs": 3,
			"helpers": true,
			"regenerator": true,
			"useESModules": false
		}
	],
	[require("@babel/plugin-proposal-class-properties"), { loose: true }]
];

module.exports = { presets, plugins };
