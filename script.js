const display = document.getElementById("display");
let currentInput = "";
let operator = null;
let firstOperand = null;

document.querySelectorAll(".btn-calculator").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      // Réinitialise la calculatrice
      currentInput = "";
      operator = null;
      firstOperand = null;
      display.innerText = "0";
    } else if (value === "=") {
      // Effectue le calcul
      if (operator && firstOperand !== null) {
        const secondOperand = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
          case "+":
            result = firstOperand + secondOperand;
            break;
          case "-":
            result = firstOperand - secondOperand;
            break;
          case "x":
            result = firstOperand * secondOperand;
            break;
          case "/":
            result =
              secondOperand !== 0 ? firstOperand / secondOperand : "Erreur";
            break;
        }

        display.innerText = result;
        currentInput = "";
        operator = null;
        firstOperand = null;
      }
    } else if (["+", "-", "x", "/"].includes(value)) {
      // Affiche l'opérateur et stocke le premier opérande
      if (currentInput) {
        firstOperand = parseFloat(currentInput);
        operator = value;
        currentInput = "";
        display.innerText = `${firstOperand} ${operator}`;
      }
    } else {
      // Ajoute des chiffres au courant
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});
