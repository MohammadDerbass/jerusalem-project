document.addEventListener("click", function (e) {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggleBtn && nav && e.target.closest(".menu-toggle")) {
    nav.classList.toggle("active");
  }
});
