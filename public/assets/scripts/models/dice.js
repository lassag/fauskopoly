export class Dice {
  constructor(value) {
    this.value = value
  }

  static rollSingleDice() {
    return new Dice(Math.floor(Math.random() * 6) + 1);
  }

  static rollDice() {
    var dice = [];

    for (let i = 0; i < 2; i++) {
      dice.push(new Dice(Math.floor(Math.random() * 6) + 1));
    }
    return dice;
  }
}
