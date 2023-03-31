const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");
// const items = [];
// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   items.push(item);
// });

// list.append(...items);


const allIngredients = ingredients.map((ingredient) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add("item");
  return ingredientsList;
});

const addIngredientsList = document.querySelector("ul");
addIngredientsList.append(...allIngredients);
