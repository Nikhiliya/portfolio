const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const profileImage = document.getElementById("profileImage");
const imagePlaceholder = document.getElementById("imagePlaceholder");
const year = document.getElementById("year");
const revealItems = document.querySelectorAll(".reveal");

year.textContent = new Date().getFullYear();

const activateHeroMotion = () => {
  document.body.classList.add("page-loaded");
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", activateHeroMotion, { once: true });
} else {
  activateHeroMotion();
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

if (profileImage.complete && profileImage.naturalWidth > 0) {
  imagePlaceholder.style.display = "none";
}

// Hide the placeholder once the user image is successfully loaded.
profileImage.addEventListener("load", () => {
  imagePlaceholder.style.display = "none";
  profileImage.style.display = "block";
});

// Keep placeholder visible if nikhiliya.png is not present yet.
profileImage.addEventListener("error", () => {
  profileImage.style.display = "none";
  imagePlaceholder.style.display = "grid";
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}
