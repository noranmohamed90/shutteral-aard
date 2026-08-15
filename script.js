
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const viewport = document.querySelector('.slider-viewport');
    let currentIndex = 0;
    function slideImages(direction) {
      const slideWidth = slides[0].offsetWidth + 20;
      const visibleCount = Math.floor(viewport.offsetWidth / slideWidth);
      const maxIndex = slides.length - visibleCount;
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      const moveAmount = currentIndex * slideWidth;
      track.style.transform = `translateX(${moveAmount}px)`;
    }
    

fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });


fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

fetch("header.html")
  .then(response => response.text())
  .then(data => {

    document.getElementById("header-placeholder").innerHTML = data;

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
      });

    }

  });

  