const words = ["Uplift", "Empower", "Inspire"];
let i = 0;
const animatedText = document.getElementById("animated-text");

function typeWord() {
  let word = words[i].split("");
  animatedText.textContent = "";
  word.forEach((letter, index) => {
    setTimeout(() => {
      animatedText.textContent += letter;
    }, 100 * index);
  });

  setTimeout(() => {
    i = (i + 1) % words.length;
    typeWord();
  }, word.length * 100 + 2000);
}

typeWord();
