const nameElement = document.querySelector('.name')
const nameInp = document.querySelector('.nameInp')

//fetch item
//name.innerText = localStorage.myName
//another way
//nameElement.innerText = localStorage.getItem('myName') || "No name found"

//set value

//localStorage.myName = "Monjila Moni"
localStorage.setItem('myAge','fourty')
localStorage.setItem('myAge',40)
// nameInp.addEventListener('input',(e)=>{
//     localStorage.setItem('myName', e.target.value)
// })

//...................work with object

//set value
let user = {name:"Monjila Moni",
    age:24, country:"Bangladesh"
}
localStorage.setItem("user1", JSON.stringify(user))

//get value
let storedUser = JSON.parse(localStorage.getItem("user1"))
console.log(storedUser.name)
console.log(storedUser.age)
console.log(storedUser.country)

document.querySelector('.username').innerText = storedUser.name
document.querySelector('.userage').innerText = storedUser.age
document.querySelector('.usercountry').innerText = storedUser.country
document.querySelector('.userAdd').innerText = storedUser.userAdd

const myData = JSON.parse(localStorage.getItem('user1')) || {} //undefind aranor jnno {} use kora hoice