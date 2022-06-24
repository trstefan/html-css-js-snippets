const projects = [
  "Countdown",
  "Jokes Generator",
  "Digital Clock",
  "Expandable Cards",
  "Menu glow",
  "Spotify waveform",
  "Dots",
  "SocialMedia VFX",
  "Pulse Effect",
  "Card effect",
  "Parallax design",
  "AOS template",
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
