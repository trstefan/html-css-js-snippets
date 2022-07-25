const container = document.getElementById("container");

const colours = [
  "#F7EC09",
  "#F637EC",
  "#37E2D5",
  "#FF4949",
  "#06FF00",
  "#FF0075",
];
const noSquares = 199;

for (let i = 0; i <= noSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColour(square);
  });

  square.addEventListener("mouseout", () => {
    removeColour(square);
  });

  container.append(square);
}

function getRandomColour() {
  return colours[Math.floor(Math.random() * colours.length)];
}

//console.log(getRandomColour());

function setColour(item) {
  const colour = getRandomColour();
  item.style.background = colour;
  item.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;
}

function removeColour(item) {
  item.style.background = "#c3639d1d";
  item.style.boxShadow = "0 0 2px #000";
}
