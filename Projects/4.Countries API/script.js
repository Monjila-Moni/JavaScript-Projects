const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");

function renderCountries(data) {
  data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/country.html?name=${country.name.common}`;
    countryCard.innerHTML = `
          <div class="country-img">
              <img src="${country.flags.svg}" alt="${country.flags.alt}">
          </div>
          <div class="country-content">
              <h2 class="country-name">${country.name.common}</h2>
              <p><b>Population: </b><span>${country.population.toLocaleString(
                "en-IN"
              )}</span></p>
              <p><b>Region: </b><span>${country.region}</span></p>
              <p><b>Capital: </b><span>${
                country.capital ? country.capital[0] : "n/a"
              }</span></p>
          </div>
          
          `;
    countriesContainer.append(countryCard);
  });
}

let allCountries = [];
const searchInput = document.querySelector(".search-container input");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    renderCountries(data);
    allCountries = data;
  });


  
searchInput.addEventListener("input", () => {
  const inputValue = searchInput.value.toLowerCase();
  const filteredData = allCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(inputValue);
  });
console.log(filteredData)
countriesContainer.innerHTML = "";
  renderCountries(filteredData);
});



filterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((response) => response.json())
    .then((data) => {
      countriesContainer.innerHTML = "";
      renderCountries(data);
    });
});


//theme-changer

const themeChanger = document.querySelector('.theme-changer')
const themeChangerText = document.querySelector('.theme-changer span')
const themeChangerIcon = document.querySelector('.theme-changer i')

themeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeChangerIcon.classList.remove('fa-moon');
    themeChangerIcon.classList.add('fa-sun');
    themeChangerText.innerText = "White Mode"
    
  } else {
    themeChangerIcon.classList.remove('fa-sun');
    themeChangerIcon.classList.add('fa-moon');
    themeChangerText.innerText = "Dark Mode"
  }
});
