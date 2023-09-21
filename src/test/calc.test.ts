import { add } from '../functions/calc';

describe('2 (Two Katas) Test Add Function:', () => {
	it('should return 15 for add(10,5)', () => {
		expect(add(10, 5)).toBe(15);
	});
	it('should return 5 for add(2,3)', () => {
		expect(add(2, 3)).toBe(5);
	});
});