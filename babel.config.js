const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: "usage",
		},
	],
];

const plugins = [
	[require("@babel/plugin-proposal-class-properties"), { loose: true }]
];

module.exports = { presets, plugins };
