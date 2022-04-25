let menu = document.querySelector(".menu");
let exit = document.querySelector(".exit");
let side = document.querySelector(".side");
menu.onclick = function () {
  side.style.left = "0";
};
exit.onclick = function () {
  side.style.left = "-250px";
};
