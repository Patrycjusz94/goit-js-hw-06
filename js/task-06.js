const input = document.querySelector("#validation-input");
const Length = input.dataset.length;

function validate() {
  if (input.value.length == Length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", validate);
