
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.querySelector('.nav__list');
  const navList_2 = document.querySelector('.nav__list-2');

  menuIcon.addEventListener('click', function () {
    navList.classList.toggle('active');
  });
  menuIcon.addEventListener('click', function () {
    navList_2.classList.toggle('active');
  });
});


document.getElementById('toggleDark').addEventListener('click', function() {
  document.body.classList.toggle('light-theme');
  
});