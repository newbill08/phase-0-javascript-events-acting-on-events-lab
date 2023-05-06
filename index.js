// Your code here


//Get dodger and change the color
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4";


// move position up
dodger.style.bottom = "0px";

//move left
//dodger.style.left = "0px";


/* 
document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
    
        dodger.style.left = `${left - 1}px`;}
  });
   */
  


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }else{
        console.log(e)
        moveDodgerRight()
    }
  });
  

  function moveDodgerRight() {
    console.log(dodger.style.left);
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  