const list = document.querySelector("ul#categories");
const listItem = list.querySelectorAll("li.item");
console.log("Number of categories: " + listItem.length);

// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   console.log("Category: " + item.querySelector("h2").textContent);
//   const itemsElements = item.querySelector("ul");
//   console.log("Elements: " + itemsElements.querySelectorAll("li").length);
// });

const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  const elementHeadingOfCategory = item.querySelector("h2");
  console.log("Category:", elementHeadingOfCategory.textContent);
  const elementsInCategorySum = item.querySelectorAll("li");
  console.log("Elements:", elementsInCategorySum.length);
});