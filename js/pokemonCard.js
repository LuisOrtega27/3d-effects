"use strict";

const cards = document.querySelectorAll(".cardsShowcase .card");

function handleMousemove(event) {
  const card = event.target.children[0];
  const cardYCenter = event.target.clientHeight / 2;
  let mouseYCoord = event.offsetY;
  const cardXCenter = event.target.clientWidth / 2;
  let mouseXCoord = event.offsetX;

  let rotateInY = cardYCenter - mouseYCoord;
  let rotateInX = mouseXCoord - cardXCenter;
  const REDUCER = 6;
  card.style.setProperty(
    "transform",
    `rotateY(${rotateInX / REDUCER}deg) rotateX(${rotateInY / REDUCER}deg)`
  );
  // card.style.setProperty("transform", `rotateX(${rotateInY / REDUCER}deg)`);
}

function handleMouseleave(event) {
  event.target.children[0].style.setProperty(
    "transform",
    "rotateY(0deg) rotateX(0deg)"
  );
}

cards.forEach((card) => {
  card.addEventListener("mousemove", handleMousemove);
  card.addEventListener("mouseleave", handleMouseleave);
});
