const conversionButton = document.getElementById("konversi");
const resetButton = document.getElementById("reset");
const reverseButton = document.getElementById("reverse");



let calcStatus = "ctof";

const intConvert = (input) => {
    return parseInt(input);
}

const intCheck = (inputCheck) => {

    let isInt = true;
    if (isNaN(inputCheck)) {
    isInt = false;
    }
    return isInt;
}


const ctof = () => {
    const inputArea1 = document.getElementById("celsius");
    const outputArea = document.getElementById("farenheit");
    const inputFound = inputArea1.value.trim();
    const numberInput = intConvert(inputFound);

    if(inputFound == ""){
        inputArea1.value = "Area ini tidak boleh kosong";
    }else if(!intCheck(numberInput)){
        inputArea1.value = "Tolong isi dengan angka";
    }else{
        const fahrenheit = (numberInput * 9/5) + 32;
        outputArea.value = fahrenheit;  
    }
}

const ftoc = () => {
    const inputArea1 = document.getElementById("celsius");
    const inputFound = inputArea1.value.trim();
    const outputArea = document.getElementById("farenheit");
    const numberInput = intConvert(inputFound);

    if(inputFound == ""){
        inputArea1.value = "Area ini tidak boleh kosong";
    }else if(!intCheck(numberInput)){
        inputArea1.value = "Tolong isi dengan angka";
    }else{
        const fahrenheit = (numberInput - 32) * 5/9;
        outputArea.value = fahrenheit;  
    }
}

const reverse = () => {
    const inputLabel = document.getElementById("label1");
    const outputLabel = document.getElementById("label2");
    const inputArea1 = document.getElementById("celsius");
    const outputArea = document.getElementById("farenheit");
    if(calcStatus == "ctof"){
        calcStatus = "ftoc";
        inputLabel.textContent = "Farenheit(F°)";
        outputLabel.textContent = "Celsius(C°)";
        inputArea1.value = outputArea.value;
        ftoc();
    }
}

conversionButton.addEventListener("click", () => {
    // Perform other actions as needed
    if (calcStatus == "ctof"){
        ctof();
    }else if(calcStatus == "ftoc"){
        ftoc();
    }
    
  });

reverseButton.addEventListener("click",() => {
    reverse()
})  

resetButton.addEventListener("click", () => {
    const inputArea1 = document.getElementById("celsius");
    const outputArea = document.getElementById("farenheit");
    inputArea1.value = ""
    outputArea.value = ""
})