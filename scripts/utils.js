// const projectOverlaysList = document.querySelectorAll(".projects__overlay");
const projectOverlaysList = [];

function hideProjectsOverlays() {
  projectOverlaysList.forEach((overlay) =>
    overlay.classList.remove("projects__overlay_visible")
  );
}

export { projectOverlaysList, hideProjectsOverlays };
