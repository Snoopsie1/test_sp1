import { add } from '../functions/calc';

describe('2 (Two Katas) Test Add Function:', () => {
	it('Add_10And5_15', () => {
		expect(add(10, 5)).toBe(15);
	});
	it('Add_2And3_5', () => {
		expect(add(2, 3)).toBe(5);
	});
});