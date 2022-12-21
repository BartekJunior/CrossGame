"use strict";

const crossLine1 = document.getElementById("crossLine1");
const crossLine2 = document.getElementById("crossLine2");

const verCen = document.getElementById("verCen");
const verLeft = document.getElementById("verLeft");
const verRight = document.getElementById("verRight");

const horTop = document.getElementById("horTop");
const horMid = document.getElementById("horMid");
const horBot = document.getElementById("horBot");


const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");
const circle5 = document.getElementById("circle5");
const circle6 = document.getElementById("circle6");
const circle7 = document.getElementById("circle7");
const circle8 = document.getElementById("circle8");
const circle9 = document.getElementById("circle9");

const cross1 = document.getElementById("cross1");
const cross2 = document.getElementById("cross2");
const cross3 = document.getElementById("cross3");
const cross4 = document.getElementById("cross4");
const cross5 = document.getElementById("cross5");
const cross6 = document.getElementById("cross6");
const cross7 = document.getElementById("cross7");
const cross8 = document.getElementById("cross8");
const cross9 = document.getElementById("cross9");



let count = 0;
const elements = document.querySelectorAll(".square");


elements.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(count);

    if (
      (window.getComputedStyle(circle2).display === `block` &&
      window.getComputedStyle(circle5).display === `block` &&
      window.getComputedStyle(circle8).display === `block`) ||

      (window.getComputedStyle(cross2).display === `block` &&
      window.getComputedStyle(cross5).display === `block` &&
      window.getComputedStyle(cross8).display === `block`)
    ) {
      verCen.style.display = "block";

    } else if (
      (window.getComputedStyle(circle1).display === `block` &&
      window.getComputedStyle(circle4).display === `block` &&
      window.getComputedStyle(circle7).display === `block`) ||

      (window.getComputedStyle(cross1).display === `block` &&
      window.getComputedStyle(cross4).display === `block` &&
      window.getComputedStyle(cross7).display === `block`)
    ) {
      verLeft.style.display = "block";

    } else if (
      (window.getComputedStyle(circle3).display === `block` &&
      window.getComputedStyle(circle6).display === `block` &&
      window.getComputedStyle(circle9).display === `block`) ||

      (window.getComputedStyle(cross3).display === `block` &&
      window.getComputedStyle(cross6).display === `block` &&
      window.getComputedStyle(cross9).display === `block`)
    ) {
      verRight.style.display = "block";


    } else if (
      (window.getComputedStyle(circle1).display === `block` &&
      window.getComputedStyle(circle2).display === `block` &&
      window.getComputedStyle(circle3).display === `block`) ||

      (window.getComputedStyle(cross1).display === `block` &&
      window.getComputedStyle(cross2).display === `block` &&
      window.getComputedStyle(cross3).display === `block`)
    ) {
      horTop.style.display = "block";

    } else if (
      (window.getComputedStyle(circle4).display === `block` &&
      window.getComputedStyle(circle5).display === `block` &&
      window.getComputedStyle(circle6).display === `block`) ||

      (window.getComputedStyle(cross4).display === `block` &&
      window.getComputedStyle(cross5).display === `block` &&
      window.getComputedStyle(cross6).display === `block`)
    ) {
      horMid.style.display = "block";

    } else if (
      (window.getComputedStyle(circle7).display === `block` &&
      window.getComputedStyle(circle8).display === `block` &&
      window.getComputedStyle(circle9).display === `block`) ||

      (window.getComputedStyle(cross7).display === `block` &&
      window.getComputedStyle(cross8).display === `block` &&
      window.getComputedStyle(cross9).display === `block`)
    ) {
      horBot.style.display = "block";

    } else if (
      (window.getComputedStyle(circle1).display === `block` &&
      window.getComputedStyle(circle5).display === `block` &&
      window.getComputedStyle(circle9).display === `block`) ||

      (window.getComputedStyle(cross1).display === `block` &&
      window.getComputedStyle(cross5).display === `block` &&
      window.getComputedStyle(cross9).display === `block`)
    ) {
      crossLine2.style.display = "block";

    } else if (
      (window.getComputedStyle(circle3).display === `block` &&
      window.getComputedStyle(circle5).display === `block` &&
      window.getComputedStyle(circle7).display === `block`) ||

      (window.getComputedStyle(cross3).display === `block` &&
      window.getComputedStyle(cross5).display === `block` &&
      window.getComputedStyle(cross7).display === `block`)
    ) {
      crossLine1.style.display = "block";
    }

    return count;
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
document.addEventListener("click", function () {
  console.log(window.getComputedStyle(circle2).display);
  console.log(window.getComputedStyle(circle5).display);
  console.log(window.getComputedStyle(circle8).display);

  console.log(
    window.getComputedStyle(circle2).display === `block` &&
      window.getComputedStyle(circle5).display === `block` &&
      window.getComputedStyle(circle8).display === `block`
  );
});

// STYLE AFTER CLICK ON ELEMENT IS BLOCK!!! WORKS!

// const test = document.getElementById("circle9");
// const boolean1 = window.getComputedStyle(test).display === `none`;
// console.log(boolean1);

// document.addEventListener("click", function () {
//   const test = document.getElementById("circle9");
//   const boolean1 = window.getComputedStyle(test).display === `none`;
//   console.log(boolean1);
// });
