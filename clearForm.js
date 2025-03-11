function clearForm({
  firstName,
  lastName,
  email,
  generalEnquiry,
  supportRequest,
  messageBox,
  checkbox,
}) {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  generalEnquiry.checked = false;
  supportRequest.checked = false;
  messageBox.value = "";
  checkbox.checked = false;
}

export default clearForm;
