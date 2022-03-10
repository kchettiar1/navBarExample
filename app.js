menuBtn = document.querySelector('.fas');

function menuToggle() {
  menuBtn.classList.toggle('fa-bars')
  menuBtn.classList.toggle('fa-times')
}

menuBtn.addEventListener('click', menuToggle);

