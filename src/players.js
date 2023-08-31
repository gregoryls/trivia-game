export function generatePlayer(name, number) {
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
  this.score = 0;
  this.number = number;
  return { name, number, score, displayPlayerName, displayPlayerScore };
}

export function playerSetup() {
  c;
}
