/* ============================== Toggler Style Switcher ============================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitch = document.querySelector("style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style - Switcher On Scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ============================== Theme Colours ============================== */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(colour) {
  alternateStyles.forEach((style) => {
    if (colour === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

setActiveStyle("colour-5");

/* ============================== Theme Light and Dark Mode ============================== */
const daynight = document.querySelector(".day-night");
const logo = document.querySelector("#logo");

let isFirstImage = true;

daynight.addEventListener("click", () => {
  if (isFirstImage) {
    logo.src = "images/Markie No BG WHITE TEXT.png";
  } else {
    logo.src = "images/Markie No BG.png";
  }

  isFirstImage = !isFirstImage;

  daynight.querySelector("i").classList.toggle("fa-sun");
  daynight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    daynight.querySelector("i").classList.add("fa-sun");
  } else {
    daynight.querySelector("i").classList.add("fa-moon");
  }
});
