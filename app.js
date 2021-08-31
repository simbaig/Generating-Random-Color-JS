const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
  document.body.classList.add("center");
  h1.style.fontSize = "3em";
  btn.style.width = "100px";
  btn.style.height = "50px";
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
