import Player from './player.js';
import SquareFactory from '../factory/square_factory.js';
import Squares from '../data/squares.js';

const indianaAvenueIndex = 23;
const maxExecuteTurns = 1000;

export default class Game {
  constructor (numberRolls = 0, numberProperties = 0, isIndianaPurchased = false) {
    this.numberRolls = numberRolls;
    this.numberProperties = numberProperties;
    this.isIndianaPurchased = isIndianaPurchased;
  }
  /*  function: trowDices
      return: to return the sum of two random numbers from 1 to 6
  */
  trowDices () {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    return dice1 + dice2;
  }
  /*  function: mountBoard
      return: (Array) mount the board
  */
  static mountBoard () {
    return Squares.map(json => SquareFactory.make(json))
  }
  /*  function: playGame
      attributes: (array) board = Stores all squares on the board
      description: execute in the max 1000 turns, and each turn the player trow the dices and set his current position, next  che if that square is already puchesed and if the player can pay for that square, if he cant pay the game is over
      execute all actions in one game of monopoly while the player has money or finish 1000 turns
      return: return a (Game) variable with the numbers of rolls in the game, number of properties purchase in the game and if in the game Indiana Avenue was bought
  */
  static playGame (board) {
    const game = new Game();
    const player = new Player();
    let qtdTurns = 0;
    do {
      qtdTurns++;
      const valueDices = game.trowDices();
      
      player.setPosition(valueDices)

      let square = board[player.position];
      if (!player.checkAlreadyPurchased()) {
        if (player.checkCanPay(square)) {
          square.pay(player); // square can be property.js or penalty.js
        } else {
          break; // game is over.
        }
      }
    } while (qtdTurns < maxExecuteTurns);

    game.numberRolls = qtdTurns;
    game.numberProperties = player.properties.length;
    game.isIndianaPurchased = player.properties.some((property) => property === indianaAvenueIndex);
    return game;
  }
  /*  function: game
      attributes: (integer) numberGames = number of games to run
      description: execute games
      return: return a (Array) of games
  */
  static executeGames(numberGames) {
    let games = [];
    const board = this.mountBoard();
    for (let gameIndex = 0; gameIndex < numberGames; gameIndex++) {
      games.push(this.playGame(board));
    }
    return games;
  }
}