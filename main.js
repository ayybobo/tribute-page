window.addEventListener("load", (event) => {
  document.querySelector(".animate").classList.add("up");
});

window.addEventListener("load", (event) => {
  document.querySelector(".animate1").classList.add("down");
});

window.addEventListener("load", (event) => {
  document.querySelector(".animate2").classList.add("left");
});

window.addEventListener("load", (event) => {
  document.querySelector(".animate3").classList.add("left");
});

window.addEventListener("load", (event) => {
  document.querySelector(".animate4").classList.add("right");
});

IntersectionObserver.unobserve(target);
