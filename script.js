"use strict";

const crossLine1 = document.getElementById("crossLine1");
const crossLine2 = document.getElementById("crossLine2");

const verCen = document.getElementById("verCen");
const verLeft = document.getElementById("verLeft");
const verRight = document.getElementById("verRight");

const horTop = document.getElementById("horTop");
const horMid = document.getElementById("horMid");
const horBot = document.getElementById("horBot");

const myCircle = [];
for (let i = 1; i < 10; i++) {
  myCircle[i] = document.getElementById("circle" + i);
}

const myCross = [];
for (let i = 1; i < 10; i++) {
  myCross[i] = document.getElementById("cross" + i);
}

let count = 0;
const elements = document.querySelectorAll(".square");

elements.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(count);

    if (
      (window.getComputedStyle(myCircle[2]).display === `block` &&
        window.getComputedStyle(myCircle[5]).display === `block` &&
        window.getComputedStyle(myCircle[8]).display === `block`) ||
      (window.getComputedStyle(myCross[2]).display === `block` &&
        window.getComputedStyle(myCross[5]).display === `block` &&
        window.getComputedStyle(myCross[8]).display === `block`)
    ) {
      verCen.style.display = "block";
    } else if (
      (window.getComputedStyle(myCircle[1]).display === `block` &&
        window.getComputedStyle(myCircle[4]).display === `block` &&
        window.getComputedStyle(myCircle[7]).display === `block`) ||
      (window.getComputedStyle(myCross[1]).display === `block` &&
        window.getComputedStyle(myCross[4]).display === `block` &&
        window.getComputedStyle(myCross[7]).display === `block`)
    ) {
      verLeft.style.display = "block";
    } else if (
      (window.getComputedStyle(myCircle[3]).display === `block` &&
        window.getComputedStyle(myCircle[6]).display === `block` &&
        window.getComputedStyle(myCircle[9]).display === `block`) ||
      (window.getComputedStyle(myCross[3]).display === `block` &&
        window.getComputedStyle(myCross[6]).display === `block` &&
        window.getComputedStyle(myCross[9]).display === `block`)
    ) {
      verRight.style.display = "block";
    } else if (
      (window.getComputedStyle(myCircle[1]).display === `block` &&
        window.getComputedStyle(myCircle[2]).display === `block` &&
        window.getComputedStyle(myCircle[3]).display === `block`) ||
      (window.getComputedStyle(myCross[1]).display === `block` &&
        window.getComputedStyle(myCross[2]).display === `block` &&
        window.getComputedStyle(myCross[3]).display === `block`)
    ) {
      horTop.style.display = "block";
    } else if (
      (window.getComputedStyle(myCircle[4]).display === `block` &&
        window.getComputedStyle(myCircle[5]).display === `block` &&
        window.getComputedStyle(myCircle[6]).display === `block`) ||
      (window.getComputedStyle(myCross[4]).display === `block` &&
        window.getComputedStyle(myCross[5]).display === `block` &&
        window.getComputedStyle(myCross[6]).display === `block`)
    ) {
      horMid.style.display = "block";
    } else if (
      (window.getComputedStyle(myCircle[7]).display === `block` &&
        window.getComputedStyle(myCircle[8]).display === `block` &&
        window.getComputedStyle(myCircle[9]).display === `block`) ||
      (window.getComputedStyle(myCross[7]).display === `block` &&
        window.getComputedStyle(myCross[8]).display === `block` &&
        window.getComputedStyle(myCross[9]).display === `block`)
    ) {
      horBot.style.display = "block";
    } else if (
      (window.getComputedStyle(myCircle[1]).display === `block` &&
        window.getComputedStyle(myCircle[5]).display === `block` &&
        window.getComputedStyle(myCircle[9]).display === `block`) ||
      (window.getComputedStyle(myCross[1]).display === `block` &&
        window.getComputedStyle(myCross[5]).display === `block` &&
        window.getComputedStyle(myCross[9]).display === `block`)
    ) {
      crossLine2.style.display = "block";
    } else if (
      (window.getComputedStyle(myCircle[3]).display === `block` &&
        window.getComputedStyle(myCircle[5]).display === `block` &&
        window.getComputedStyle(myCircle[7]).display === `block`) ||
      (window.getComputedStyle(myCross[3]).display === `block` &&
        window.getComputedStyle(myCross[5]).display === `block` &&
        window.getComputedStyle(myCross[7]).display === `block`)
    ) {
      crossLine1.style.display = "block";
    }
  });
});

const changeDisplay = function (itemID) {
  const circle = document.getElementById("circle" + itemID);
  const cross = document.getElementById("cross" + itemID);

  if (count % 2 !== 0) {
    if (window.getComputedStyle(circle).display === `none`) {
      circle.style.display = `block`;
      count = count + 1;
    }
  } else {
    if (window.getComputedStyle(cross).display === `none`) {
      cross.style.display = `block`;
      count++;
    }
  }
};

// Test for Circles display block

// document.addEventListener("click", function () {
//   console.log(window.getComputedStyle(circle2).display);
//   console.log(window.getComputedStyle(circle5).display);
//   console.log(window.getComputedStyle(circle8).display);

//   console.log(
//     window.getComputedStyle(circle2).display === `block` &&
//       window.getComputedStyle(circle5).display === `block` &&
//       window.getComputedStyle(circle8).display === `block`
//   );
// });

// STYLE AFTER CLICK ON ELEMENT IS BLOCK!!! WORKS!

