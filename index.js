const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    let left = convertToInt(dodger.style.left)
    dodger.style.left = convertToPx(left - 20)
}

function moveDodgerRight(){
    let left = convertToInt(dodger.style.left)
    dodger.style.left = convertToPx(left + 20)
}


function convertToInt(num){
    return parseInt(num)
}

function convertToPx(num){
    return `${num}px`
}

(function init(){
    console.log("init")
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft"){
            moveDodgerLeft()
        }
        if (e.key === "ArrowRight"){
            moveDodgerRight()
        }
        console.log(init)

      });
})();