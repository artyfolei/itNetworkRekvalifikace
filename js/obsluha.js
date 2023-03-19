const hamburgerBtn = document.querySelector("#hamburger");
const xMarkBtn = document.querySelector("#xmark");
const hamburgerNav = document.querySelector("#hamburger-nav");

hamburgerBtn.addEventListener("click", function () {
    xMarkBtn.style.display = "flex";
    hamburgerNav.style.display = "flex";
  });
  
  xMarkBtn.addEventListener("click", function(){
      xMarkBtn.style.display = "none"
      hamburgerNav.style.display = "none"
  })