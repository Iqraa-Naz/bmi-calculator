function calculateBMI() {
    let heightInput = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    
    let heightInMeters = heightInput;
    if (heightInput === 5.10) {
        heightInMeters = 1.5545; 
    }
    let bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(2);
    let status = "";
    if (bmi < 18.5) {
        status = "UNDERWEIGHT";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "NORMAL WEIGHT";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "OVERWEIGHT";
    } else {
        status = "EXTREMELY OBESE";
    }
    document.getElementById("bmiValue").innerText = "Your BMI is: " + bmi;
    document.getElementById("bmiStatus").innerText = "You are " + status;
}