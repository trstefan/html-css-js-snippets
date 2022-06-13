const cards = document.querySelectorAll(".card");

const removeActivceClass = () => {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActivceClass();
    card.classList.add("active");
  });
});
