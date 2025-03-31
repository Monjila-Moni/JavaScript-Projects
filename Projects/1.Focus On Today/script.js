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

const progressLabel = document.querySelector(".progress-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const progressValueText = document.querySelector(".progress-value span");

const errorLabel = document.querySelector(".error-label");
const containerList = document.querySelectorAll(".goal-container");
const checkboxList = document.querySelectorAll(".custom-checkbox");
const allInputs = document.querySelectorAll(".goal-input");

let allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};


//progressbar will update with the click of the checkbox
function updateProgressBar() {
  const totalProgressBar = checkboxList.length;
  const totalCompletedProgress = document.querySelectorAll(".completed").length;
  const progress = (totalCompletedProgress * 100) / totalProgressBar;
  progressValue.style.width = `${progress}%`;
  progressValueText.innerText = `${totalCompletedProgress}/${totalProgressBar} Completed`;
}

//after refreshing the content will preserve at the input field
document.addEventListener("DOMContentLoaded", () => {
    allInputs.forEach((input) => {
      if (allGoals[input.id]) {
        input.value = allGoals[input.id].name;
        if (allGoals[input.id].complete) {
          input.parentElement.classList.add("completed");
        }
      }
    });
  
    updateProgressBar(); // Ensure progress bar updates on load
  });
  

checkboxList.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    //ensure all input field is filled then allow to click the checkbox
    const allGoalAdded = [...allInputs].every((input) => {
      return input.value.trim() != "";
    });

    if (allGoalAdded) {
      checkbox.parentElement.classList.toggle("completed");
        
      //set the value to the localstorage
      const inputId = checkbox.nextElementSibling.id;
      console.log(inputId)
      allGoals[inputId].complete = checkbox.parentElement.classList.contains("completed")
      localStorage.setItem("allGoals", JSON.stringify(allGoals));  

      updateProgressBar();

    } else {
        //if all the field is not strictly filled then show an error
      progressBar.classList.add("show-error");
    }
  });
});

allInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener("input", () => {
    //cant update once checking is completed
    if (allGoals[input.id] && allGoals[input.id].complete) {
        input.value = allGoals[input.id].name;
        return
      }
//set the value to the localstorage from input field
    if (allGoals[input.id]) {
      allGoals[input.id].name = input.value;
    } else {
      allGoals[input.id] = {
        name: input.value,
        complete: false,
      };
    }
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });

  //fetch the value from localstorage
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name;
    
  }
});
