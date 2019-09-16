const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: "usage",
		},
	],
];

const plugins = [
	"@babel/plugin-transform-runtime",
	[require("@babel/plugin-proposal-class-properties"), { loose: true }]
];

module.exports = { presets, plugins };
