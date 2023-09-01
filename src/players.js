export function generatePlayer(name, number, score) {
  const displayPlayerName = function (playerNumber) {
    document.querySelector(
      `#player${playerNumber}`,
    ).textContent = `${this.name}:`;
  };
  const displayPlayerScore = function (playerNumber, scoreToAdd) {
    // thank about splitting this function into two functions
    this.score += scoreToAdd;
    document.querySelector(`#player${playerNumber}Score`).textContent =
      this.score;
  };
  this.name = name;
  this.score = score;
  this.number = number;
  return { name, number, score, displayPlayerName, displayPlayerScore };
}

export function initialPlayerSetup() {
  // display default usernames
  player1.displayPlayerName(1);
  player2.displayPlayerName(2);
  player3.displayPlayerName(3);
  player4.displayPlayerName(4);
  // display intial (zero) player scores
  player1.displayPlayerScore(1, 0);
  player2.displayPlayerScore(2, 0);
  player3.displayPlayerScore(3, 0);
  player4.displayPlayerScore(4, 0);
  // allow players to change their displayed name
  const userName = (player) => {
    const tempName = player.name;
    player.name = prompt("Please Enter your name", "Josh Gunson");
    // prevent player name from disappearing by using previous name
    if (player.name === null) player.name = tempName;
    player.displayPlayerName(player.number);
  };
  // player names can be clicked to open the change dialogue
  document.querySelector("#player1").addEventListener("click", () => {
    userName(player1);
  });
  document.querySelector("#player2").addEventListener("click", () => {
    userName(player2);
  });
  document.querySelector("#player3").addEventListener("click", () => {
    userName(player3);
  });
  document.querySelector("#player4").addEventListener("click", () => {
    userName(player4);
  });
}
