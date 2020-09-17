// js/web-main.js

const frontTitle = document.querySelector('.bg-left .frontTitle'),
  backTitle = document.querySelector('.bg-right .backTitle');

function init() {
  frontTitle.addEventListener('click', function(event) {
    location.href = "html/web/front/front-main.html";
  })
  backTitle.addEventListener('click', function(event) {
    location.href = "html/web/back/back-main.html";
  })
}

init();