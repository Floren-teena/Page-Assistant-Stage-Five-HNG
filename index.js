const container = document.getElementById("container");
let item = document.getElementById("assistant");
let btnSelect = document.querySelectorAll(".select");

container.addEventListener("click", getTargetPosition, false);

function getTargetPosition(e) {
  var xPosition = e.clientX - item.offsetWidth / 1.5;
  var yPosition = e.clientY - item.offsetWidth / 0.4;

  var goToPosition = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";

  item.style.transform = goToPosition;
}
