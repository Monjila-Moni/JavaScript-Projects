const userInput = document.querySelector("input");

const lowerCase = document.querySelector("#lower-case");
const upperCase = document.querySelector("#upper-case");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");

const snakeCase = document.querySelector("#snake-case");
const kebabCase = document.querySelector("#kebab-case");
const trimCase = document.querySelector("#trim-case");

function firstLetterCapitalize(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1));
  }
  

  function camelCaseFun(str) {
    const words = firstLetterCapitalize(str);
    return words[0].toLowerCase() + words.slice(1).join("");
  }
  function pascalCaseFun(str) {
    return firstLetterCapitalize(str).join("");
  }
function snakeCaseFun(str) {
    return str.trim().toLowerCase().replace(/\s+/g, "_");
}
function kebabCaseFun(str) {
    return str.trim().toLowerCase().replace(/\s+/g, "-");
}
function trimCaseFun(str) {
    return str.trim().replace(/\s+/g, "");
}

userInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  lowerCase.innerText = value.toLowerCase();
  upperCase.innerText = value.toUpperCase();
  camelCase.innerText = camelCaseFun(value);
  pascalCase.innerText = pascalCaseFun(value);
  snakeCase.innerText = snakeCaseFun(value);
  kebabCase.innerText = kebabCaseFun(value);
  trimCase.innerText = trimCaseFun(value);
});
