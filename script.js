const projects = [
  "Countdown",
  "Hover Grid",
  "Jokes Generator",
  "FAQ",
  "Digital Clock",
  "KeyListener Alphabet",
  "Keyboard",
  "Expandable Cards",
  "Instagram Feed",
  "Split Landingpage",
  "Menu glow",
  "Sliding panels",
  "Loading effect",
  "Spotify waveform",
  "Dots Loading",
  "Dots",
  "Hello World",
  "Hover Effect",
  "Hover Effect2",
  "3 Buttons",
  "SocialMedia VFX",
  "Pulse Effect",
  "OneDiv loader",
  "Card effect",
  "404Template page",
  "Parallax design",
  "AOS template",
  "GoogleAPI fonts",
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
