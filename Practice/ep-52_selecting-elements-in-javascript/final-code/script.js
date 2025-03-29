// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')

//all elements return, nodelist akare return kore
// const cssImage = document.querySelectorAll('#css-image')

////first element k return kore
// const cssImage = document.querySelector('.css-image')

// this is also works as attribute selector as like in style.css file
// const jsImage = document.querySelector('[alt="javascript roadmap"]')


//index.html e je image gula ace oigula sobgulak change korbo

const allImages = document.querySelectorAll('img')
const imageUrl = [
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=',
]

allImages[0].src = imageUrl[0]
allImages[1].src = imageUrl[1]
allImages[2].src = imageUrl[2]
 
//alternative way
// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// }

//html collection er upor foreach apply hoyna
//er upor applly krte caile arrayte convert krte hobe

// const allImages = document.images to const allImages = [...document.images]
// allImages.forEach((image, i) => {
//   image.src = imagesUrl[i]
// })



// const ul = document.querySelector('ul')
// const ul_li = document.querySelector('ul li')


//ul.querySelector('.css-image')     sudhu ul e khuje
//document.querySelector('.css-image') //pura document e khuje

// const allImages = document.querySelectorAll('img')

// const imageInsideUl = ul.querySelector('.css-image')



//copy>copy js path


