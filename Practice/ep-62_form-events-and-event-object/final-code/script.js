const paragraph = document.querySelector('p');
const usernameInput = document.querySelector('#username');



// usernameInput.addEventListener('click', () => {
//     console.log('input clicked');
// })

// usernameInput.addEventListener('dblclick', () => {
//     console.log('input double clicked');
// })


//input events

// usernameInput.addEventListener('input', (e) => {
//     paragraph.innerText = e.target.value; // Directly set the paragraph's inner text to the input value
// });

//input elementn e type sese oi area theke ber hoye baire jokhon click krb tokhn trigger hbe
// let inputValue
// usernameInput.addEventListener('change', (e) => {
//     console.log(e);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('focus', (e) => {
//     console.log(e.type);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('blur', (e) => {
//     console.log(e.type);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// form.addEventListener('form', (e) => {
//     e.preventDefault()
//     const myFormData = new FormData(form)

//     for (const p of myFormData.entries()) {
//         console.log(p);
//     }
// })
// form event use na kore submit use kri, kn? karon form event use korle form er jekhanei click krina kn submit hbe. tbe submit use krle kbl submit button or onno wayte submit krlei kbl submit hbe

// form.addEventListener('submit', (e) => {
//     e.preventDefault()//submit er sathe sathe normally page reload hoy but akhn r hobena 
//     const myFormData = new FormData(form)

//     for (const p of myFormData.entries()) {
//         console.log(p);
//     }
// })

form.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target);
    console.log(e.currentTarget)
    console.log(e);
    // console.log('From Clicked');
})

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log('From Submitted');
// })