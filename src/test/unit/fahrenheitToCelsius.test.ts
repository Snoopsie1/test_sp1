import { fahrenheitToCelsius } from '../../functions/fahrenheit-to-celsius';

describe('Test Fahrenheit-To-Celsius Function:', () => {
	it('FahrenheitToCelsius_FahrenheitIs60_CelsiusIs16', () => {
		expect(fahrenheitToCelsius(60)).toBe(16);
	});
});
