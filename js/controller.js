/* ============================== Typing Animation ============================== */
const typed = new Typed(".typing", {
  strings: ["Web Developer", "Professional Dancer", "Teacher", "Photographer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* ============================== Section Display ============================== */
function removeHidden(section) {
  // Get all sections with the specified classes
  const sections = document.querySelectorAll(
    ".home, .about, .service, .portfolio, .contact"
  );

  // Loop over each section
  sections.forEach((currentSection) => {
    // Check if the current section is the one to display
    if (currentSection.classList.contains(section)) {
      // Display the current section
      currentSection.classList.remove("hidden");
    } else {
      // Hide other sections
      currentSection.classList.add("hidden");
    }
  });
  console.log(`Section Working`);
}

function displaySection() {
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = this.getAttribute("data-target");
      removeHidden(target);
      console.log(target);
    });
  });
}

/* ============================== INIT ============================== */
const init = function () {
  displaySection();
};

init();
