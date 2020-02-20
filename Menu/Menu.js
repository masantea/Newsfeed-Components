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

  function menuComponent(array) {

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuList = document.createElement('ul');

  menu.appendChild(menuList)

  array.forEach(function(item, index, array) {
    const listItems = document.createElement('li')
    listItems.textContent = item;
    menuList.append(listItems);
  });

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (e)=> {
    menu.classList.toggle('menu--open');
  });

  return menu;
  };

  const header = document.querySelector('.header');
  header.appendChild(menuComponent(menuItems)); 

  


  function createArticle(data) {
    const articleCard = document.createElement("div");
    const articleTitle = document.createElement("h2");
    const articleDate = document.createElement("p");
    const paragraphOne = document.createElement("p");
    const paragraphTwo = document.createElement("p");
    const paragraphThree = document.createElement("p");
    const toggleButton = document.createElement("span");
    articleCard.append(articleTitle);
    articleCard.append(articleDate);
    articleCard.append(paragraphOne);
    articleCard.append(paragraphTwo);
    articleCard.append(paragraphThree);
    articleCard.append(toggleButton);
    articleCard.classList.add("article");
    articleDate.classList.add("date");
    toggleButton.classList.add("expandButton");
    articleTitle.textContent = data.title;
    articleDate.textContent = data.date;
    paragraphOne.textContent = data.firstParagraph;
    paragraphTwo.textContent = data.secondParagraph;
    paragraphThree.textContent = data.thirdParagraph;
    toggleButton.textContent = "Expand";
    toggleButton.addEventListener("click", e =>
      articleCard.classList.toggle("article-open")
    );
    return articleCard;
  }
  const wholeArticle = document.querySelector(".articles");
  data.forEach(function(item) {
    wholeArticle.append(createArticle(item));
  });