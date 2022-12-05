const cells = document.querySelectorAll(".cell");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let click = 0;

// cells.forEach((cell) => {
//   cell.addEventListener("click", function (e) {
//     if (e.target.textContent == "") {
//       click = click + 1;
//       if (click % 2 == 0 && e.target.textContent == "") {
//         e.target.textContent = "X";
//         e.target.value = "X";
//       } else if (click % 2 != 0 && e.target.textContent == "") {
//         e.target.textContent = "0";
//         e.target.value = "0";
//       }
//     }
//     if (one.value != "") {
//       console.log(one.value);
//     }
//   });
// });

function funcOne() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("one").value = "X";
  } else {
    document.getElementById("one").value = "0";
  }
  document.getElementById("one").disabled = true;
}
function funcTwo() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("two").value = "X";
  } else {
    document.getElementById("two").value = "0";
  }
  document.getElementById("two").disabled = true;
}
function funcThree() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("three").value = "X";
  } else {
    document.getElementById("three").value = "0";
  }
  document.getElementById("three").disabled = true;
}
function funcFour() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("four").value = "X";
  } else {
    document.getElementById("four").value = "0";
  }
  document.getElementById("four").disabled = true;
}
function funcFive() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("five").value = "X";
  } else {
    document.getElementById("five").value = "0";
  }
  document.getElementById("five").disabled = true;
}
function funcSix() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("six").value = "X";
  } else {
    document.getElementById("six").value = "0";
  }
  document.getElementById("six").disabled = true;
}
function funcSeven() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("seven").value = "X";
  } else {
    document.getElementById("seven").value = "0";
  }
  document.getElementById("seven").disabled = true;
}
function funcEight() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("eight").value = "X";
  } else {
    document.getElementById("eight").value = "0";
  }
  document.getElementById("eight").disabled = true;
}
function funcNine() {
  click = click + 1;
  if (click % 2 != 0) {
    document.getElementById("nine").value = "X";
  } else {
    document.getElementById("nine").value = "0";
  }
  document.getElementById("nine").disabled = true;
}

function check() {
  if (
    (one.value == "X" && two.value == "X" && three.value == "X") ||
    (one.value == "0" && two.value == "0" && three.value == "0")
  ) {
    if (click % 2 == 0) {
      alert("Congretulation! Player Two You Won!");
    } else {
      alert("Congretulation! Player One You Won!");
    }

    // resetAll();
  } else if (
    (one.value == "X" && four.value == "X" && seven.value == "X") ||
    (one.value == "0" && four.value == "0" && seven.value == "0")
  ) {
    if (click % 2 == 0) {
      alert("Congretulation! Player Two You Won!");
    } else {
      alert("Congretulation! Player One You Won!");
    }
    // resetAll();
  } else if (
    (seven.value == "X" && eight.value == "X" && nine.value == "X") ||
    (seven.value == "0" && eight.value == "0" && nine.value == "0")
  ) {
    if (click % 2 == 0) {
      alert("Congretulation! Player Two You Won!");
    } else {
      alert("Congretulation! Player One You Won!");
    }
    // resetAll();
  } else if (
    (three.value == "X" && six.value == "X" && nine.value == "X") ||
    (three.value == "0" && six.value == "0" && nine.value == "0")
  ) {
    if (click % 2 == 0) {
      alert("Congretulation! Player Two You Won!");
    } else {
      alert("Congretulation! Player One You Won!");
    }
    // resetAll();
  } else if (
    (one.value == "X" && five.value == "X" && nine.value == "X") ||
    (one.value == "0" && five.value == "0" && nine.value == "0")
  ) {
    if (click % 2 == 0) {
      alert("Congretulation! Player Two You Won!");
    } else {
      alert("Congretulation! Player One You Won!");
    }
    // resetAll();
  } else if (
    (two.value == "X" && five.value == "X" && eight.value == "X") ||
    (two.value == "0" && five.value == "0" && eight.value == "0")
  ) {
    if (click % 2 == 0) {
      alert("Congretulation! Player Two You Won!");
    } else {
      alert("Congretulation! Player One You Won!");
    }
    // resetAll();
  }
}

function resetAll() {
  document.getElementById("one").disabled = false;
  document.getElementById("two").disabled = false;
  document.getElementById("three").disabled = false;
  document.getElementById("four").disabled = false;
  document.getElementById("five").disabled = false;
  document.getElementById("six").disabled = false;
  document.getElementById("seven").disabled = false;
  document.getElementById("eight").disabled = false;
  document.getElementById("nine").disabled = false;

  document.getElementById("one").value = "";
  document.getElementById("two").value = "";
  document.getElementById("three").value = "";
  document.getElementById("four").value = "";
  document.getElementById("five").value = "";
  document.getElementById("six").value = "";
  document.getElementById("seven").value = "";
  document.getElementById("eight").value = "";
  document.getElementById("nine").value = "";
}
