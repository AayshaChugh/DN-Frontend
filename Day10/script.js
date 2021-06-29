const box = document.querySelector(".frame");
const card = document.querySelectorAll(".card").length;
const inner = document.querySelectorAll(".card > .inner");
const images = document.querySelectorAll(".card > .inner > .front");
let firstCard = 0;
let firstCard2;
let secondCard2;
let secondCard = 0;
let state1 = true;
let state2 = false;
for (let i = 0; i < card; i++) {
  document
    .querySelectorAll(".card > .inner")
    [i].addEventListener("click", fliper);
}
function fliper() {
  this.classList.toggle("inner1");
  if (state1) {
    firstCard = this.childNodes[3].childNodes[1].src;
    firstCard2 = this;
    state1 = false;
    state2 = true;
  } else if (state2) {
    secondCard = this.childNodes[3].childNodes[1].src;
    secondCard2 = this;
    console.log(typeof secondCard);
    state2 = false;
    state1 = true;
    checkIt();
  }
}

function checkIt() {
  console.log(secondCard2.classList);
  firstCard === secondCard ? success() : fail();
}
function success() {
  setTimeout(() => {
    firstCard2.classList.remove("inner");
    secondCard2.classList.remove("inner");
  }, 1500);
}
function fail() {
  setTimeout(() => {
    secondCard2.classList.toggle("inner1");
    firstCard2.classList.toggle("inner1");
  }, 2000);
}
(function shuffle() {
  document.querySelectorAll(".card").forEach((inner) => {
    var index = Math.floor(Math.random() * 16);
    inner.style.order = index;
  });
})();
