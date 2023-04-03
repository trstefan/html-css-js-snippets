console.log("works");

const numbers = document.querySelectorAll(".grid__item");

numbers.forEach((el, i) => {
  i += 1;
  if (i % 2 === 0) {
    let even = document.createElement("span");
    even.classList.add("even");
    el.appendChild(even);
  }

  if (i % 2 !== 0) {
    let odd = document.createElement("span");
    odd.classList.add("odd");
    el.appendChild(odd);
  }
  if (i % 3 === 0) {
    let fizz = document.createElement("span");
    fizz.classList.add("fizz");
    el.appendChild(fizz);
  }
  if (i % 5 === 0) {
    let buzz = document.createElement("span");
    buzz.classList.add("buzz");
    el.appendChild(buzz);
  }

  if (i % 5 === 0 && i % 3 === 0) {
    let fizzbuzz = document.createElement("span");
    fizzbuzz.classList.add("fizzbuzz");
    el.appendChild(fizzbuzz);
  }

  if (i % 5 !== 0 && i % 3 !== 0) {
    let nonfizzbuzz = document.createElement("span");
    nonfizzbuzz.classList.add("nonfizzbuzz");
    el.appendChild(nonfizzbuzz);
  }
});
