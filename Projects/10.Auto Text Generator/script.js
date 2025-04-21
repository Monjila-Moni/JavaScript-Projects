const span1 = document.querySelector("h1 span");
const span2 = document.querySelector("h2 span");

const wordList1 = ["Developer.", "Coder.", "Teacher."];
const wordList2 = ["Student.", "Dancer.", "Singer.", "Designer."];

function autoType(words, domElement) {
  let wordIndex = 0;
  let charIndex = 0;
  let forwardType = true;
  let pause = 0;

  setInterval(() => {
    if (pause) {
      pause--;
      return;
    }
    if (forwardType) {
      if (charIndex < words[wordIndex].length) {
        domElement.innerText = domElement.innerText + words[wordIndex][charIndex];
        charIndex++;
      }
      if (charIndex === words[wordIndex].length) {
        forwardType = false;
        pause = 5;
      }
    } else {
      domElement.innerText = domElement.innerText.slice(0, domElement.innerText.length - 1);
      // span1.innerText = span1.innerText.slice(0, -1);
      charIndex--;
      if (charIndex === 0) {
        forwardType = true;
        wordIndex = (wordIndex + 1) % words.length;
        pause = 1;
      }
    }
  }, 200);
}

autoType(wordList1,span1)
autoType(wordList2,span2)
