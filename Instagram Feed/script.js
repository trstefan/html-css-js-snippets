const containerElement = document.getElementById("container");
const noRows = 10;
const unsplashURL = "https://source.unsplash.com/random/";

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
//console.log(getRandomNumber());
function getSizes() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}
//console.log(getSizes());

//generating 40 pictures
for (let i = 0; i < noRows * 4; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getSizes()}`;
  containerElement.appendChild(img);
}
