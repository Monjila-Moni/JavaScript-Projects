//document er upor click kore f2 caple manually change kora jabe tobe amra oivabe change korbona
//amra js use kore change korbo

// const h1 = document.querySelector('h1')

// const paragraph = document.querySelector('p')
// const allLinks = document.querySelectorAll('a')

//css use kore style deya
// const h1Style = document.querySelector('h1').style
// h1.style.color = 'hotpink'
// h1.style.backgroundColor = 'skyblue'


//apply teal color to all a tag
const allLinks = document.querySelectorAll('a')
for(let i=0; i<allLinks.length; i++)
{
    allLinks[i].style.color = 'teal'
}

//another way using for of loop

for(const link of allLinks)
{
    link.style.color = 'teal'
}




// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'



for (const link of allLinks) {
    // link.style.color = 'teal'
    //textDecoration holo holo onk kicur shortcut
    //link.style.textDecoration = 'none'
    // link.style.textDecorationLine = 'none'
    // link.style.fontWeight = '700'
    // link.style.fontFamily = 'cursive'
    // link.style.fontSize = '18px'

    //new line dile backtick dite hoy nahole new line e kicu likhle ta support korena
    //css file change hobe na sudhu html file r dom er property change hobe

    // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `

    //uporer duita niyomi otota useful na, tai css file e class er property add kore
    //js diye just class tile link kore dibo

    // link.className = 'green-link'
    // link.className = 'wavy-link'
    //tobe aive dile agerta overright hobe, overright jeno na hoy jodi duita class eri property cai tahole
     // link.className = 'green-link wavy-link'


     //another way
    // link.setAttribute('class', 'green-link')

    console.log(link.classList)
    link.classList.add('green-link')//overright hoyna, sudhu agertar sathe ai class tike merge kore
    link.classList.remove('my-link')
    link.classList.toggle('my-link')
}