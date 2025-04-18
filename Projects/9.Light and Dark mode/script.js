
const fullDarkModeCheckbox = document.querySelector("#full-dark");
const containerDarkModeCheckbox = document.querySelector("#container-dark");
const container = document.querySelector(".container");


const isFullDarkMode = JSON.parse(localStorage.getItem("fullDarkModeCheckbox"));
const isContainerDarkMode = JSON.parse(
  localStorage.getItem("containedDarkModeCheckbox")
);

if (isFullDarkMode) {
    fullDarkModeCheckbox.checked = true;
    document.body.classList.add("dark");
  }
  if (isContainerDarkMode) {
    containerDarkModeCheckbox.checked = true;
    container.classList.add("dark");
  }
  

function toggleDarkMode(checkbox, element, localStorageKey) {
  if (checkbox.checked) {
    element.classList.add("dark");
    localStorage.setItem(localStorageKey, true);
  } else {
    element.classList.remove("dark");
    localStorage.setItem(localStorageKey, false);
  }
}




fullDarkModeCheckbox.addEventListener("change", () => {
  toggleDarkMode(fullDarkModeCheckbox, document.body, "fullDarkModeCheckbox");
  toggleDarkMode(fullDarkModeCheckbox, container, "containedDarkModeCheckbox");
});

containerDarkModeCheckbox.addEventListener("change", () => {
  toggleDarkMode(
    containerDarkModeCheckbox,
    container,
    "containedDarkModeCheckbox"
  );
});
