// Placeholder for future interactive logic
console.log("Header loaded!");
// Toggle visibility of popups
document.addEventListener('click', function (e) {
  const searchBtn = document.querySelector('.fa-search');
  const cartBtn = document.querySelector('.fa-shopping-cart');
  const accountBtn = document.querySelector('.fa-user');

  const searchPopup = document.getElementById('search-popup');
  const cartPopup = document.getElementById('cart-popup');
  const accountPopup = document.getElementById('account-popup');

  // Hide all popups
  const hideAll = () => {
    searchPopup.classList.add('hidden');
    cartPopup.classList.add('hidden');
    accountPopup.classList.add('hidden');
  };

  // Click handlers
  if (searchBtn.contains(e.target)) {
    hideAll();
    searchPopup.classList.toggle('hidden');
  } else if (cartBtn.contains(e.target)) {
    hideAll();
    cartPopup.classList.toggle('hidden');
  } else if (accountBtn.contains(e.target)) {
    hideAll();
    accountPopup.classList.toggle('hidden');
  } else {
    hideAll();
  }
});

