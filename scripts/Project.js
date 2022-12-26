import { hideProjectsOverlays } from "./utils.js";

export default class Project {
  constructor(data, projectConfig) {
    this._data = data;
    this._projectConfig = projectConfig;
    this._projectsList = document.querySelector(
      this._projectConfig.projectsListSelector
    );
    this._cloneProject();
    this._createProject();
    this._overlay = this._project.querySelector(
      this._projectConfig.overlaySelector
    );
  }

  _cloneProject() {
    this._project = document
      .querySelector(this._projectConfig.templateSelector)
      .content.querySelector(this._projectConfig.projectSelector)
      .cloneNode(true);
  }

  _createLangList() {
    this._data.langList.forEach((lang) => {
      const langElement = document.createElement("li");
      langElement.classList = `${
        this._projectConfig.langClass + lang.toLowerCase()
      }`;
      langElement.textContent = lang;
      this._project
        .querySelector(this._projectConfig.langListSelector)
        .append(langElement);
    });
  }

  _setEventListeners() {
    if ("ontouchstart" in window) {
      this._project.addEventListener("click", () => {
        hideProjectsOverlays();

        this._overlay.classList.toggle(this._projectConfig.visibleOverlayClass);
      });
    }
  }

  _createProject() {
    this._img = this._project.querySelector(this._projectConfig.imgSelector);
    this._img.src = this._data.imgSrc;
    this._img.alt = this._data.imgAlt;
    this._project.querySelector(this._projectConfig.siteLinkSelector).href =
      this._data.siteLink;
    this._project.querySelector(this._projectConfig.githubLinkSelector).href =
      this._data.githubLink;
    this._createLangList();
    this._setEventListeners();
  }

  renderProject() {
    this._projectsList.prepend(this._project);
  }

  addOverlay(arr) {
    arr.push(this._overlay);
  }
}
