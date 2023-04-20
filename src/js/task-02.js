const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector(`#ingredients`);

console.log(ul);

ingredients.forEach((elementLi) => {
  let li = document.createElement("li");
  li.textContent = elementLi;
  li.classList.add("item");
  ul.append(li);

  console.log(li);
});
