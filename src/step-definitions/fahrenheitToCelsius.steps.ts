import { defineFeature, loadFeature } from 'jest-cucumber';
import { fahrenheitToCelsius } from '../functions/fahrenheit-to-celsius';


const feature = loadFeature('./src/features/fahrenheitToCelsius.feature');

defineFeature(feature, (test) => {
  let fahrenheit: number;
  let celsius: number;

  test('Convert Fahrenheit to Celsius', ({ given, when, then }) => {
    given(/^the temperature in Fahrenheit is (\d+)$/, (f: number) => {
      fahrenheit = f;
    });

    when('I convert the temperature to Celsius', () => {
      celsius = fahrenheitToCelsius(fahrenheit);
    });

    then(/^the temperature in Celsius should be (\d+)$/, (expectedCelsius: number) => {
      expect(celsius).toBe(Number(expectedCelsius));
    });
  });
});