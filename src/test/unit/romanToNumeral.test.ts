import { romanToArabic } from '../../functions/romanToNumeral';

describe('Test Roman-Numbers to Arabic-Numbers Function:', () => {
	it('RomanToArabicNumbers_RomanIsXIV_Returns14', () => {
		expect(romanToArabic('XIV')).toBe(14);
	});
	it('RomanToArabicNumbers_RomanIs"foo"_ReturnsNaN', () => {
		expect(romanToArabic('foo')).toBe(NaN);
	});
});
