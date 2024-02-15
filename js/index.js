const conversionButton = document.getElementById("konversi");
const resetButton = document.getElementById("reset");
const reverseButton = document.getElementById("reverse");


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


const ctof = () =>{
    const inputArea1 = document.getElementById("celsius");
    const inputFound = inputArea1.value.trim();
    const numberInput = intConvert(inputFound);



    if(inputFound == ""){
        inputArea1.value = "Area ini tidak boleh kosong";
    }else if(!intCheck(numberInput)){
        inputArea1.value = "Tolong isi dengan angka";
    }else{
        const outputArea = document.getElementById("farenheit");
        const fahrenheit = (numberInput * 9/5) + 32;
        outputArea.value = fahrenheit;  
    }
}

conversionButton.addEventListener("click", () => {
    // Perform other actions as needed
    ctof();
  });
