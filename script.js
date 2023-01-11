"use strict";

const crossLine1 = document.getElementById("crossLine1");
const crossLine2 = document.getElementById("crossLine2");

const verCen = document.getElementById("verCen");
const verLeft = document.getElementById("verLeft");
const verRight = document.getElementById("verRight");

const horTop = document.getElementById("horTop");
const horMid = document.getElementById("horMid");
const horBot = document.getElementById("horBot");

const linesID = [
  verLeft,
  verCen,
  verRight,
  horTop,
  horMid,
  horBot,
  crossLine1,
  crossLine2,
];
const linesDisplay = [];

let mySquare0 = document.querySelectorAll(".square");
mySquare0 = Array.from(mySquare0);
const crossPlayer = document.getElementById(`crossPlayer`);
const circlePlayer = document.getElementById(`circlePlayer`);

const mySquare = [];
const once = { once: true };
let counter = 1;

for (let i = 1; i < 10; i++) {
  mySquare[i] = mySquare0[i - 1];
}

const checkWinCross = function (a, b, c) {
  if (
    mySquare[a].classList.contains(`bi-x-lg`) &&
    mySquare[b].classList.contains(`bi-x-lg`) &&
    mySquare[c].classList.contains(`bi-x-lg`)
  ) {
    crossPlayer.innerHTML = `WIN!`;
    return true;
  }
};

const checkWincircle = function (a, b, c) {
  if (
    mySquare[a].classList.contains(`bi-circle`) &&
    mySquare[b].classList.contains(`bi-circle`) &&
    mySquare[c].classList.contains(`bi-circle`)
  ) {
    circlePlayer.innerHTML = `WIN!`;
    return true;
  }
};

mySquare.forEach((el) => {
  el.addEventListener("click", showIcon, once);
});

function showIcon(X) {
  counter % 2 === 0
    ? X.target.classList.add(`bi-circle`)
    : X.target.classList.add(`bi-x-lg`);
  console.log(counter);
  counter++;

  if (checkWinCross(1, 2, 3)) {
    horTop.style.display = `block`;
  } else if (checkWinCross(4, 5, 6)) {
    horMid.style.display = `block`;
  } else if (checkWinCross(7, 8, 9)) {
    horBot.style.display = `block`;
  } else if (checkWinCross(1, 4, 7)) {
    verLeft.style.display = `block`;
  } else if (checkWinCross(2, 5, 8)) {
    verCen.style.display = `block`;
  } else if (checkWinCross(3, 6, 9)) {
    verRight.style.display = `block`;
  } else if (checkWinCross(1, 5, 9)) {
    crossLine2.style.display = `block`;
  } else if (checkWinCross(3, 5, 7)) {
    crossLine1.style.display = `block`;
  } else if (checkWincircle(1, 2, 3)) {
    horTop.style.display = `block`;
  } else if (checkWincircle(4, 5, 6)) {
    horMid.style.display = `block`;
  } else if (checkWincircle(7, 8, 9)) {
    horBot.style.display = `block`;
  } else if (checkWincircle(1, 4, 7)) {
    verLeft.style.display = `block`;
  } else if (checkWincircle(2, 5, 8)) {
    verCen.style.display = `block`;
  } else if (checkWincircle(3, 6, 9)) {
    verRight.style.display = `block`;
  } else if (checkWincircle(1, 5, 9)) {
    crossLine2.style.display = `block`;
  } else if (checkWincircle(3, 5, 7)) {
    crossLine1.style.display = `block`;
  }

  for (let i = 0; i < 8; i++) {
    linesDisplay[i] = linesID[i].style.display;
  }

  if (linesDisplay.includes(`block`)) {
    mySquare.forEach((el) => {
      el.removeEventListener("click", showIcon);
    });
    console.log(`ENDGAME`);
  }
}

// mySquare.forEach(el => {
//   el.addEventListener('click', function() {
//     counter % 2 === 0 ? el.classList.add(`bi-circle`) : el.classList.add(`bi-x-lg`);
//     counter++;
//   });
// })

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ---------------------------- MY DIV COLOR ----------------------------
// ---------------------------- MY DIV COLOR ----------------------------
// ---------------------------- MY DIV COLOR ----------------------------
// ---------------------------- MY DIV COLOR ----------------------------

// const colorDiv = document.getElementById("colorDiv");
// const colorDivStyle = window.getComputedStyle(colorDiv);

// let value1 = colorDivStyle.getPropertyValue("font-size");
// let value2 = colorDivStyle.getPropertyValue("display");
// let value3 = colorDivStyle.getPropertyValue("justify-content");
// let value4 = colorDivStyle.getPropertyValue("align-items");
// let value5 = colorDivStyle.getPropertyValue("width");
// let value6 = colorDivStyle.getPropertyValue("height");
// let value7 = colorDivStyle.getPropertyValue("background-color");
// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4);
// console.log(value5);
// console.log(value6);
// console.log(value7);

// colorDiv.addEventListener("click", function () {
//   if (value3 !== "left" || value1 !== `15px` || value7 !== `blue`) {
//     colorDiv.style.fontSize = `15px`;
//     colorDiv.style.justifyContent = `left`;
//     colorDiv.style.backgroundColor = `blue`;
//     colorDiv.style.setProperty("width", "150px");
//   } else {
//     console.log(`shit`);
//   }
// });

// -----------------------------------------------------------

// -------------- MY BELLS --------------

let myDivs = document.querySelectorAll(".test-div");
let myBells = document.querySelectorAll(".bi-bell");
myDivs = Array.from(myDivs);
myBells = Array.from(myBells);

const counterPink = document.getElementById("counterPink");
const counterRed = document.getElementById("counterRed");
const counterGreen = document.getElementById("counterGreen");

myDivs.forEach((el) => {
  el.addEventListener("click", function () {
    const myStyle = window.getComputedStyle(el);

    if (myStyle.getPropertyValue("background-color") === "rgb(175, 110, 31)") {
      el.classList.add("pink-class");
      console.log(myStyle.getPropertyValue("background-color"));
    } else if (
      myStyle.getPropertyValue("background-color") === "rgb(255, 100, 200)"
    ) {
      el.classList.add("red-class");
      el.classList.remove("pink-class");
      console.log(myStyle.getPropertyValue("background-color"));
    } else if (
      myStyle.getPropertyValue("background-color") === "rgb(255, 50, 50)"
    ) {
      el.classList.add("green-class");
      el.classList.remove("red-class");
      console.log(myStyle.getPropertyValue("background-color"));
    }
    counterPink.innerHTML = document.querySelectorAll(".pink-class").length;
    counterRed.innerHTML = document.querySelectorAll(".red-class").length;
    counterGreen.innerHTML = document.querySelectorAll(".green-class").length;
  });
});

// ---------------------------------------------------------------

const newObject = {
  name: "Bartek",
  surname: "Przybysz",
  job: "programmer",
  age: 35,
};

// console.table(newObject);
// console.log(
//   `My name is ${newObject.name + ` ` + newObject.surname} and Im ${
//     newObject.age
//   } years old ${newObject.job}`
// );
