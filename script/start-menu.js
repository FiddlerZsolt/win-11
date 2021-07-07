const startMenu = document.querySelector(".start-menu");
const startBtn = document.getElementById("start-btn");

// == Start menu open & close == //
function startToggle() {
  startMenu.classList.toggle("active");
}

// == Clicking outside the start menu closes == //
window.addEventListener("click", function (e) {
  if (startMenu.contains(e.target) === false) {
    if (startBtn.contains(e.target)) {
      console.log("NEM a start menün kattintottál de a gombon");
    } else {
      startMenu.classList.remove("active");
    }
  }
});
