const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("body > h2");

const superEventHandler = {
  handleMouseEnter: function handleMouseEnter() {
    title.textContent = "The mouse is here!";
    title.style.color = colors[0];
  },
  handleMouseLeave: function handleMouseLeave() {
    title.textContent = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handleWindowResize: function handleWindowResize() {
    title.textContent = "You just resized!";
    title.style.color = colors[2];
  },
  handleMouseClickRight: function handleMouseClickRight() {
    title.textContent = "That was a right click!";
    title.style.color = colors[4];
  },
};

title.onmouseenter = superEventHandler.handleMouseEnter;
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("contextmenu", superEventHandler.handleMouseClickRight);
window.addEventListener("resize", superEventHandler.handleWindowResize);
