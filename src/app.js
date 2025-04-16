import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const alertBox = document.querySelector("#alert-message"); 
  const cardInput = document.getElementById("cardNumber");
  const cvcInput = document.getElementById("cvc");
  const amountInput = document.getElementById("amount");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const cityInput = document.getElementById("city");
  const stateSelect = document.getElementById("state");
  const postalCodeInput = document.getElementById("postalCode");
  const messageInput = document.getElementById("comment");
  const sendBtn = document.querySelector(".btn-primary");

  sendBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const inputs = [  
      cardInput, cvcInput, amountInput, firstNameInput,
      lastNameInput, cityInput, stateSelect, postalCodeInput, messageInput
    ];
    console.log(inputs)
    let hasError = false;
    inputs.forEach(input => input.style.backgroundColor = "");

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.backgroundColor = "#f8d7da";
        hasError = true;
      }
    });

    if (stateSelect.value === "Pick a state") {
      stateSelect.style.backgroundColor = "#f8d7da";
      hasError = true;
    } else {
      stateSelect.style.backgroundColor = "";
    }

    if (hasError) {
      alertBox.style.display = "block";
    } else {
      alertBox.style.display = "none";
      alert("Formulario enviado correctamente ✅");
    }
  });
};
