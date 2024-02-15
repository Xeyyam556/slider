const image = document.querySelector(".img");

const urls = ['./barca2.logo.jpg', './spinner.gif', './fener.logo.png', './spinner.gif', './liverpool.logo.png', './spinner.gif']
let index = 0

function sekiliGoster() {
    image.src = urls[index]
    index = (index + 1) % urls.length
}
window.onload = function () {
    sekiliGoster()
setInterval(sekiliGoster, 2000)
}
