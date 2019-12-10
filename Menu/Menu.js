/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

/*
* Create a menu component
* @param {Array} menuItems: The array of items to add to the menu
* @returns {Object} divEl: The div element containing the menu
*/
function createMenu(menuItems) {
  // Create elements
  const divEl = document.createElement('div');
  const ulEl = document.createElement('ul');

  // Add the 'menu' class to the div
  divEl.classList.add('menu');
  
  // Populate the menu with items from menuItems
  menuItems.forEach(menuItem => {
    const newLi = document.createElement('li');
    newLi.textContent = menuItem;
    ulEl.appendChild(newLi);
  });

  // Add ulEl to the div
  divEl.appendChild(ulEl);

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function() {
    divEl.classList.toggle('menu--open');
  });
  
  return divEl;
}

const headerDiv = document.querySelector('.header');
headerDiv.appendChild(createMenu(menuItems));