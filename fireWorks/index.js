const container = document.querySelector("#container");

let keyCount = 0;

container.addEventListener("click", (e) => {
  const fire = document.createElement("div");
  fire.id = "fire-box";
  const key = keyCount;
  keyCount += 1;

  fire.setAttribute("data-key", key);
  container.appendChild(fire);
  fire.style.left = e.offsetX + "px";
  fire.style.top = e.offsetY + "px";

  // console.log(fire.style.left, fire.style.top);
  fire.classList.add("display");
});
