var container = document.querySelector('.container');

// Add the class to the container only once
container.classList.add('img-container');

for (let i = 1; i <= 100; i++) {
  const newImg = document.createElement('img');
  const newDiv = document.createElement('div');
  const newP = document.createElement('p');

  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  newP.innerText = i;

  newDiv.append(newImg, newP);
  container.append(newDiv);
}

// Remove the 10th image (and its associated <p> tag)
let removeImg = document.querySelector("body > div > div:nth-child(10) > img");

let removeP = document.querySelector("body > div > div:nth-child(10) > p");
removeP.remove();

// Remove the 22nd div
let removeDiv = document.querySelector("body > div > div:nth-child(22)");
removeDiv.remove();

// Remove the <p> tag in the 32nd div
let removePara = document.querySelector("body > div > div:nth-child(32) > p");
removePara.parentElement.removeChild(removePara);


//let console all the removed variable

console.log(removeDiv,removeImg,removeP, removePara)

//its still available right?

removeImg,removeP,removePara, removeDiv = null

//we set the values to null so the variable will no longer store in our memory
