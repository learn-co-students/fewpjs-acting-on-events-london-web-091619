const dodger = document.querySelector("#dodger")

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = String(left - 1) + "px"
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)

  if (left < 360) {
    dodger.style.left = String(left + 1) + "px"
    console.log(dodger.style.left)
  }
}

function moveDodger(direction) {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)

  if (direction === "left" && left >0) {
    dodger.style.left = String(left - 1) + "px"
  }

  if (direction === "right" && left < 360) {
    dodger.style.left = String(left + 1) + "px"
  }
}

document.addEventListener("keydown", function(e) {
  switch (e.key) {
  case "ArrowLeft":
    moveDodger("left")
    break
  case "ArrowRight":
    moveDodger("right")
    break
  }
})
