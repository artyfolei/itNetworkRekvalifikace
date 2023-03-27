import Hra from "./Hra.js";
import SeznamHer from "./SeznamHer.js";
const gameList = new SeznamHer();

document.addEventListener("DOMContentLoaded", function () {
  gameList.zobrazSeznamHer();
  // Obsluha responzivního hamburger menu
  const hamburgerBtn = document.querySelector("#hamburger");
  const xMarkBtn = document.querySelector("#xmark");
  const hamburgerNav = document.querySelector("#hamburger-nav");

  hamburgerBtn.addEventListener("click", function () {
    xMarkBtn.style.display = "flex";
    hamburgerNav.style.display = "flex";
  });

  xMarkBtn.addEventListener("click", function () {
    xMarkBtn.style.display = "none";
    hamburgerNav.style.display = "none";
  });

  // Obsluha formláře Přidej hru
  const addGameForm = document.getElementById("add-game-form");
  console.log(addGameForm);

  // Vytvořit hru
  addGameForm.addEventListener("submit", (e)  =>{
    console.log("FOMRULÁř ODESLÁN")
    e.preventDefault();
    //sebrat data z formuláře ze všech inputů
    const nazevHry = addGameForm.nazevHry.value;
    const cileHry = addGameForm.cileHry.value;
    const materialHry = addGameForm.materialHry.value;
    const popisHry = addGameForm.popisHry.value;
    const zdrojeHry = addGameForm.zdrojeHry.value;
  

    const hra = new Hra(nazevHry, cileHry, materialHry, popisHry, zdrojeHry);
    

    // Převést na řetězec a uložit do local storage
    gameList.pridejHruDoSeznamu(hra);

    // Informace pro uživatele
    alert("Hra byla uložena");

    // Aktualizace seznamu her
    gameList.zobrazSeznamHer();
  });

  // Informace pro uživatele
  const btnQuitForm = document.querySelector("#btn-quit-form");
  btnQuitForm.addEventListener("click", function () {
    alert("Opravdu chcete opustit formulář? Data nebudou uložena...");
  });
});
