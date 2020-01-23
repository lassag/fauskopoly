export class Map {
  constructor(canvas, boardBox) {
    this.width  = Math.floor(boardBox.clientWidth),
    this.height = Math.floor(boardBox.clientHeight),
    this.canvas = canvas,
    this.ctx    = canvas.getContext("2d")
  }

  setCanvasSize() {
    this.ctx.canvas.width  = this.width;
    this.ctx.canvas.height = this.height;

  }

  drawProperty() {
    this.ctx.fillStyle = "#000";
    this.ctx.strokeRect(0, 0, 72, 72);
  }

  drawTopRow() {
    
  }
}
