const body = document.querySelector("body");
const menuToggle = document.querySelector(".navbar-toggle-btn");
const navItems = document.querySelector(".nav-items");
const navItem = document.querySelectorAll(".nav-item");
const navSection = document.querySelector(".nav-section");

menuToggle.addEventListener("click", () => {
  useMenu();
});

const closeMenu = () => {
  menuToggle.classList.remove("active-menu");
  menuToggle.classList.add("navbar-toggle-btn");
  navItems.classList.remove("active-nav");
  navItems.classList.add("nav-items");
  navSection.classList.add("nav-section");

  navItem.forEach((item) => {
    item.classList.remove("active-nav-item");
  });
};

const useMenu = () => {
  menuToggle.classList.toggle("active-menu");
  navItems.classList.toggle("active-nav");
  navSection.classList.toggle("nav-section");

  navItem.forEach((item) => {
    item.classList.toggle("active-nav-item");
  });
};

const mediaQuery = window.matchMedia("(min-width: 72rem)");

if (mediaQuery.matches) {
  const projects = document.querySelectorAll(".project");
  const moduleContainer = document.querySelector(".module-container");
  const module = document.querySelector(".module");
  const moduleContent = document.querySelector(".module-content");
  let moduleImage = document.querySelector(".module-img");
  let moduleHeader = document.querySelector(".module-header");
  let moduleDescription = document.querySelector(".module-description");

  const useModule = () => {
    moduleContainer.style.display = "";
    module.style.display = "";
    moduleContent.style.display = "";
    moduleImage.style.display = "";
    moduleHeader.style.display = "";
    moduleDescription.style.display = "";

    projects.forEach((project) => {
      project.addEventListener("click", () => {
        moduleContainer.style.display = "block";
        module.style.display = "flex";
        moduleContent.style.display = "block";
        moduleImage.style.display = "block";
        moduleHeader.style.display = "block";
        moduleDescription.style.display = "block";

        moduleContainer.addEventListener("click", () => {
          moduleContainer.style.display = "";
          module.style.display = "";
          moduleContent.style.display = "";
          moduleImage.style.display = "";
          moduleHeader.style.display = "";
          moduleDescription.style.display = "";
        });
      });
    });
  };
  useModule();

  let displayProject = () => {
    projects.forEach((project) => {
      project.addEventListener("click", () => {
        function displayModuleImage() {
          moduleImage.src = project.firstElementChild.src;
          moduleImage.alt = project.firstElementChild.alt;
          console.log(moduleImage.src);
        }
        displayModuleImage();

        function displayModuleHeader() {
          moduleHeader.innerHTML =
            project.firstElementChild.nextElementSibling.innerHTML;
        }
        displayModuleHeader();

        function displayModuleDescription() {
          moduleDescription.innerHTML = project.lastElementChild.innerHTML;
        }
        displayModuleDescription();
      });
    });
  };

  displayProject();
}
