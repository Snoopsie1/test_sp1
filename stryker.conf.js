module.exports = {
	mutate: ['src/**/*.ts'], // Adjust this to match your project's source files
	mutator: 'typescript',
	testRunner: 'jest',
	reporters: ['progress', 'clear-text', 'html'],
	testFramework: 'jest',
	coverageAnalysis: 'perTest',
	tsconfigFile: 'tsconfig.json',
	jest: {
		projectType: 'custom',
		config: require('./jest.config.js'),
	},
};
