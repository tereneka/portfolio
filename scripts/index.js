import { projectOverlaysList, hideProjectsOverlays } from "./utils.js";
import { menuConfig, projectsData, projectConfig } from "./data.js";
import Menu from "./Menu.js";
import Project from "./Project.js";

const nav = new Menu(document.querySelector(".nav"), menuConfig);

if ("ontouchstart" in window) {
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("projects__img")) {
      hideProjectsOverlays();
    }
  });
}

projectsData.forEach((data) => {
  const project = new Project(data, projectConfig);
  project.renderProject();
  project.addOverlay(projectOverlaysList);
});
