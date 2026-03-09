const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const profileImage = document.getElementById("profileImage");
const imagePlaceholder = document.getElementById("imagePlaceholder");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Hide the placeholder once the user image is successfully loaded.
profileImage.addEventListener("load", () => {
  imagePlaceholder.style.display = "none";
});

// Keep placeholder visible if nikhiliya.png is not present yet.
profileImage.addEventListener("error", () => {
  profileImage.style.display = "none";
  imagePlaceholder.style.display = "grid";
});
