const userInput = document.querySelector("input");

const lowerCase = document.querySelector("#lower-case");
const upperCase = document.querySelector("#upper-case");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascel-case");
const snakeCase = document.querySelector("#snake-case");
const kebabCase = document.querySelector("#kebab-case");
const trimCase = document.querySelector("#trim-case");

function firstLetterCapitalize(str) {
  return str.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}

function camelCaseFun(str) {
  const lowerCase = str.toLowerCase();
  let splittedWord = lowerCase.split(" ");
  const firstWord = splittedWord[0];
  splittedWord = firstLetterCapitalize(splittedWord.slice(1));
  return firstWord + splittedWord.join("");
}
function pascalCaseFun(str) {
  str = str.toLowerCase();
  const splittedWord = str.split(" ");
  return firstLetterCapitalize(splittedWord).join("");
}
function snakeCaseFun(str) {
  return str.replaceAll(" ", "_");
}
function kebabCaseFun(str) {
  return str.replaceAll(" ", "-");
}
function trimCaseFun(str) {
  return str.replaceAll(" ", "");
}

userInput.addEventListener("input", (e) => {
  const value = e.target.value;
  lowerCase.innerText = value.toLowerCase();
  upperCase.innerText = value.toUpperCase();
  camelCase.innerText = camelCaseFun(value);
  pascalCase.innerText = pascalCaseFun(value);
  snakeCase.innerText = snakeCaseFun(value);
  kebabCase.innerText = kebabCaseFun(value);
  trimCase.innerText = trimCaseFun(value);
});
