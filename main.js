function validateEmail(e) {
  const emailInputEl = document.getElementById("emailId");
  const notValidLabelEl = document.querySelector(".not-valid-email");
  e.preventDefault();
  if (checkEmail(emailInputEl.value)) {
    emailInputEl.classList.remove("wrong-email");
    notValidLabelEl.style.display = "none";
    sendForm();
  } else {
    notValidLabelEl.style.display = "";
    emailInputEl.classList.add("wrong-email");
  }
}

function checkEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(email);
}

function sendForm() {
    const succesBoxEl = document.querySelector(".success-box");
    const boxEl = document.querySelector(".box");
    succesBoxEl.style.display = "";
    boxEl.style.display = "none";
}

function dismissMessage() {
  const boxEl = document.querySelector(".box");
  const succesBoxEl = document.querySelector(".success-box");
  succesBoxEl.style.display = "none";
  boxEl.style.display = "";
}
