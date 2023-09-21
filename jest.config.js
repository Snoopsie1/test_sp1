module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js', 'json'],
	transform: {
		'^.+.ts$': 'ts-jest',
	},
	testRegex: '(/test/.*|(.|/)(test|spec)).ts$',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
};
