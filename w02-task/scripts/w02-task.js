/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Matias Cardozo";

const currentYear = new Date().getFullYear();

const profilePicture = "images/mifoto.png";

const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#mifoto');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${mifoto}`);

const favoriteFoods = ['Pizza', 'Ice Cream', 'Sushi'];
foodElement.innerHTML = favoriteFoods.join('<br>');
const newFavoriteFood = 'Burger';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`;
favoriteFoods.shift();
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');
favoriteFoods.pop();
foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');



/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






