Feature: Fahrenheit to Celsius Conversion
  As a developer
  I want to convert Fahrenheit to Celsius
  So that I can use the Celsius temperature in my application

  Scenario: Convert Fahrenheit to Celsius
    Given the temperature in Fahrenheit is 60
    When I convert the temperature to Celsius
    Then the temperature in Celsius should be 16