export default class ProjectQuestions {
 /*  function: answerQuestions
    attributes: (Array) games - array of Games executed
    description: Scrolls through all games to fetch: 
      - sumNumberRolls: total turns
      - sumNumberProperties: total properties purchased
      - sumIsIndianaPurchased: total times the Indiana Avenue property was purchased.
    return: returns answers to project questions
      What is the average number of rolls (turns) in a game?
      What is the average number of properties purchased in a game?
      As a percentage, in how many games is Indiana Avenue purchased?
  */
  static answerQuestions (games) {
    let sumNumberRolls = 0;
    let sumNumberProperties = 0;
    let sumIsIndianaPurchased = 0;
    games.forEach(game => {
      sumNumberRolls += game.numberRolls;
      sumNumberProperties += game.numberProperties;
      if (game.isIndianaPurchased) sumIsIndianaPurchased++;
    });

    console.log("What is the average number of rolls (turns) in a game?");
    console.log((sumNumberRolls / games.length).toFixed(2));
    console.log("What is the average number of properties purchased in a game?");
    console.log((sumNumberProperties / games.length).toFixed(2));
    console.log("As a percentage, in how many games is Indiana Avenue purchased?");
    console.log((sumIsIndianaPurchased / games.length * 100).toFixed(2), "%");
  }
}