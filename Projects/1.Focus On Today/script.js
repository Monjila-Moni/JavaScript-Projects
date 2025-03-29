// checkboxList.forEach((checkbox)=>{
//     checkbox.addEventListener('click', (e)=>{
//         checkbox.parentElement.classList.toggle('completed')
//     })
// })

// i want if every input field is filled only then it will check
//for this i can use every method, but every method is used only for array 

//converting nodelist to array
//               1. Using Array.from() (Recommended)
// const nodeList = document.querySelectorAll("p"); // Select all `<p>` elements
// const array = Array.from(nodeList);
// console.log(array); // Now it's a real array
//               2. Using Spread Operator (...)
// const array = [...nodeList];
// console.log(array);
//               3. Using Array.prototype.slice.call() (Old method)
// const array = Array.prototype.slice.call(nodeList);
// console.log(array);

const checkboxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('.goal-input');
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

function allGoalAdded(){
    return [...inputFields].every((input)=>{
        return input.value.trim() !=="";
    })
}


checkboxList.forEach((checkbox,index)=>{
    
    checkbox.addEventListener('click',()=>{
        if(allGoalAdded()){
            checkbox.parentElement.classList.toggle('completed');
            let progress = (index+1)*33.33;
            progressValue.style.width =`${progress}%`
        }
        else{
            progressBar.classList.add('show-error')
        }
    })
    
})

inputFields.forEach(input=>{
    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error')
    })
})


