// navigation
const navElement = document.querySelector(".nav");
const navIconElements = navElement.querySelectorAll(".nav__icon");
const blockElements = document.querySelectorAll(".block");
const headerElement = document.querySelector(".header");
const headerSubtitleElement = headerElement.querySelector(".header__subtitle");

function toggleNav() {
  blockElements.forEach((block, index) => {
    let position = block.getBoundingClientRect();
    if (position.top < 1 && position.bottom > 1 && block == headerElement) {
      navIconElements[index].classList.add("nav__icon_active");
      headerSubtitleElement.classList.add("header__subtitle_animated");
    } else if (position.top < 1 && position.bottom > 1) {
      navIconElements[index].classList.add("nav__icon_active");
      headerSubtitleElement.classList.remove("header__subtitle_animated");
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
  project.addEventListener("touchstart", () => {
    projectsOverlayElements[index].classList.toggle(
      "projects__overlay_visible"
    );
  });
});

document.addEventListener("touchstart", (e) => {
  projectsOverlayElements.forEach((overlay) => {
    if (e.target != overlay) {
      overlay.classList.remove("projects__overlay_visible");
    }
  });
});
