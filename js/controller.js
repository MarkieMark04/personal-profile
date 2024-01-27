/* ============================== Typing Animation ============================== */
const typed = new Typed(".typing", {
  strings: ["Web Developer", "Professional Dancer", "Teacher", "Photographer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* ============================== Remove Hidden from Section ============================== */
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
}

/* ============================== Section Preloader ============================== */

function startPreloader() {
  let i = 0;
  const h2 = document.querySelector(".preloaderHeader");
  const aqua = document.querySelector(".aqua");
  const body = document.querySelector(".Preloader");
  const number = document.querySelector(".number");
  const percentBar = document.querySelector(".percentBar");

  const preloader = setInterval(function () {
    number.innerHTML = i + "<span>%</span>";
    percentBar.style.width = i + "%";
    i++;
    if (i == 101) {
      clearInterval(preloader);
      setTimeout(function () {
        // Hide the preloader after loading
        aqua.style.opacity = "0";
        aqua.style.visibility = "hidden";

        // Optionally, hide the preloader container itself
        const preloaderContainer = document.querySelector(".preloader");
        preloaderContainer.style.display = "none";

        // Remove Hidden From Home Section after Preloader Finished
        const homeSection = document.querySelector(".home");
        if (homeSection) {
          homeSection.classList.remove("hidden");
          // Add fade in effect
          homeSection.style.opacity = "0";
          homeSection.style.visibility = "visible";
          setTimeout(function () {
            homeSection.style.opacity = "1";
          }, 100);
        }
      });
    }
  }, 30);
}

/* ============================== Preloader Display Section ============================== */

async function displaySection() {
  const menuLinks = document.querySelectorAll(".menu-link");

  // Show Preloader
  startPreloader();

  // Display Home Page

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Loop Over Menu Items
      const target = this.getAttribute("data-target");

      // Remove Active from menu links
      menuLinks.forEach((otherlink) => {
        otherlink.classList.remove("active");
      });

      // Add Active Class to the Clicked Menu
      this.classList.add("active");

      // Remove Hidden from Home Section by default
      removeHidden(target);

      // When Menu Item Clicked Add Hidden to current page

      // Remove Hidden from destination page

      // Add 'Active' class to the clicked menu item

      removeHidden(target);
      console.log(target);
    });
  });
}

/* ============================== INIT ============================== */
const init = function () {
  startPreloader();
  displaySection();
};

init();
