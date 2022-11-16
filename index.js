// navigation
const navElemen = document.querySelector(".nav");
const navIconElements = navElemen.querySelectorAll(".nav__icon");
const blockElements = document.querySelectorAll(".block");

function toggleNav() {
  blockElements.forEach((block, index) => {
    let position = block.getBoundingClientRect();
    if (position.top < 1 && position.bottom > 1) {
      navIconElements[index].classList.add("nav__icon_active");
    } else {
      navIconElements[index].classList.remove("nav__icon_active");
    }
  });
}

document.addEventListener("scroll", toggleNav);

navIconElements.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("nav__icon_active");
  });
});

// просмотр проектов для мобильных устройств
const projectsElement = document.querySelector(".projects");
const projectsListElements =
  projectsElement.querySelectorAll(".projects__item");
const projectsOverlayElements =
  projectsElement.querySelectorAll(".projects__overlay");

projectsListElements.forEach((project, index) => {
  project.addEventListener("click", () => {
    projectsOverlayElements[index].classList.toggle(
      "projects__overlay_visible"
    );
  });
});

document.addEventListener("click", (e) => {
  projectsOverlayElements.forEach((overlay) => {
    if (e.target != overlay) {
      overlay.classList.remove("projects__overlay_visible");
    }
  });
});
