window.addEventListener("load", function () {
  var container = document.querySelector(".rectangle-parent");
  var content = document.querySelector(".lorem-ipsum-is-container1");
  var bg = document.querySelector(".frame-child");
  container.classList.add("loaded");
  content.style.visibility = "hidden";

  setTimeout(function () {
    content.style.visibility = "visible";
  }, 600);

  //   setTimeout(function () {
  //     bg.style.visibility = "hidden";
  //   }, 10000);
});
