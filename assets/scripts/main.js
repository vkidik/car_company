let reviewsInWrap = false;
let mouseX;
let startDragPoint;
let scollB = 0;
let scrollValue = 15;

function startWrapper(ev) {
  startDragPoint = ev.clientX;
  reviewsInWrap = true;
  document.querySelector(".reviews").style.cursor = "grab";
}

function moveWrapper(ev) {
  mouseX = ev.clientX;
  if (reviewsInWrap) {
    if (mouseX < startDragPoint) {
      scollB += scrollValue;
    } else {
      scollB -= scrollValue;
    }

    document.querySelector(".reviews").scroll(scollB, 0);
  }
}

function stopWrapper() {
  reviewsInWrap = false;
  document.querySelector(".reviews").style.cursor = "default";
}

document.querySelector(".reviews").addEventListener("mousedown", startWrapper);
document.querySelector(".reviews").addEventListener("mousemove", moveWrapper);
document.querySelector(".reviews").addEventListener("mouseup", stopWrapper);

document.querySelector(".reviews").addEventListener("touchstart", startWrapper);
document.querySelector(".reviews").addEventListener("touchmove", moveWrapper);
document.querySelector(".reviews").addEventListener("touchend", stopWrapper);
