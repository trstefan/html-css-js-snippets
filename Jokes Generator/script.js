const jokeElement = document.getElementById("joke");
const getJoke = document.getElementById("getJoke");

getJoke.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const jokeResult = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  //console.log(jokeResult);
  const jokeRes = await jokeResult.json();
  jokeElement.innerHTML = jokeRes.joke;
}
