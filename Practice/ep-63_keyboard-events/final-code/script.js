// const h1 = document.querySelector('h1')


// const input = document.querySelector('input')
// input.addEventListener('keypress',(e)=>{
//     console.log(e.key)//je je key press krb se se key show hbe
// })
//input element auto focusable but some element like h1 is not, to make it focusable we need to write tabIndex="0" into the h1 tag


// window.addEventListener('keypress', (e) => {
//     console.log('Code: ',e.code);
//     console.log('Value: ', e.key);
// })

// window.addEventListener('keyup', (e) => {
//     console.log('Code: ',e.code);
//     console.log('Value: ', e.key);
// })

window.addEventListener('keydown', (e) => {
    console.log('Code: ',e.code);
    console.log('Value: ', e.key);
})