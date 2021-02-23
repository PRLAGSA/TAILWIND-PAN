function buttonOnClickBurger() {
  const burger = document.getElementById("burgerXXX");

  if (burger.style.display === "hidden" || burger.style.display === "") {
    burger.style.display = "flex";
  } else if (burger.style.display === "flex") {
    burger.style.display = "none";
  } else {
    burger.style.display = "flex";
  }
}

////////////////////////////////////////////////////

function omospondia() {
  const omolink = document.getElementById("epistrofi");

  if (omolink.style.display === "hidden" || omolink.style.display === "") {
    omolink.style.display = "block";
  } else if (omolink.style.display === "block") {
    omolink.style.display = "none";
  } else {
    omolink.style.display = "block";
  }
}
