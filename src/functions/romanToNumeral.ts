type RomanNumerals = "I" | "V" | "X" | "L" | "C" | "D" | "M";

export const romanToArabic = (roman: string): number => {
  const romanNumerals: Record<RomanNumerals, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arabic = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentChar = roman[i] as RomanNumerals;
    const nextChar = roman[i + 1] as RomanNumerals;

    if (romanNumerals[currentChar] < romanNumerals[nextChar]) {
      arabic -= romanNumerals[currentChar];
    } else {
      arabic += romanNumerals[currentChar];
    }
  }

  return arabic;
}