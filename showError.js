const error = document.querySelectorAll(".error");

function showError(errorNumber, errorMessage, element) {
  let errorElement = error[errorNumber];
  errorElement.innerText = errorMessage;
  if (element) {
    element.classList.add("redBorder");
  }
  setTimeout(() => {
    errorElement.innerText = "";
    if (element) {
      element.classList.remove("redBorder");
    }
  }, 3000);
}

export default showError;
