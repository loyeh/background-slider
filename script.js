const main = document.querySelector(".main");
const image = document.querySelector(".image");

let bottons = document.querySelectorAll(".btn");
bottons = Array.from(bottons);

let i = 0;
const imagesUrl = [
  "./images/cloudy-foggy.jpg",
  "./images/green-field.jpg",
  "./images/magical-spring.jpg",
  "./images/nature-mountain.jpg",
  "./images/palm-tree.jpg",
];

console.log(bottons);

bottons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    switch (index) {
      case 0:
        i--;
        if (i < 0) {
          i = imagesUrl.length - 1;
        }
        break;
      case 1:
        i++;
        if (i > imagesUrl.length - 1) {
          i = 0;
        }
        break;
    }
    main.style.backgroundImage = `url(${imagesUrl[i]})`;
    image.style.backgroundImage = `url(${imagesUrl[i]})`;
  });
});
