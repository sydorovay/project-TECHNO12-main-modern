var currentUrl = window.location.pathname;

// Отримання посилань на елементи
var homeLink = document.querySelector('.home-link');
var shoppingListLink = document.querySelector('.shopping-list-link');

// Функція для зміни класів сторінки в залежності від URL
function setPageClass() {
  if (currentUrl === '/index.html') {
    homeLink.classList.add('current-page-home');
    shoppingListLink.classList.remove('current-page-shopping');
  } else if (currentUrl === '/shoppinglist.html') {
    shoppingListLink.classList.add('current-page-shopping');
    homeLink.classList.remove('current-page-home');
  }
}

setPageClass()
