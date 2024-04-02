document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll('.menu a[href^="#"]');
  var arrowLink = document.getElementById("arrow");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var targetOffset = targetElement.offsetTop;
        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    });
  });

  arrowLink.addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = this.parentElement.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
      var targetOffset = targetElement.offsetTop;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  });
});
