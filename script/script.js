function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "block") {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  } else {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  }
}

// Chair Data
document.addEventListener("DOMContentLoaded", function () {
  const chairs = [
    {
      id: "chair",
      name: "President Chairs",
      img: "images/president.jpg",
      url: "product.html",
      new: true,
    },
    {
      name: "CEO Chairs",
      img: "images/ceo.jpg",
      url: "product.html",
      new: false,
    },
    {
      name: "Executive Chairs",
      img: "images/ExecutiveChair.jpg",
      url: "product.html",
      new: true,
    },
    {
      name: "Manager Chairs",
      img: "images/manager-chair.jpeg",
      url: "product.html",
      new: false,
    },
    {
      name: "Mesh Chairs",
      img: "images/meshchair1.jpg",
      url: "product.html",
      new: true,
    },
    {
      name: "Visiter Chair",
      img: "images/bmsnxcz.jpg",
      url: "product.html",
      new: true,
    },
    // { name: "WorkStation Chairs", img: "images/workstation.jpg", url: "product.html", new: false },
    {
      name: "Student Chairs",
      img: "images/studentchair.jpg",
      url: "product.html",
      new: true,
    },
    {
      name: "Student Desk",
      img: "images/studentdesk.jpg",
      url: "product.html",
      new: true,
    },
    {
      name: "Cafe Chairs",
      img: "images/cafechair.jpg",
      url: "product.html",
      new: true,
    },
    // { name: "Bar Stool", img: "images/barstool.jpg", url: "product.html", new: false },
    // { name: "Cafe Table", img: "images/cafetable.jpg", url: "product.html", new: true },
    // { name: "Center Table", img: "images/centretable.jpg", url: "product.html", new: true },
    // { name: "Office Sofa", img: "images/officesofa.jpg", url: "product.html", new: true },
    {
      name: "Auditorium Chair",
      img: "images/auditoriumchair.jpg",
      url: "product.html",
      new: false,
    },
    // { name: "Canteen Table", img: "images/canteentable.jpg", url: "product.html", new: true },
    // { name: "Canteen Table", img: "images/canteentable.jpg", url: "product.html", new: true },
  ];

  const accessories = [
    {
      name: "Display Racks",
      img: "images/DispalyRacks.jpg",
      url: "MaintenancePage.html",
      new: true,
    },
    {
      name: "Metal CPU Trolley",
      img: "images/MentalCPUTrolly.jpg",
      url: "MaintenancePage.html",
      new: false,
    },
    {
      name: "Hostel Beds",
      img: "images/Hostalbed.jpg",
      url: "MaintenancePage.html",
      new: true,
    },
    { name: "Setty", img: "images/Setty.jpg", url: "MaintenancePage.html ", new: false },
  ];

  // Function to open page & store selected chair
  function openPage(item) {
    localStorage.setItem("selectedChair", JSON.stringify(item)); // Store chair data
    window.location.href = item.url; // Redirect to the page
  }

  // Get the selected chair from localStorage
  const selectedChairData = localStorage.getItem("selectedChair");
  let selectedChair = selectedChairData
    ? JSON.parse(selectedChairData).name
    : null;

  // Populate Chair Cards (excluding selected)
  const chairsContainer = document.getElementById("chairsContainer");
  chairsContainer.innerHTML = ""; // Clear existing content

  chairs.forEach((chair) => {
    if (chair.name !== selectedChair) {
      // Hide the selected chair
      const chairCard = document.createElement("div");
      chairCard.classList.add("chair-card");
      chairCard.onclick = () => openPage(chair);

      chairCard.innerHTML = `
                ${chair.new ? '<span class="new-label">NEW</span>' : ""}
                <img src="${chair.img}" alt="${chair.name}">
                <div class="imagdownheading">${chair.name}</div>
            `;

      chairsContainer.appendChild(chairCard);
    }
  });

  // Populate Accessories Cards
  const accessoriesContainer = document.getElementById("AccessoriesContainer");
  accessoriesContainer.innerHTML = ""; // Clear existing content

  accessories.forEach((accessory) => {
    const accessoryCard = document.createElement("div");
    accessoryCard.classList.add("accessory-card");
    accessoryCard.onclick = () => openPage(accessory);

    accessoryCard.innerHTML = `
            ${accessory.new ? '<span class="new-label">NEW</span>' : ""}
            <img src="${accessory.img}" alt="${accessory.name}">
            <div class="imagdownheading">${accessory.name}</div>
        `;

    accessoriesContainer.appendChild(accessoryCard);
  });
});



