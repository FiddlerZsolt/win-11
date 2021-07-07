const startMenu = document.querySelector(".start-menu");
const startBtn = document.getElementById("start-btn");

// == Start menu open & close == //
startBtn.addEventListener("click", (e) => {
  startMenu.classList.toggle("active");
});

// == Clicking outside the start menu closes == //
window.addEventListener("click", (e) => {
  if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      startMenu.classList.remove("active");
  }
});
