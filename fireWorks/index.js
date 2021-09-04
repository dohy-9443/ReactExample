const container = document.querySelector("#container");
const fire = document.querySelector("#fire-box");

const boom = (e) => {
  fire.style.left = e.offsetX + "px";
  fire.style.top = e.offsetY + "px";

  // console.log(fire.style.left, fire.style.top);
  fire.classList.add("display");
};

container.addEventListener("click", boom);
