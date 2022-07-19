const app = document.getElementById("alphabet");

const lettersGrid = document.createElement("div");

lettersGrid.setAttribute("class", "grid");

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
alphabet.map((current) => {
  const letterBlock = document.createElement("div");
  letterBlock.setAttribute("class", "block");
  letterBlock.setAttribute("id", current);

  const letter = document.createElement("p");
  letter.setAttribute("class", "letter");
  letter.textContent = current;

  letterBlock.append(letter);
  lettersGrid.append(letterBlock);
});

app.append(lettersGrid);

document.addEventListener("keyup", function (event) {
  const prevSelection = document.getElementsByClassName("selectedLetter");
  if (prevSelection.length) {
    prevSelection[0].classList.toggle("selectedLetter");
  }
  console.log(event.key);
  const selected = document.getElementById(event.key);
  selected.classList.toggle("selectedLetter");

  setTimeout(() => selected.classList.toggle("selectedLetter"), 200);
});
