/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputId = document.getElementById("input-id")
let btnEl = document.getElementById("btn-el")
let lengthEl = document.getElementById("convertLengthOutput")
let volumeEl = document.getElementById("convertVolumeOutput")
let massEl = document.getElementById("convertMassOutput")

btnEl.addEventListener("click", function() {
  let x = inputId.value
  lengthEl.textContent = `${x} meters = ${(x * 3.281).toFixed(3)} feet  |  ${x} feet = ${(x / 3.281).toFixed(3)} meters`
  volumeEl.textContent = `${x} liters = ${(x * 0.264).toFixed(3)} gallons  |  ${x} gallons = ${(x / 0.264).toFixed(3)} liters`
  massEl.textContent = `${x} kilograms = ${(x * 2.204).toFixed(3)} pounds  |  ${x} pounds = ${(x / 2.204).toFixed(3)} kilograms`
  inputId.value = ""
})
