import { Property } from "./models/property.js";
import { Map } from "./models/map.js";
import { Die } from "./models/die.js";

const boardBox = document.getElementById("board-wrapper");
var canvas = document.getElementById("game-board");


var map = new Map(canvas, boardBox);
map.setCanvasSize();


var properties = Property.getInitialProperties();
map.drawProperty();

var die = Die.rollDie();
var dice = Die.rollDice();
console.log(die.value);
console.log(dice);
console.log(properties);
console.log(map);
