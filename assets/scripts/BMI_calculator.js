const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const button = document.getElementById("button");
const bmiOutput = document.getElementById("bmi");

const calculateBMI = () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;
  const bmi = weight / (height * height);
  bmiOutput.innerHTML = bmi.toFixed(2);
};

button.addEventListener("click", calculateBMI);
