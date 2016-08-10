let resultDiv = document.getElementById("result");
let tempInput = document.getElementById("temperature");
let unit = document.getElementsByName('unit');
let button = document.getElementById("converter");
let resetButton = document.getElementById("reset");

function toCelsius(temp) {
    let tempConverted = (temp - 32) * 5 / 9;
    resultDiv.innerHTML = tempConverted + "&#176;C";
    setColor(tempConverted, "celsius")
}

function toFahrenheit(temp) {
    let tempConverted = temp * 9 / 5 + 32;
    resultDiv.innerHTML = tempConverted + "&#176;F";
    setColor(tempConverted, "fahrenheit");
}

function setColor(temp, unit) {
    if (unit === "fahrenheit") {
        if (temp > 90) {
            resultDiv.style.color = "red";
        } else if (temp < 32) {
            resultDiv.style.color = "blue";
        } else {
            resultDiv.style.color = "green";
        }
    } else {
        if (temp > 32) {
            resultDiv.style.color = "red";
        } else if (temp < 0) {
            resultDiv.style.color = "blue";
        } else {
            resultDiv.style.color = "green";
        }
    }
}

function determineConverter(clickEvent) {
    let tempValue = document.getElementById("temperature").value;
    let unitValue;
    for (let x = 0; x < unit.length; x++) {
        if (unit[x].checked) {
            unitValue = unit[x].value;
        }
    }
    unitValue === "celsius" ? toCelsius(tempValue) : toFahrenheit(tempValue);
}

function resetForm() {
    tempInput.value = null;
    resultDiv.innerHTML = "";
    unit[0].checked = "true";
}

tempInput.addEventListener("keydown", function() {
    if (window.event.keyCode == '13') {
        determineConverter();
    }
}, false);

button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", resetForm);
