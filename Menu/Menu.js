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
* Slide in each element from the left when menu opens
* @returns: none
*/
function menuOpen(menuDiv, timeLine) {
  // Remove display: none from the menu div
  menuDiv.style.display = 'block';
  
  // Toggle animation and reveral effects
  timeLine.reversed() ? timeLine.play() : timeLine.reverse();
}

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
const menu = createMenu(menuItems);
headerDiv.appendChild(menu);

// Menu animation variables
const menuAn = new TimelineMax({paused:true, reversed:true});
menuAn.from(menu, {duration: 0.75, x: -100, y: 0, opacity: 0, scale: 1.0});

const menuBtn = document.querySelector('.menu-button');
menuBtn.addEventListener('click', function() {
  menuOpen(menu, menuAn);
});

// Reverse menu if you click outside the menu div
const bodyTag = document.querySelector('body');
bodyTag.addEventListener('click', function(event) {
  if (event.target != menu && event.target !== menuBtn && !(menu.contains(event.target))) {
    if (!menuAn.reversed()) {
      menuOpen(menu, menuAn);
    }
  }
});