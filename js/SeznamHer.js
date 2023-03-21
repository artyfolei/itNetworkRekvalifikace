export default class SeznamHer {
  constructor() {
    //   SeznamHer si bere hry z LocalStorage -> později ze serveru
    this.hry = JSON.parse(localStorage.getItem("hry")) || [];
  }

  pridejHruDoSeznamu(hra) {
    this.hry.push(hra);
    localStorage.setItem("hry",JSON.stringify(this.hry));
  }


  zobrazSeznamHer() {
    let gameListElement = document.querySelector("#gameList");
    // gameListElement.innerHTML = "";

    for (let hra of this.hry) {
      let gameListRow = document.createElement("section");
      gameListRow.classList.add("list-row");

      const gameName = document.createElement("p");
      gameName.classList.add("list-row-game-name");
      gameName.innerHTML = hra.nazevHry;

      const gameGoals = document.createElement("p");
      gameGoals.classList.add("game-goals");
      gameGoals.innerHTML = hra.cileHry;

      let gameIconBox = document.createElement("div");
      gameIconBox.classList.add("list-icon-box");
      for (let i = 1; i <= 3; i++) {
        const gameIcon = document.createElement("i");
        gameIcon.classList.add("fa-solid", "fa-book-open");
        gameIconBox.append(gameIcon);
      }

      gameListRow.append(gameName, gameGoals, gameIconBox);
      gameListElement.append(gameListRow);
    }
  }
}
