const panels = document.querySelectorAll(".panel");

function cardExpand() {
  this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", cardExpand));
