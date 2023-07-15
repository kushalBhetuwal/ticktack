const buttonoption = document.querySelectorAll(".button-option");
const game = document.getElementById("new-game");
const message = document.getElementById("message");
const popup = document.querySelector(".popup");
const restart = document.getElementById("restart");

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [7, 4, 1],
  [3, 4, 5],
];

function call(value) {
  popup.classList.remove("hide");
  if (value === "x") {
    message.innerHTML = "X wins";
  } else if (value === "o") {
    message.innerHTML = "O wins";
  }
}

function winning(element1, element2, element3) {
  if (
    element1.textContent != "" &&
    element2.textContent != "" &&
    element3.textContent != ""
  ) {
    if (
      element1.textContent === "X" &&
      element2.textContent === "X" &&
      element3.textContent === "X"
    ) {
      call("x");
    } else if (
      element1.textContent === "O" &&
      element2.textContent === "O" &&
      element3.textContent === "O"
    ) {
      call("o");
    }
  }
}
function logic() {
  for (item of winpattern) {
    const [element1, element2, element3] = [
      buttonoption[item[0]],
      buttonoption[item[1]],
      buttonoption[item[2]],
    ];
    winning(element1, element2, element3);
  }
}

function draw(){
    popup.classList.remove('hide');
    message.innerHTML = "It's a draw"

}

//let's build the text on the buttonwhenclicked:
let oddnumbers = [1, 3, 5, 7, 9];
let count = 1;
buttonoption.forEach((button) => {
  button.addEventListener("click", () => {
    if (oddnumbers.includes(count)) {
      button.textContent = "X";
      button.style.fontSize = "7em";
      button.disabled = true;
    } else {
      button.textContent = "O";
      button.style.fontSize = "7em";
      button.disabled = true;
    }
    count++;
    logic();
    if(count===10){
        draw();
    }
  });
});

restart.addEventListener("click", () => {
  location.reload();
});

game.addEventListener("click", () => {
  popup.classList.add("hide");
  location.reload();
});


