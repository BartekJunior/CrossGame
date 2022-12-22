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
  myCircle[i] = document.getElementById('circle' + i)
};

const myCross = [];
for (let i = 1; i < 10; i++) {
  myCross[i] = document.getElementById('cross' + i)
};



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
