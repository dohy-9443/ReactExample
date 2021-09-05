const container = document.querySelector("#container");
const bg = document.querySelector("#bg");

let keyCount = 0;
let i = 0;
let arr = [];

const RandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

container.addEventListener("click", (e) => {
  const fire = document.createElement("div");
  fire.id = "fire-box";

  let color = RandomColor();

  const key = keyCount;
  keyCount += 1;
  i += 1;

  fire.setAttribute("data-key", key);
  container.appendChild(fire);

  fire.style.left = e.offsetX + "px";
  fire.style.top = e.offsetY + "px";
  fire.style.background = color;
  fire.style.zIndex = i;

  const childFire1 = document.createElement("div");
  arr.push(childFire1);
  const childFire2 = document.createElement("div");
  arr.push(childFire2);
  const childFire3 = document.createElement("div");
  arr.push(childFire3);
  const childFire4 = document.createElement("div");
  arr.push(childFire4);
  const childFire5 = document.createElement("div");
  arr.push(childFire5);
  const childFire6 = document.createElement("div");
  arr.push(childFire6);
  const childFire7 = document.createElement("div");
  arr.push(childFire7);
  const childFire8 = document.createElement("div");
  arr.push(childFire8);

  for (let a = 0; a < arr.length; a++) {
    arr[a].classList.add(`fire${a + 1}`);
    fire.appendChild(arr[a]);
    arr[a].style.background = color;
  }

  // console.log(fire.style.left, fire.style.top);
  fire.classList.add("display");
  bg.classList.add("black");

  // fire.addEventListener("click", (i) => {
  //   i.preventDefault();
  // });

  if (i === keyCount) {
    setTimeout(() => {
      bg.classList.remove("black");
      container.removeChild(fire);
    }, 5000);
  }
});
