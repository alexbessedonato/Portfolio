const animation = document.querySelector(".hello__div");
setInterval(animation__function, 20000);
function animation__function() {
  hello.style.display = "none";
  setTimeout(function () {
    hello.style.display = "flex";
  }, 10);
}
