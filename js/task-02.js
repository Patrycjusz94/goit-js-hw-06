const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector(`#ingredients`);

const elementLiArray = ingredients.map((elementLi) => {
  const li = document.createElement("li");
  li.textContent = elementLi;
  li.classList.add("item");
  return li;
});
ul.append(...elementLiArray);
