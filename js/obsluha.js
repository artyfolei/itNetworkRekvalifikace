import Hra from "./Hra.js";
import SeznamHer from "./SeznamHer.js";
const gameList = new SeznamHer();

document.addEventListener("DOMContentLoaded", function () {
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
  const addGameForm = document.querySelector("#add-game-form");

  // Vytvořit hru
  addGameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // sebrat data z formuláře ze všech inputů  
    const nazevHry = this.elements.nazevHry.value;
    const cileHry = this.elements.cileHry.value;
    const materialHry = this.elements.materialHry.value;
    const popisHry = this.elements.popisHry.value;
    const zdrojeHry = this.elements.zdrojeHry.value;

    const hra = new Hra(nazevHry, cileHry, materialHry, popisHry, zdrojeHry);

    // Převést na řetězec a uložit do local storage

    localStorage.setItem("hry", JSON.stringify(gameList.hry.push(hra)));

    // Informace pro uživatele
    alert("Hra byla uložena");

    // Aktualizace seznamu her
    gameList.aktualizujSeznamHer();
    gameList.zobrazSeznamHer();
  });

  // Informace pro uživatele
  const btnQuitForm = document.querySelector("#btn-quit-form");
  btnQuitForm.addEventListener("click", function () {
    alert("Opravdu chcete opustit formulář? Data nebudou uložena...");
  });
});
