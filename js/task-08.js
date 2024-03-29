const form = document.querySelector(".login-form");

form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please complete all fields");
  }
  console.log(`Email : ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
