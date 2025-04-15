
// fetch query string value http://127.0.0.1:5500/country.html?name=South%20Georgia
const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('name');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res=>res.json()))
    .then((data)=>{console.log(data)})



// urlParams is not a regular object — it's an instance of the URLSearchParams class. It behaves like a map of all the key-value pairs in the URL query string.

// For example, if your URL is:
// http://localhost:5500/country.html?name=France&region=Europe
// Then window.location.search will be:
// "?name=France&region=Europe"
// And this line:
// const urlParams = new URLSearchParams(window.location.search);
// Creates a structure similar to:
// {
//   "name" => "France",
//   "region" => "Europe"
// }