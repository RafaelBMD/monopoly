const percentTax = 0.1;
const valueTax = 200;
const boardTotalSquares = 40;

export default class Player {
  constructor (money = 1500, position = 0, properties = []) {
    this.money = money;
    this.position = position;
    this.properties = properties;
  }
  /*  function: checkCanPay
      attributes: (Square) square - has the values of the Square
      description: Check if the player has money to pay the cost of that square
      If the square is the penalty "Income Tax" calculate the cost, 200 or 10% of total cash, whichever is greater
      return: returns (boolean) if the cost is less or equal the money of the player
  */
  checkCanPay(square) {
    if (square.name === "Income Tax") {
      square.cost = Math.max(Math.floor(this.money * percentTax), valueTax);
    }
    return (square.cost <= this.money);
  }
  
  /*  function: checkAlreadyPurchased
      return: (boolean) if the property has already been purchased
  */
  checkAlreadyPurchased() {
    return this.properties.includes(this.position)
  }

  /*  function: checkAlreadyPurchased
      description: Increment the value of the dices in the positions of the player, if the player rounds the board and reaches or passes the "Go" square, the player earns 200
  */
  setPosition(valueDices) {
    this.position += valueDices;
    if (this.position >= boardTotalSquares) {
      this.position -= boardTotalSquares;
      this.money += 200;
    }
  }
}