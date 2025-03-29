const h1 = document.querySelector('h1')
const container = document.querySelector(".container")


//1ta img er source jana ace akhn bakigulak manually append korbo
const firstImage = document.querySelector("img")

// for(let i=2; i<=100;i++){
//     const newImg = firstImage.cloneNode(true)
//         newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//         container.append(newImg) 
//     }

//but jodi oi akta img er source o jodi deya na thakto tahole ki krtm?
//aikhanei amdr document.createElement kaj kore
//document.createElement('tag_name') //tag name can be  html element or our own created
// const p = document.createElement('p')
// document.body.appendChild(p)
// p.innerText = "hello"

// p.innerText = "world"
// p.classList.add('my-para')
// p.id = 'para'
// container.append(p)


//create tag for every image beneath the image

// for(let i=1; i<=100; i++){
//     const divElement = document.createElement('div')
//     container.append(divElement)
//     container.classList.add('div-container')

//     const newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     divElement.append(newImage)
//     const para = document.createElement('p')
//     para.innerText = i
//     divElement.append(para)
//     // divElement.append(newImage,para)
// }

//another way and this will work as previous
for(let i=1; i<=100; i++){
    const divElement = document.createElement('div')
    container.classList.add('div-container')


    const myHtml = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Bulbasaur">
    <p>${i}</p>`
    divElement.innerHTML = myHtml
    container.append(divElement)
}

//some are use as mentioned here
// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

//here we need to write a lot   of code for a few line of html. this is pathetic, and here comes react to make our life easy





// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }