import { fahrenheitToCelsius } from "../functions/fahrenheit-to-celsius";


describe('Test Fahrenheit-To-Celsius Function:', () => {
  it('Should fail', () => {
    expect(fahrenheitToCelsius(60)).toBe(16);
  });
});