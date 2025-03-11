function clearForm(
  {
    firstName,
    lastName,
    email,
    generalEnquiry,
    supportRequest,
    messageBox,
    checkbox,
  },
  generalEnquiryContainer,
  supportRequestContainer
) {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  generalEnquiry.checked = false;
  supportRequest.checked = false;
  messageBox.value = "";
  checkbox.checked = false;
  generalEnquiryContainer.classList.remove("queryTypeActive");
  supportRequestContainer.classList.remove("queryTypeActive");
}

export default clearForm;
