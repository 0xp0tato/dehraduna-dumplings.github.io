const categoryButtons = document.querySelectorAll(".menu-categories button");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");
  });
});

function showMenu(category) {
  // Hide all menu sections
  const menuSections = document.querySelectorAll(".menu-section");
  menuSections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected menu section
  document.getElementById(category).style.display = "block";
}

// Get the hamburger button and menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu ul");

// Function to toggle the 'active' class on the menu
function toggleMenu() {
  menu.classList.toggle("active");
}

// Event listener for the hamburger button click
hamburger.addEventListener("click", function () {
  toggleMenu();
});

// Event listener for closing the menu when clicking outside the menu
document.addEventListener("click", function (event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    menu.classList.remove("active");
  }
});

// Event listener for closing the menu on pressing the 'Escape' key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    menu.classList.remove("active");
  }
});
