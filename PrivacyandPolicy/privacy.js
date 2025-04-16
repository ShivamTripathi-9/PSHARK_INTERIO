document.addEventListener("DOMContentLoaded", function() {
  const privacyLink = document.querySelector(".term1");
  const contentDiv = document.getElementById("content");

  privacyLink.addEventListener("click", function(event) {
      event.preventDefault();

      // Load privacy.html dynamically
      fetch("privacy.html")
          .then(response => response.text())
          .then(data => {
              contentDiv.innerHTML = data;
              attachBackButton();
          });
  });

  
  
});




