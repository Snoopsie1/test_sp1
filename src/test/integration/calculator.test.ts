import { calculateSum } from '../../functions/calculator';

describe('calculator integration test', () => {
	it('should add two numbers', () => {
		expect(calculateSum(1, 2)).toBe(3);
	});

	it('should add two negative numbers', () => {
		expect(calculateSum(-1, -2)).toBe(-3);
	});
});
