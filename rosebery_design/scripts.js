//global
const myBody = document.querySelector("body");
//console.log(myBody.getBoundingClientRect());

//Show or Hide menu on hamburger toggler check
const navToggler = document.getElementsByClassName("nav-toggler");
const hamburgerMenuWrap = document.getElementsByClassName(
  "hamburger-menu-wrap"
);

function navTogglerF() {
  if (navToggler[0].checked === true) {
    hamburgerMenuWrap[0].classList.add("hamburger-menu-wrap-active");
    myBody.style.overflowY = "hidden";
  } else {
    hamburgerMenuWrap[0].classList.remove("hamburger-menu-wrap-active");
    myBody.style.overflowY = "scroll";
  }
}

//positioning the main under the header
const headerSec = document
  .querySelector("header.myHeader")
  .getBoundingClientRect();


const mainSec = document.querySelector("main");
mainSec.style.setProperty("--headers-height", headerSec.height + "px");
document.documentElement.style.setProperty(
  "--headers-height",
  headerSec.height + "px"
);

//show hide faq answer
const faqPlusBtn = document.getElementsByClassName("faq-svg-plus");
const faqGroupHeading = document.querySelectorAll(
  "div.faq-group div.header-cont"
);
const faqSvgPlus = document.querySelectorAll("button.faq-svg-plus svg");
const answer = document.getElementsByClassName("answer");
const faqSvgPlusActive = document.getElementsByClassName(
  "faq-plus-btn-svg-active"
);

for (let i = 0; i < answer.length; i++) {
  faqGroupHeading[i].addEventListener("click", function () {
    if (answer[i].classList.contains("show-hide-faq-ans-active")) {
      answer[i].classList.remove("show-hide-faq-ans-active");
      faqSvgPlus[i].classList.remove("faq-plus-btn-svg-active");
    } else {
      answer[i].classList.add("show-hide-faq-ans-active");
      faqSvgPlus[i].classList.add("faq-plus-btn-svg-active");
    }
  });
}

//redirect navigation menu item link
const parentMenuContLink = document.querySelectorAll(
  "li.nav-item div.parent-menu-cont-link"
);
const parentMenuItem = document.querySelectorAll(
  "li.nav-item div.parent-menu-item"
);

const portfolio = document.querySelector(".nav-item-cont");
let maxNavItemWidth = 0;
for (let i = 0; i < parentMenuContLink.length; i++) {
  parentMenuContLink[i].addEventListener("click", function () {
    window.location.href = parentMenuContLink[i].getAttribute("href");
  });

  if (parentMenuItem[i].offsetWidth > maxNavItemWidth) {
    maxNavItemWidth = parentMenuItem[i].offsetWidth;
  }
}


