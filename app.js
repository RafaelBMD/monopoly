import Game from './entity/game.js';
import ProjectQuestions from './report/projectQuestions.js';

const numberGames = 1000;

const games = Game.executeGames(numberGames);
ProjectQuestions.answerQuestions(games)
