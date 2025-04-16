


// slider image up

document.addEventListener('DOMContentLoaded', function() {
  const pages = document.querySelectorAll('.page');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentPage = 0;
  let autoSlideInterval;

  // Function to show the current page
  function showPage(index) {
      pages.forEach((page, i) => {
          if (i === index) {
              page.style.transform = 'rotateY(0deg)';
              page.style.zIndex = pages.length - i;
          } else if (i < index) {
              page.style.transform = 'rotateY(-180deg)';
              page.style.zIndex = i;
          } else {
              page.style.transform = 'rotateY(0deg)';
              page.style.zIndex = pages.length - i;
          }
      });
  }

  // Function to go to the next page
  function nextPage() {
      currentPage = (currentPage + 1) % pages.length;
      showPage(currentPage);
  }

  // Function to go to the previous page
  function prevPage() {
      currentPage = (currentPage - 1 + pages.length) % pages.length;
      showPage(currentPage);
  }

  // Automatic sliding
  function startAutoSlide() {
      autoSlideInterval = setInterval(nextPage, 3000); // Change slide every 3 seconds
  }

  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  // Event listeners for buttons
  nextBtn.addEventListener('click', function() {
      stopAutoSlide();
      nextPage();
      startAutoSlide();
  });

  prevBtn.addEventListener('click', function() {
      stopAutoSlide();
      prevPage();
      startAutoSlide();
  });

  // Initialize the slider
  showPage(currentPage);
  startAutoSlide();
});


