// navigation
const navElem = document.querySelector(".nav");
const navIconElems = navElem.querySelectorAll(".nav__icon");
const blockElems = document.querySelectorAll(".block");

function toggleNav() {
  blockElems.forEach((block, index) => {
    let position = block.getBoundingClientRect();
    if (position.top <= 0 && position.bottom > 0) {
      navIconElems[index].classList.add("nav__icon_active");
    } else {
      navIconElems[index].classList.remove("nav__icon_active");
    }
  });
}

document.addEventListener("scroll", toggleNav);
