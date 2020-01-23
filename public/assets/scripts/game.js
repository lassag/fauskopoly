import { Property } from "./models/property.js";
import { Map } from "./models/map.js";
import { Dice } from "./models/dice.js";

const boardBox = document.getElementById("board-wrapper");
var canvas = document.getElementById("game-board");


var map = new Map(canvas, boardBox);
map.setCanvasSize();


var properties = Property.getInitialProperties();
map.drawProperty();

var dice = Dice.rollSingleDice();
var dualDice = Dice.rollDice();
console.log(dice.value);
console.log(dualDice);
console.log(properties);
console.log(map);
