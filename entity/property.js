import Square from "./square.js";

export default class Property extends Square {
  constructor (name, cost) {
    super(name, cost)
    this.type = 'property';
  }
  /*  function: pay
      attributes: 
        (Player) player - has the values of the player
      description: includes the property in the player's purchased properties and takes the penalty value out of the user's money
  */
  pay (player) {
    player.properties.push(player.position)
    player.money -= this.cost;
  }
}