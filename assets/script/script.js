
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
document.getElementById("toggleDark").addEventListener("click", function() {
  var element = document.getElementsByClassName("fa-brightness")[0];
  if (element) {  // Проверка на случай, если элементов с этим классом нет
    element.classList.toggle("fa-moon");
  }
});

