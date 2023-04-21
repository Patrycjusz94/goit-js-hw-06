const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (input.value.length == input.dataset.length) {
    input.classList = "valid";
  } else {
    input.classList = "invalid";
  }
});
