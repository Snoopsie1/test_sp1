import { romanToArabic } from "../functions/romanToNumeral";

describe('Test Roman-Numbers to Arabic-Numbers Function:', () => {
  it('Should return 14', () => {
    expect(romanToArabic("XIV")).toBe(14);
  });
  it('Test to check how it reacts to non-roman inputs', () => {
    expect(romanToArabic("foo")).toBe(NaN);
  });
});