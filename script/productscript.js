document.addEventListener("DOMContentLoaded", function () {
  const storedChair = localStorage.getItem("selectedChair");

  // Chair data with unique IDs and images
  const chairData = {
    "President Chairs": {
      id: "CHAIR-101",
      img: "images/president.jpg",
      description: "good quality",
      // price: "5099.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/chairs/Presidentchair1.jpg",
          rating: 5,
        },
        {
          id: "IMG-002",
          name: "Side View",
          src: "/images/ProductImg/chairs/Presidentchair2.jpg",
          rating: 5,
        },
        {
          id: "IMG-003",
          name: "Back View",
          src: "/images/ProductImg/chairs/Presidentchair3.jpg",
          rating: 5,
        },
        {
          id: "IMG-004",
          name: "Armrest",
          src: "/images/ProductImg/chairs/Presidentchair4.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Cushion",
          src: "/images/ProductImg/chairs/Presidentchair5.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Legs",
          src: "/images/ProductImg/chairs/Presidentchair6.jpg",
          rating: 5,
        },
        {
          id: "IMG-007",
          name: "Close-up",
          src: "/images/ProductImg/chairs/Presidentchair7.jpg",
          rating: 5,
        },
        {
          id: "IMG-008",
          name: "Top View",
          src: "/images/ProductImg/chairs/Presidentchair8.jpg",
          rating: 5,
        },
        {
          id: "IMG-009",
          name: "Cushion",
          src: "/images/ProductImg/chairs/Presidentchair9.jpg",
          rating: 4,
        },
        {
          id: "IMG-010",
          name: "Legs",
          src: "/images/ProductImg/chairs/Presidentchair10.jpg",
          rating: 5,
        },
        {
          id: "IMG-011",
          name: "Close-up",
          src: "/images/ProductImg/chairs/Presidentchair11.jpg",
          rating: 4,
        },
        {
          id: "IMG-012",
          name: "Top View",
          src: "/images/ProductImg/chairs/Presidentchair12.jpg",
          rating: 3,
        },
      ],
    },
    "CEO Chairs": {
      id: "CHAIR-102",
      img: "/images/ProductImg/CEOchairs/CEOchairs1.jpg   ",
      description: "good quality",
      price: "299.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/CEOchairs/CEOchairs1.jpg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Side View",
          src: "/images/ProductImg/CEOchairs/CEOchairs2.jpg",
          rating: 5,
        },
        {
          id: "IMG-003",
          name: "Back View",
          src: "/images/ProductImg/CEOchairs/CEOchairs3.jpg",
          rating: 5,
        },
        {
          id: "IMG-004",
          name: "Armrest",
          src: "/images/ProductImg/CEOchairs/CEOchairs4.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Cushion",
          src: "/images/ProductImg/CEOchairs/CEOchairs5.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Legs",
          src: "/images/ProductImg/CEOchairs/CEOchairs6.jpg",
          rating: 5,
        },
        {
          id: "IMG-007",
          name: "Close-up",
          src: "/images/ProductImg/CEOchairs/CEOchairs7.jpg",
          rating: 5,
        },
        {
          id: "IMG-008",
          name: "Top View",
          src: "/images/ProductImg/CEOchairs/CEOchairs8.jpg",
          rating: 5,
        },
        {
          id: "IMG-009",
          name: "Cushion",
          src: "/images/ProductImg/CEOchairs/CEOchairs9.jpg",
          rating: 4,
        },
        {
          id: "IMG-010",
          name: "Legs",
          src: "/images/ProductImg/CEOchairs/CEOchairs10.jpg",
          rating: 5,
        },
        {
          id: "IMG-011",
          name: "Close-up",
          src: "/images/ProductImg/CEOchairs/CEOchairs11.jpg",
          rating: 4,
        },
        {
          id: "IMG-012",
          name: "Top View",
          src: "/images/ProductImg/CEOchairs/CEOchairs12.jpg",
          rating: 3,
        },
      ],
    },
    "Manager Chairs": {
      id: "CHAIR-103",
      img: "images/manager-chair.jpeg",
      description: "good quality",
      price: "299.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/ManagerChairs/ManagerChairs1.jpg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Side View",
          src: "/images/ProductImg/ManagerChairs/ManagerChairs2.jpg",
          rating: 5,
        },
        {
          id: "IMG-003",
          name: "Back View",
          src: "/images/ProductImg/ManagerChairs/ManagerChairs3.jpg",
          rating: 5,
        },
        {
          id: "IMG-004",
          name: "Armrest",
          src: "/images/ProductImg/ManagerChairs/ManagerChairs4.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Cushion",
          src: "/images/ProductImg/ManagerChairs/ManagerChairs5.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Legs",
          src: "/images/ProductImg/ManagerChairs/ManagerChairs6.jpg",
          rating: 5,
        },
        {
          id: "IMG-007",
          name: "Close-up",
          src: "/images/ProductImg/ManagerChairs/ManagerChairs7.jpg",
          rating: 5,
        },
      ],
    },

    "Mesh Chairs": {
      id: "CHAIR-104",
      img: "images/meshchair1.jpg",
      description: "good quality",
      price: "299.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/MeshChair/M_C1.jpg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Front View",
          src: "/images/ProductImg/MeshChair/M_C2.jpg",
          rating: 4,
        },
        {
          id: "IMG-003",
          name: "Front View",
          src: "/images/ProductImg/MeshChair/M_C3.jpg",
          rating: 4,
        },
        {
          id: "IMG-004",
          name: "Front View",
          src: "/images/ProductImg/MeshChair/M_C4.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Front View",
          src: "/images/ProductImg/MeshChair/M_C5.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Front View",
          src: "/images/ProductImg/MeshChair/M_C6.jpg",
          rating: 4,
        },
        {
          id: "IMG-007",
          name: "Front View",
          src: "/images/ProductImg/MeshChair/M_C7.jpg",
          rating: 4,
        },
      ],
    },

    "Visiter Chair": {
      id: "CHAIR-105",
      img: "/images/ProductImg/VisiterChair/VisiterC.jpg",
      description: "good quality",
      price: "299.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC1.jpg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC2.jpg",
          rating: 4,
        },
        {
          id: "IMG-003",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC3.jpg",
          rating: 4,
        },
        {
          id: "IMG-004",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC4.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC5.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC6.jpg",
          rating: 4,
        },
        {
          id: "IMG-007",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC7.jpg",
          rating: 4,
        },
        {
          id: "IMG-008",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC8.jpg",
          rating: 4,
        },
        {
          id: "IMG-009",
          name: "Front View",
          src: "/images/ProductImg/VisiterChair/VisiterC9.jpg",
          rating: 4,
        },
      ],
    },

    "Student Chairs": {
      id: "CHAIR-106",
      img: "/images/ProductImg/Student Chairs/Student Chairs.jpg",
      description: "good quality",
      price: "5000.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/Student Chairs.jpg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs1.jpg",
          rating: 4,
        },
        {
          id: "IMG-003",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs2.jpg",
          rating: 4,
        },
        {
          id: "IMG-004",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs3.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs4.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs5.jpg",
          rating: 4,
        },
        {
          id: "IMG-007",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs6.jpg",
          rating: 4,
        },
        {
          id: "IMG-008",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs7.jpg",
          rating: 4,
        },
        {
          id: "IMG-009",
          name: "Front View",
          src: "/images/ProductImg/Student Chairs/StudentChairs8.jpg",
          rating: 4,
        },
      ],
    },

    "Student Desk": {
      id: "CHAIR-107",
      img: "/images/ProductImg/Student Desk/Student Desk.jpg",
      description: "good quality",
      price: "2909.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk11.jpeg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk12.jpeg",
          rating: 4,
        },
        {
          id: "IMG-003",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk13.jpeg",
          rating: 4,
        },
        {
          id: "IMG-004",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk1.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk2.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk3.jpg",
          rating: 4,
        },
        {
          id: "IMG-007",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk4.jpg",
          rating: 4,
        },
        {
          id: "IMG-008",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk5.jpg",
          rating: 4,
        },
        {
          id: "IMG-009",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk6.jpg",
          rating: 4,
        },
        {
          id: "IMG-010",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk7.jpg",
          rating: 4,
        },
        {
          id: "IMG-011",
          name: "Front View",
          src: "/images/ProductImg/Student Desk/StudentDesk8.jpg",
          rating: 4,
        },
      ],
    },

    "Cafe Chairs": {
      id: "CHAIR-108",
      img: "/images/ProductImg/Cafe Chairs/CafeChairs1.jpg",
      description: "good quality",
      price: "299.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs1.jpg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs2.jpg",
          rating: 4,
        },
        {
          id: "IMG-003",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs3.jpg",
          rating: 4,
        },
        {
          id: "IMG-004",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs4.jpg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs5.jpg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs6.jpg",
          rating: 4,
        },
        {
          id: "IMG-007",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs7.jpg",
          rating: 4,
        },
        {
          id: "IMG-008",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs8.jpg",
          rating: 4,
        },
        {
          id: "IMG-009",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs9.jpg",
          rating: 4,
        },
        {
          id: "IMG-010",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs10.jpg",
          rating: 4,
        },
        {
          id: "IMG-011",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs11.jpg",
          rating: 4,
        },
        {
          id: "IMG-012",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs12.jpg",
          rating: 4,
        },
        {
          id: "IMG-013",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs13.jpg",
          rating: 4,
        },
        {
          id: "IMG-014",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs14.jpg",
          rating: 4,
        },
        {
          id: "IMG-015",
          name: "Front View",
          src: "/images/ProductImg/Cafe Chairs/CafeChairs15.jpg",
          rating: 4,
        },
      ],
    },

    "Auditorium Chair": {
      id: "CHAIR-109",
      img: "/images/ProductImg/AuditoriumChair/Auditorium Chair.jpeg",
      description: "good quality",
      price: "299.99",
      rating: 5,
      extraImages: [
        {
          id: "IMG-001",
          name: "Front View",
          src: " /images/ProductImg/AuditoriumChair/Auditorium Chair.jpeg",
          rating: 4,
        },
        {
          id: "IMG-002",
          name: "Front View",
          src: " /images/ProductImg/AuditoriumChair/AuditoriumChair1.jpeg",
          rating: 4,
        },
        // { id: "IMG-001", name: "Front View", src:" /images/ProductImg/AuditoriumChair/Auditorium Chair2.jpeg",rating:4 },
        {
          id: "IMG-003",
          name: "Front View",
          src: " /images/ProductImg/AuditoriumChair/AuditoriumChair3.jpeg",
          rating: 4,
        },
        {
          id: "IMG-004",
          name: "Front View",
          src: " /images/ProductImg/AuditoriumChair/Auditorium Chair4.jpeg",
          rating: 4,
        },
        {
          id: "IMG-005",
          name: "Front View",
          src: " /images/ProductImg/AuditoriumChair/Auditorium Chair5.jpeg",
          rating: 4,
        },
        {
          id: "IMG-006",
          name: "Front View",
          src: " /images/ProductImg/AuditoriumChair/Auditorium Chair6.jpeg",
          rating: 4,
        },
        {
          id: "IMG-007",
          name: "Front View",
          src: " /images/ProductImg/AuditoriumChair/Auditorium Chair7.jpeg",
          rating: 4,
        },
      ],
    },
  };

  if (storedChair) {
    const chair = JSON.parse(storedChair);

    if (chairData[chair.name]) {
      const selectedChair = chairData[chair.name];

      document.getElementById("chairInfo").innerHTML = `
                <div class="chair-card">
                    <img src="${selectedChair.img}" alt="${chair.name}" class="chair-image">
                    <div class="chair-details">
                        <div class="chair-name">${chair.name}</div>
                        <div class="chair-rating" data-rating="${selectedChair.rating}"></div>
                        <div class="chair-id">ID: ${selectedChair.id}</div>
                          
                       
                           <div class="chair-buy"> <button class="buy-now-button">Buy Now</button></div>

                    </div>
                </div>
            `;

      selectedChair.extraImages.forEach((image) => {
        const imgBox = document.createElement("div");
        imgBox.classList.add("image-box");
        imgBox.innerHTML = `
                    <img src="${image.src}" alt="${image.name}" id="${image.id}">
                    <p class="image-name">(ID: ${image.id}) </p>
                  <div class="chair-rating" data-rating="${image.rating}"> 
                  
                   
                `;
        imageContainer.appendChild(imgBox);
      });
    } else {
      document.getElementById("chairTitle").textContent =
        "Chair data not found.";
    }
  } else {
    document.getElementById("chairTitle").textContent = "No chair selected.";
  }
});

//   <button class="buy-now-button ">Buy Now</button></div>
//  <div class="chair-price">Prise: ${selectedChair.price}</div>
// ${image.name}  
