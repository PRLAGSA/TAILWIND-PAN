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
