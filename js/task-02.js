const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const ingredientsArray = ingredients.map(element => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');

  const ingredientName = document.createElement('p');
  ingredientName.textContent = element;
  ingredientItem.appendChild(ingredientName);

  return ingredientItem;
});

ingredientsList.append(...ingredientsArray);