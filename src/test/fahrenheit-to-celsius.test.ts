import { fahrenheitToCelsius } from "../functions/fahrenheit-to-celsius";

describe('Test Fahrenheit-To-Celsius Function:', () => {
  it('Converts 60 Fahrenheit to 16 Celsius', () => {
    expect(fahrenheitToCelsius(60)).toBe(16);
  });
});