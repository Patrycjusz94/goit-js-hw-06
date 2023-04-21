let counterValue = 0;
const value = document.querySelector("#value");
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const clickIncrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const clickDecrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

buttonIncrement.addEventListener("click", clickIncrement);
buttonDecrement.addEventListener("click", clickDecrement);
