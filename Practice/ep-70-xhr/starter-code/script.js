const btn = document.querySelector('button')
const img = document.querySelector('img')

btn.addEventListener('click', () =>{
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
xhr.addEventListener('load',()=>
{
  img.src = xhr.response.message
  console.log(xhr)
})
xhr.open('GET', "https://dog.ceo/api/breeds/image/random")

xhr.send()

})
