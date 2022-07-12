/*====================MENU SHOW Y HIDDEN ==================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*========== MENU SHOW ===========*/
/* Validate if constant exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*========== MENU HIDDEN ==========*/
/* Validate if constant exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*================== REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*================== ACCORDION SKILLS ======================*/

/*================== QUALIFICATION TABS ====================*/

/*================== SERVICES MODAL ======================*/

/*================== PORTFOLIO SWIPER ===================*/
