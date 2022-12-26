const menuConfig = {
  navIconSelector: ".nav__icon",
  navIconActiveClass: "nav__icon_active",
};

const projectsData = [
  {
    imgSrc: "./images/projects/rus-travel.png",
    imgAlt: "Путешествия по России",
    siteLink: "https://tereneka.github.io/rus-travel-guide/",
    githubLink: "https://github.com/tereneka/rus-travel-guide",
    langList: ["HTML", "CSS"],
  },
  {
    imgSrc: "./images/projects/wallet.png",
    imgAlt: "Wallet",
    siteLink: "https://tereneka.github.io/wallet/",
    githubLink: "https://github.com/tereneka/wallet",
    langList: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./images/projects/mesto.png",
    imgAlt: "Mesto",
    siteLink: "https://tereneka.github.io/mesto/",
    githubLink: "https://github.com/tereneka/mesto",
    langList: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./images/projects/kudry.png",
    imgAlt: "Салон красоты Кудри",
    siteLink: "http://kudri-hair.ru/",
    githubLink: "https://github.com/tereneka/kudry",
    langList: ["HTML", "CSS", "JavaScript"],
  },
];

const projectConfig = {
  projectsListSelector: ".projects__list",
  templateSelector: "#project-template",
  projectSelector: ".projects__item",
  imgSelector: ".projects__img",
  siteLinkSelector: ".projects__link_name_site",
  githubLinkSelector: ".projects__link_name_github",
  langClass: "projects__lang projects__lang_name_",
  langListSelector: ".projects__lang-list",
  overlaySelector: ".projects__overlay",
  visibleOverlayClass: "projects__overlay_visible",
};

export { menuConfig, projectsData, projectConfig };
