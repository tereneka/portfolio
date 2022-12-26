const pageBlocksList = document.querySelectorAll(".block");
const header = document.querySelector(".header");
const headerSubtitle = header.querySelector(".header__subtitle");

export default class Menu {
  constructor(nav, menuConfig) {
    this._nav = nav;
    this._menuConfig = menuConfig;
    this._navIconsList = this._nav.querySelectorAll(
      this._menuConfig.navIconSelector
    );
    this._setEventListeners();
  }

  _enableNavIcon(icon) {
    icon.classList.add(this._menuConfig.navIconActiveClass);
  }

  _disableNavIcon(icon) {
    icon.classList.remove(this._menuConfig.navIconActiveClass);
  }

  _toggleNav() {
    pageBlocksList.forEach((block, index) => {
      let position = block.getBoundingClientRect();
      if (position.top < 1 && position.bottom > 1 && block === header) {
        this._enableNavIcon(this._navIconsList[index]);
        headerSubtitle.classList.add("header__subtitle_animated");
      } else if (position.top < 1 && position.bottom > 1) {
        this._enableNavIcon(this._navIconsList[index]);
        headerSubtitle.classList.remove("header__subtitle_animated");
      } else {
        this._disableNavIcon(this._navIconsList[index]);
      }
    });
  }

  _setEventListeners() {
    document.addEventListener("scroll", () => this._toggleNav());
    this._navIconsList.forEach((icon) => {
      icon.addEventListener("click", () => this._enableNavIcon(icon));
    });
  }
}