// const test = document.getElementById("circle9");
// const boolean1 = window.getComputedStyle(test).display === `none`;
// console.log(boolean1);

// document.addEventListener("click", function () {
//   const test = document.getElementById("circle9");
//   const boolean1 = window.getComputedStyle(test).display === `none`;
//   console.log(boolean1);
// });

// -------------- MY BELLS --------------

const colorDiv = document.getElementById("colorDiv");
const colorDivStyle = window.getComputedStyle(colorDiv);

let value1 = colorDivStyle.getPropertyValue("font-size");
let value2 = colorDivStyle.getPropertyValue("display");
let value3 = colorDivStyle.getPropertyValue("justify-content");
let value4 = colorDivStyle.getPropertyValue("align-items");
let value5 = colorDivStyle.getPropertyValue("width");
let value6 = colorDivStyle.getPropertyValue("height");
let value7 = colorDivStyle.getPropertyValue("background-color");
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6);
console.log(value7);

colorDiv.addEventListener("click", function () {
  if (value3 !== "left" || value1 !== `15px` || value7 !== `blue`) {
    colorDiv.style.fontSize = `15px`;
    colorDiv.style.justifyContent = `left`;
    colorDiv.style.backgroundColor = `blue`;
    colorDiv.style.setProperty("width", "150px");
  } else {
    console.log(`shit`);
  }
});

// -----------------------------------------------------------

// CHANGE DIV COLOR ALMOST WORKING

// let myDivs = document.querySelectorAll(".test-div");
// let myBells = document.querySelectorAll(".bi-bell");
// myDivs = Array.from(myDivs);
// myBells = Array.from(myBells);

// const counterPink = document.getElementById('counterPink');
// const counterRed = document.getElementById('counterRed');
// const counterGreen = document.getElementById('counterGreen');

// let valuePink = 0;
// let valueRed = 0;
// let valueGreen = 0;

// myDivs.forEach((el) => {
//   el.addEventListener("click", function () {
//     const myStyle = window.getComputedStyle(el);

//     if (myStyle.getPropertyValue('background-color') === 'rgb(175, 110, 31)') {
//       el.style.backgroundColor = 'rgb(255, 100, 200)';
//       console.log(myStyle.getPropertyValue('background-color'));

//     } else if (myStyle.getPropertyValue('background-color') === 'rgb(255, 100, 200)') {
//       el.style.backgroundColor = 'rgb(255, 50, 50)';
//       console.log(myStyle.getPropertyValue('background-color'));

//     } else if (myStyle.getPropertyValue('background-color') === 'rgb(255, 50, 50)') {
//       el.style.backgroundColor = 'rgb(30, 255, 0)';
//       console.log(myStyle.getPropertyValue('background-color'));
//     }

//     if (myStyle.getPropertyValue('background-color') === 'rgb(255, 100, 200)') {
//       valuePink++;
//     }
//     if (myStyle.getPropertyValue('background-color') === 'rgb(255, 50, 50)') {
//       valueRed++;
//     }
//     if (myStyle.getPropertyValue('background-color') === 'rgb(30, 255, 0)') {
//       valueGreen++;
//     }

//     counterPink.innerHTML = valuePink
//     counterRed.innerHTML = valueRed;
//     counterGreen.innerHTML = valueGreen;
//   });
// });

let myDivs = document.querySelectorAll(".test-div");
let myBells = document.querySelectorAll(".bi-bell");
myDivs = Array.from(myDivs);
myBells = Array.from(myBells);

const madafaka = document.getElementById("madafaka");

const counterPink = document.getElementById('counterPink');
const counterRed = document.getElementById('counterRed');
const counterGreen = document.getElementById('counterGreen');

// const changeColor = function() {
// madafaka.classList.add('pink-class');
// }

myDivs.forEach((el) => {
  el.addEventListener("click", function () {

    const myStyle = window.getComputedStyle(el);

    if (myStyle.getPropertyValue("background-color") === "rgb(175, 110, 31)") {
      el.classList.add("pink-class");
      console.log(myStyle.getPropertyValue("background-color"));

    } else if (myStyle.getPropertyValue("background-color") === "rgb(255, 100, 200)") {
      el.classList.add("red-class");
      el.classList.remove("pink-class");
      console.log(myStyle.getPropertyValue("background-color"));

    } else if (myStyle.getPropertyValue("background-color") === "rgb(255, 50, 50)") {
      el.classList.add("green-class");
      el.classList.remove("red-class");
      console.log(myStyle.getPropertyValue("background-color"));
    }
    counterPink.innerHTML = document.querySelectorAll(".pink-class").length;
    counterRed.innerHTML = document.querySelectorAll(".red-class").length;
    counterGreen.innerHTML = document.querySelectorAll(".green-class").length;
  });
});


// const mDiv = document.getElementById("madafaka");
// mDiv.classList.add("new-class");

// const buttonPressed = (e) => {
//   console.log("Bell 2 has been pressed");
//   console.log(e.target);
//   console.log(typeof e.target);
// };

// myBells[1].addEventListener("click", buttonPressed);

// const divPressed = function (e) {
//   console.log(e);
// }
// myBells[1].addEventListener("click", divPressed);

// myDivs.forEach((el) => {
//   el.addEventListener('click', function() {
//     console.log('click');
//   })
// })

// elements.forEach((el) => {
//   el.addEventListener("click", function () {
//     console.log(count);
//   });
// });

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
