let paragraphsNo = document
  .querySelector("div.text__container")
  .getElementsByTagName("p");

let result = document.querySelector("span.p__results");
result.textContent = paragraphsNo.length;

let input = document.querySelector("input");
let selectedParagraph = document.querySelector("p.selected__paragraph");

document.querySelector(".before_begin").addEventListener("click", () => {
  let new_paragraph = document.createElement("p");
  new_paragraph.textContent = input.value;
  selectedParagraph.insertAdjacentElement("beforebegin", new_paragraph);

  result.textContent = paragraphsNo.length;
});

document.querySelector(".after_begin").addEventListener("click", () => {
  let new_paragraph = document.createElement("span");
  new_paragraph.textContent = input.value;
  selectedParagraph.insertAdjacentElement("afterbegin", new_paragraph);

  result.textContent = paragraphsNo.length;
});
document.querySelector(".before_end").addEventListener("click", () => {
  let new_paragraph = document.createElement("span");
  new_paragraph.textContent = input.value;
  selectedParagraph.insertAdjacentElement("beforeend", new_paragraph);

  result.textContent = paragraphsNo.length;
});

document.querySelector(".after_end").addEventListener("click", () => {
  let new_paragraph = document.createElement("p");
  new_paragraph.textContent = input.value;
  selectedParagraph.insertAdjacentElement("afterend", new_paragraph);

  result.textContent = paragraphsNo.length;
});
