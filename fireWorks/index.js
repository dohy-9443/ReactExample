const container = document.querySelector("#container");

let keyCount = 0;
let i = 0;

const RandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

container.addEventListener("click", (e) => {
  const fire = document.createElement("div");
  fire.id = "fire-box";
  const key = keyCount;
  keyCount += 1;
  i += 1;

  let color = RandomColor();

  fire.setAttribute("data-key", key);
  container.appendChild(fire);
  fire.style.left = e.offsetX + "px";
  fire.style.top = e.offsetY + "px";
  fire.style.background = color;

  // console.log(fire.style.left, fire.style.top);
  fire.classList.add("display");

  if (i === keyCount) {
    setTimeout(() => {
      container.removeChild(fire);
    }, 5000);
  }
});