// Modular Office Furniture Data
const modularFurniture = [
  {
    name: "Computer Table",
    img: "images/computertable.jpg",
    url: "MaintenancePage.html",
    new: true,
  },
  {
    name: "Reception Table",
    img: "images/receptiontable.jpg",
    url: "MaintenancePage.html",
    new: false,
  },
  {
    name: "President Chairs",
    img: "images/confrencetable.jpg",
    url: "MaintenancePage.html",
    new: true,
  },
  {
    name: "Executive Table",
    img: "images/Executivetable.jpg",
    url: "MaintenancePage.html",
    new: false,
  },
  {
    name: "WorkStation ",
    img: "images/workstation1.jpg",
    url: "MaintenancePage.html",
    new: true,
  },
  {
    name: "Modularofficedesk",
    img: "images/modularofficedesk.jpg",
    url: "MaintenancePage.html",
    new: false,
  },
  {
    name: "Director Table ",
    img: "images/Directortable.jpg",
    url: "MaintenancePage.html",
    new: true,
  },
  {
    name: "Laboratory Desk",
    img: "images/LaboratoryDesk.jpg",
    url: "MaintenancePage.html",
    new: true,
  },
];

// Function to Open Page
function openPage(url) {
  window.location.href = url;
}

// Populate Modular Office Furniture Cards
const modularContainer = document.getElementById("modularContainer");

modularFurniture.forEach((item) => {
  const modularCard = document.createElement("div");
  modularCard.classList.add("modular-card");
  modularCard.onclick = () => openPage(item.url);

  modularCard.innerHTML = `
        ${item.new ? '<span class="new-label">NEW</span>' : ""}
        <img src="${item.img}" alt="${item.name}">
        <div class="imagdownheading">${item.name}</div>
    `;

  modularContainer.appendChild(modularCard);
});

// Storage Furniture Data
const storageFurniture = [
  {
    name: "Wooden Storage",
    img: "images/woodenstorage.jpg",
    url: "MaintenancePage.html",
    new: true,
  },
  {
    name: "Metal Storage",
    img: "images/mentalstorage.jpg",
    url: "MaintenancePage.html",
    new: false,
  },
  {
    name: "Industrial Lockers",
    img: "images/industriallockers.jpg",
    url: "MaintenancePage.html",
    new: true,
  },
  {
    name: "Compactor",
    img: "images/compactor.jpg",
    url: "MaintenancePage.html",
    new: false,
  },
];

// Function to Open Page
function openPage(url) {
  window.location.href = url;
}

// Populate Storage Furniture Cards
const storageContainer = document.getElementById("storageContainer");

storageFurniture.forEach((item) => {
  const storageCard = document.createElement("div");
  storageCard.classList.add("storage-card");
  storageCard.onclick = () => openPage(item.url);

  storageCard.innerHTML = `
        ${item.new ? '<span class="new-label">NEW</span>' : ""}
        <img src="${item.img}" alt="${item.name}">
        <div class="imagdownheading">${item.name}</div>
    `;

  storageContainer.appendChild(storageCard);
});

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll(
    ".chairheading, .Accessoriesheading, .modularheading, .storageFurnitureheading"
  );

  headings.forEach((heading) => {
    let text = heading.innerText;
    heading.innerHTML = ""; // Clear original text
    heading.classList.add("animated-text");

    // Split text into characters and wrap each in a span
    text.split("").forEach((char, index) => {
      let span = document.createElement("span");

      if (char === " ") {
        span.innerHTML = "&nbsp;"; // Add a non-breaking space
      } else {
        span.innerText = char;
      }

      span.style.animationDelay = `${index * 0.2}s`; // Delays each character
      heading.appendChild(span);
    });
  });
});

