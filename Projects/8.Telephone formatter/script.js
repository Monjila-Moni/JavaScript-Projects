const userInput = document.querySelector('input');


let previousValue = ""

userInput.addEventListener("input", function (e) {
    const rawInput = e.target.value
    let digits = rawInput.replace(/\D/g, "");
    let firstThree = digits.slice(0, 3);



    if (digits.length === 4 && previousValue.length < digits.length) {
        e.target.value = `+(${firstThree}) - ${digits[3]}`;
    }

  else if (digits.length === 3 && previousValue.length > digits.length) {
        e.target.value = firstThree;
    }
    // Allow typing digits normally otherwise
    else if (digits.length < 4) {
        e.target.value = digits;
    }

    previousValue = e.target.value.replace(/\D/g, ""); // track only digits
});

