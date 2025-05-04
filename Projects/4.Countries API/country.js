// Create URLSearchParams object
// Get values
const countryName = new URLSearchParams(window.location.search).get("name"); // 👉 "Monjila"

const countryDetailsContainer = document.querySelector(
  ".country-details-container"
);

//shimmer effect
const countryDetails = document.querySelector(".country-details");
countryDetails.innerHTML = `
  <div class="shimmer-country-details">
    <div class="shimmer-img"></div>
    <div class="shimmer-text">
      <div class="shimmer-line title"></div>
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
      <div class="shimmer-line"></div>
    </div>
  </div>
`;

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    countryDetails.innerHTML = `
      <div class="country-img-area">
        <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
      </div>
      <div class="details-text-container">
                    <h2 class="country-name">${country.name.common}</h2>
                    <div class="details-text">

                        <p><b>Native Name: </b><span>${
                          Object.values(country.name.nativeName)[0].common
                        }</span></p>

                        <p><b>Population: </b><span>${country.population.toLocaleString(
                          "en-IN"
                        )}</span></p>

                        <p><b>Region: </b><span>${country.region}</span></p>

                        <p><b>Sub Region: </b><span>${
                          country.subregion
                        }</span></p>

                        <p><b>Capital: </b><span>${
                          country.capital ? country.capital[0] : "n/a"
                        }</span></p>
                         
                        <p><b>Top Level Domain: </b><span>${country.tld.join(
                          ", "
                        )}</span></p>
                        <p><b>Currencies: </b><span>${Object.values(
                          country.currencies
                        )
                          .map((currency) => currency.name)
                          .join(", ")}</span></p>
                        <p><b>Languages: </b><span>${Object.values(
                          country.languages
                        ).join(", ")}</span></p>
                    </div>
                </div>
                
    `;
    countryDetailsContainer.append(countryDetails);


    if (country.borders && country.borders.length > 0) {
      const detailsTextContainer = document.querySelector(
        ".details-text-container"
      );
      const borderCountriesTag = document.createElement("div");
      borderCountriesTag.classList.add("border-countries");

      const borderHeading = document.createElement("b");
      borderHeading.innerText = "Border Countries: ";
      borderCountriesTag.appendChild(borderHeading);
      detailsTextContainer.append(borderCountriesTag);
      country.borders.forEach((borderCode) => {
        fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
          .then((res) => res.json())
          .then((borderData) => {
            [borderData[0].name.common].forEach((borderCountry)=>{
              const border = document.createElement('a')
              border.innerText = `${borderCountry}`
              border.href = `/country.html?name=${borderCountry}`
              borderCountriesTag.appendChild(border)

               });
          });
      });
    }


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
