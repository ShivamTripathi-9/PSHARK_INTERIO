

window.onload = function () {
  let links = document.querySelectorAll("a");
  links.forEach(link => {
      link.href = link.href.replace(".html", "");
  });
};

// Function to load external HTML into a container
function loadHTML(containerId, file) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;

          // Re-run hamburger menu logic after loading header
          if (containerId === "header-container") {
              setupHamburgerMenu();
          }
      })
      .catch(error => console.error("Error loading " + file, error));
}

// Load header and footer
window.onload = function () {
  loadHTML("header-container", "Component/header.html");
  loadHTML("footer-container", "Component/footer.html");
};

// Function to enable hamburger menu
function setupHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("active");
      });
  }
}
