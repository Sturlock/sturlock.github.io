const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const myName = document.getElementById("my-name");

window.onload = setRandomText;

myName.onmouseover = (event) => {
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return getRandomLetter();
      })
      .join("");

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 2;
  }, 50);
};

function getRandomLetter() {
  return letters[Math.floor(Math.random() * 26)];
}

// Function to generate a string of random letters
function generateRandomText(length) {
  let randomText = "";
  for (let i = 0; i < length; i++) {
    randomText += getRandomLetter();
  }
  return randomText;
}

// Set the random text to the h1 element
function setRandomText() {
  const randomTextElement = myName;
  const randomText = generateRandomText(randomTextElement.dataset.value.length); // Change the number to the desired length
  randomTextElement.textContent = randomText;
}