//   testimonila

const testimonials = [
  {
    companyLogo: "PNG.png",
    title: "Transforming Spaces with Elegance & Comfort!",
    description:
      "PSHARK INTERIO is dedicated to creating stylish, durable, and ergonomic furniture solutions. With a perfect balance of innovation, craftsmanship, and sustainability, we redefine workspaces and living areas. Our commitment to quality ensures that every piece is designed for aesthetics, functionality, and long-lasting comfort. Discover furniture that blends seamlessly with modern interiors, enhancing productivity and style.",
    name: "S P Sharma ",
    position: "Director",
    profileImage: "/images/testimonial/SPSharma.jpeg",
  },
  {
    companyLogo: "PNG.png",
    title: "Redefining Spaces with Style & Comfort!",
    description:
      "At PSHARK INTERIO, we believe that furniture is more than just decor—it’s a blend of innovation, comfort, and functionality. Our expertly crafted designs enhance workspaces and homes, ensuring both aesthetics and durability. With a commitment to quality and sustainability, we bring you modern furniture solutions that elevate your lifestyle.",
    name: "Aadarsh Sharma",
    position: "Manager",
    profileImage: "/images/testimonial/aadarsh.jpeg",
  },
  {
    companyLogo: "PNG.png",
    title: "Innovative Furniture for Inspired Living!",
    description:
      "At PSHARK INTERIO, we craft furniture that blends elegance, functionality, and durability. With a deep focus on modern design and sustainability, we transform spaces into inspiring environments. Whether it’s for offices, homes, or commercial spaces, our expertly crafted pieces ensure comfort and style. Elevate your interiors with PSHARK INTERIO – where innovation meets craftsmanship!",

    name: "Shivam Tripathi",
    position: "CEO",
    profileImage: "/images/testimonial/shivam.png",
  },
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function renderTestimonials() {
  slider.innerHTML = testimonials
    .map(
      (testimonial, index) => `
        <div class="container_card" style="transform: translateX(-${
          currentIndex * 100
        }%);">
            <div class="container_card_content">
                <img src="${
                  testimonial.companyLogo
                }" alt="Company Logo" class="company-logo" />
                <h4 style="font-weight: bold;">${testimonial.title}</h4>
                <p style="text-align: justify;">${testimonial.description}</p>
                <h4 style="font-weight: bold;">${testimonial.name}</h4>
                <p class="position">${testimonial.position}</p>
            </div>
            <div class="container_card_pofilephoto">
                <img src="${testimonial.profileImage}" class="profile-img" />
            </div>
        </div>
    `
    )
    .join("");
}

function goPrev() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonials();
}

function goNext() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonials();
}

function startAutoSlide() {
  setInterval(goNext, 3000);
}

renderTestimonials();
startAutoSlide();

// about
document
  .getElementById("about-readMoreBtn")
  .addEventListener("click", function () {
    alert("Explore more about  PSHARK INTERIO's furniture collections!");
  });

// contact
// Open email client
function sendEmail() {
  window.location.href = "mailto:psharkinterio@gmail.com";
}

// Open brochure PDF
function downloadBrochure() {
  window.open("images/psharkinterio.pdf", "_blank");
}

// Open WhatsApp chat
function openWhatsApp() {
  const number = "9654689000"; // hidden from HTML
  const message = encodeURIComponent("Hi, I'm interested in your services.");
  const url = `https://wa.me/${number}?text=${message}`;
  window.open(url, "_blank");
}

function toggleAccordion(index) {
  let items = document.querySelectorAll(".accordion-content");
  let arrows = document.querySelectorAll(".arrow");

  items.forEach((item, i) => {
    if (i === index) {
      let isActive = item.classList.contains("active");
      item.classList.toggle("active", !isActive);
      arrows[i].classList.toggle("up", !isActive);
    } else {
      item.classList.remove("active");
      arrows[i].classList.remove("up");
    }
  });
}
