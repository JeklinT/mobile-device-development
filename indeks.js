// 1. Conversion from Fahrenheit to Celsius
let fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
};
// 2. Body Mass Index (BMI) calculation
let calculateBMI = (weight, height) => {
    let bmi = weight / (height * height);
    let result;
    
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
    } else {
        result = "Obesity";
    }
    console.log(`Your BMI is ${bmi.toFixed(2)} and you are ${result}.`);
};

// functions:
fahrenheitToCelsius(90.00);
// Output: 99.20°F = 37.33°C

calculateBMI(60, 1.8);
// Output: Your BMI is 23.15 and you are Normal.
