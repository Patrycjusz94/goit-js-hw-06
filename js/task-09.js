function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorButton = document.querySelector("button");
const body = document.querySelector("body");
const span = document.querySelector(".color");

const changeColor = () => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};
colorButton.addEventListener("click", changeColor);
