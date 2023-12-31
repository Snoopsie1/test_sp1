module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js', 'json'],
	testMatch: ['**/test/unit/*.test.ts'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
	reporters: [
		'default',
		[
			'jest-junit',
			{
				outputDirectory: 'test-results/',
				outputName: 'unit-test-report.xml',
			},
		],
	],
};
