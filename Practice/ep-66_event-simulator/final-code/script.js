const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')




let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

//click will trigger automatically
// for(let i=1; i<=100; i++)
//   {
//     addCardBtn.click()
//   }
  
//for loop use kore card add krle click hcce je aita bojha jay na. aijnno setInterval use krb

const intervalId = setInterval(()=>{
  if(count>99){
    clearInterval(intervalId)
  }
  addCardBtn.click()
},100)



// setTimeout(() => {
//     input.focus()
//     console.log('Input Focused');
// }, 1000)//1s pore auto focus hbe

// setTimeout(() => {
//     input.blur()
//     console.log('Input Blurred');
// }, 3000)

// setTimeout(() => {
//     form.submit()
//     console.log('Form Submitted');
// }, 3000)

// form.reset()

// const intervalId = setInterval(() => {
//   if (count > 999) {
//     clearInterval(intervalId)
//   }
//   addCardBtn.click()
// }, 5)
