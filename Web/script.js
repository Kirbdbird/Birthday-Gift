function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
const bigger = document.querySelector("#bigger");

let scale = 1;

moveRandom.addEventListener("click", function (e) {

    moveRandomEl(e.target);

    scale += 0.1;
    bigger.style.transition = "transform 0.3s ease";
    bigger.style.transform = `scale(${scale})`;
});