const container = document.querySelector("#container");

let keyCount = 0;
let i = 0;

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
  childFire1.classList.add("fire1");
  const childFire2 = document.createElement("div");
  childFire2.classList.add("fire2");
  const childFire3 = document.createElement("div");
  childFire3.classList.add("fire3");
  const childFire4 = document.createElement("div");
  childFire4.classList.add("fire4");
  const childFire5 = document.createElement("div");
  childFire5.classList.add("fire5");
  const childFire6 = document.createElement("div");
  childFire6.classList.add("fire6");
  const childFire7 = document.createElement("div");
  childFire7.classList.add("fire7");
  const childFire8 = document.createElement("div");
  childFire8.classList.add("fire8");

  fire.appendChild(childFire1);
  fire.appendChild(childFire2);
  fire.appendChild(childFire3);
  fire.appendChild(childFire4);
  fire.appendChild(childFire5);
  fire.appendChild(childFire6);
  fire.appendChild(childFire7);
  fire.appendChild(childFire8);

  childFire1.style.background = color;
  childFire2.style.background = color;
  childFire3.style.background = color;
  childFire4.style.background = color;
  childFire5.style.background = color;
  childFire6.style.background = color;
  childFire7.style.background = color;
  childFire8.style.background = color;

  // console.log(fire.style.left, fire.style.top);
  fire.classList.add("display");

  fire.addEventListener("click", (i) => {
    i.preventDefault();
  });

  if (i === keyCount) {
    setTimeout(() => {
      container.removeChild(fire);
    }, 5000);
  }
});
