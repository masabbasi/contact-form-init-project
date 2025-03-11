// import validate from "./validation.js";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const form = document.querySelector("form");
const submit = document.querySelector(".button");
const messages = document.querySelectorAll(".message");
const submitMessage = document.querySelector(".submitMessage");
const inputs = document.querySelectorAll("input");
const generalEnquiry = document.getElementById("GeneralEnquiry");
const supportRequest = document.getElementById("SupportRequest");
const checkbox = document.getElementById("checkbox");
console.log(messages);
function validate(value, message, msgNum) {
  if (!value || msgNum == 2) {
    messages[msgNum].innerHTML = message;
    messages[msgNum].classList.add("messageActive");
    setTimeout(() => {
      messages[msgNum].innerHTML = "";
      messages[msgNum].classList.remove("messageActive");
    }, 2000);
  }
}

firstName.addEventListener("focusout", (e) => {
  validate(firstName.value.trim(), "This field is required", 0);
});

lastName.addEventListener("focusout", (e) => {
  validate(lastName.value.trim(), "This field is required", 1);
});

email.addEventListener("focusout", (e) => {
  if (email.value != "") {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email.value)) {
      validate(email.value.trim(), "Please enter a valid email address", 2);
    }
  } else {
    validate(email.value, "This field is required", 2);
  }
});

form.addEventListener("submit", (e) => {
  const radio = generalEnquiry.checked || supportRequest.checked;
  e.preventDefault();
  if (!radio) {
    validate(radio, "This field is required", 3);
  }
  if (!checkbox.checked) {
    validate(checkbox.checked, "This field is required", 4);
  }
  if (
    firstName.value.trim() != "" &&
    lastName.value.trim() != "" &&
    email.value.trim() != "" &&
    radio &&
    checkbox.checked
  ) {
    submitMessage.innerHTML = "Message Sent!";
    submitMessage.style.backgroundColor = "rgb(91, 224, 126)";
    submitMessage.classList.add("submitMessageActive");
  } else {
    submitMessage.innerHTML = "enter the required fields";
    submitMessage.style.backgroundColor = "rgb(224, 91, 91)";
    submitMessage.classList.add("submitMessageActive");
  }
  setTimeout(() => {
    submitMessage.innerHTML = "";
    submitMessage.classList.remove("submitMessageActive");
  }, 2000);
});
