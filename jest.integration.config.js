module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js', 'json'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testMatch: ['**/test/integration/*.test.ts'],
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
				outputName: 'integration-test-report.xml',
			},
		],
	],
};
