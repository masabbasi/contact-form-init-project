import formValidation from "./formValidation.js";
import clearForm from "./clearForm.js";

const $ = document;
const form = $.getElementById("form");
const firstName = $.getElementById("firstName");
const lastName = $.getElementById("lastName");
const email = $.getElementById("email");
const generalEnquiry = $.getElementById("generalEnquiry");
const supportRequest = $.getElementById("supportRequest");
const messageBox = $.getElementById("messageBox");
const checkbox = $.getElementById("checkbox");
const submitButton = $.getElementById("submitButton");
const successMessage = $.getElementById("successMessage");
const inputs = document.querySelectorAll('input[type="text"],input[type="email"], textarea');

const allInput = {
  firstName,
  lastName,
  email,
  generalEnquiry,
  supportRequest,
  messageBox,
  checkbox,
};

const showSuccessMessage = () => {
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
  clearForm(allInput);
};

const submitHandler = (e) => {
  e.preventDefault();
  const status = formValidation(allInput);
  if (status) {
    e.preventDefault();
    showSuccessMessage();
  } else {
    e.preventDefault();
  }
};

submitButton.addEventListener("click",submitHandler);