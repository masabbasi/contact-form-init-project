import showError from "./showError.js";

function formValidation({
  firstName,
  lastName,
  email,
  generalEnquiry,
  supportRequest,
  messageBox,
  checkbox,
}) {
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let queryTypeValue =
    generalEnquiry.checked || supportRequest.checked;
  let messageBoxValue = messageBox.value.trim();
  let checkboxValue = checkbox.checked;
  if (!firstNameValue) {
    showError(0, "This field is required",firstName);
  }
  if (!lastNameValue) {
    showError(1, "This field is required",lastName);
  }
  if (!emailValue) {
    showError(2, "This field is required",email);
  } else {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(emailValue)) {
      showError(2, "Please enter a valid email address",email);
    }
  }
  if (!queryTypeValue) {
    showError(3, "Please select a query type",null);
  }
  if (!messageBoxValue) {
    showError(4, "This field is required",messageBox);
  }

  if (!checkboxValue) {
    showError(5, "To submit this form, please consent to being contacted",checkbox);
  }

  if (
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    queryTypeValue &&
    messageBoxValue &&
    checkboxValue
  ) {
    return true;
  } else return false;
}

export default formValidation;
