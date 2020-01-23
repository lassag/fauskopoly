export class Die {
  constructor(value) {
    this.value = value
  }

  static rollDie() {
    return new Die(Math.floor(Math.random() * 6) + 1);
  }

  static rollDice() {
    var dice = [];

    for (let i = 0; i < 2; i++) {
      dice.push(new Die(Math.floor(Math.random() * 6) + 1));
    }
    return dice;
  }
}
