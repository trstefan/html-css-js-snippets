const projects = [
  "Countdown",
  "Jokes Generator",
  "Spotify waveform",
  "The parallax effect",
];

const list = document.getElementById("list-projects");

projects.forEach((project, i) => {
  const projectCard = document.createElement("li");
  const projectLink = document.createElement("a");

  const img = document.createElement("img");
  img.src = `./${project}/final/result.jpg`;

  projectLink.href = `./${project}/index.html`;
  projectLink.innerText = `${i + 1}.${project}`;
  projectLink.prepend(img);
  // projectCard.appendChild(img);
  projectCard.appendChild(projectLink);

  list.appendChild(projectCard);
});
