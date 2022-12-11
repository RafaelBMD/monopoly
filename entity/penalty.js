import Square from "./square.js";

export default class Penalty extends Square {
  constructor (name, cost) {
    super(name, cost)
    this.type = "penalty";
  }
  
  /*  function: pay
      attributes: 
        (Player) player - has the values of the player
      description: takes the penalty value out of the user's money
  */
  pay (player) {
    player.money -= this.cost;
  }
}