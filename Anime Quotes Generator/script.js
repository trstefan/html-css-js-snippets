const quoteRes = document.getElementById("quote");
const characterRes = document.getElementById("detail__char");
const animeRes = document.getElementById("detail__anime");
const quoteButton = document.getElementById("buttonQuote");

quoteButton.addEventListener("click", getQuote);

getQuote();

async function getQuote() {
  const quoteResult = await fetch("https://animechan.vercel.app/api/random");

  const quoteData = await quoteResult.json();

  quoteRes.innerHTML = quoteData.quote;
  characterRes.innerHTML = quoteData.character;
  animeRes.innerHTML = quoteData.anime;
}
