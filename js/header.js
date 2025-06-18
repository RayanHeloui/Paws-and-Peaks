console.log("Header loaded!");

document.addEventListener('click', function (e) {
  const searchBtn = document.getElementById('search-btn');
  const cartBtn = document.getElementById('cart-btn');
  const accountBtn = document.getElementById('account-btn');

  const searchPopup = document.getElementById('search-popup');
  const cartPopup = document.getElementById('cart-popup');
  const accountPopup = document.getElementById('account-popup');

  const isClickInsidePopup =
    searchPopup.contains(e.target) ||
    cartPopup.contains(e.target) ||
    accountPopup.contains(e.target);

  const hideAll = () => {
    searchPopup.classList.add('hidden');
    cartPopup.classList.add('hidden');
    accountPopup.classList.add('hidden');
  };

  if (searchBtn.contains(e.target)) {
    hideAll();
    searchPopup.classList.toggle('hidden');
  } else if (cartBtn.contains(e.target)) {
    hideAll();
    cartPopup.classList.toggle('hidden');
  } else if (accountBtn.contains(e.target)) {
    hideAll();
    accountPopup.classList.toggle('hidden');
  } else if (!isClickInsidePopup) {
    hideAll();
  }
});
