
//second way
//in this way we can run only one fnction and the 2nd func will always overrright the second one
const h1 = document.querySelector('h1')
function sayHi(){
    console.log('hello world')
}

//h1.onclick = sayHi

//third way
//in this way last function will not overright the first one, instead both  will run at the same time and in this way the inline js will work
function secondHi(){
console.log('You say hi second time')
}


h1.addEventListener('click', sayHi)
h1.addEventListener('click', secondHi)


//when we click to the plus button a new card will be added

// script.js

// Select the container where the cards will be added
let container = document.querySelector(".container");

// Select the "+" button for adding cards (with both "card" and "add-card" classes)
let addCardButton = document.querySelector(".card.add-card");

// Initialize the counter for the new cards
let count = 0;

// Function to create and add a new card
function addCard() {
  // Create a new card element
  let newCard = document.createElement('div');
  newCard.classList.add('card');  // Add the 'card' class to make it circular
  
  count++;  // Increment the count for each new card
  newCard.innerText = count;  // Set the inner text of the card to the current count
  
  // Append the new card to the container
  container.append(newCard);
}

// Add event listener to the "+" button to trigger the addCard function
addCardButton.addEventListener("click", addCard);


// card.addEventListener("click", ()=>{
//     let   newCard = document.createElement('div')
// newCard.classList.add('card')

// container.append(newCard)
// })

