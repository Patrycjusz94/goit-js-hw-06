const numberOfCategories = document.querySelector(".categories");
const headersOfItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${headersOfItems.length}`);

headersOfItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
