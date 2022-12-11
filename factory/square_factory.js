import squareEnum from "../enum/square_enum.js";
import Property from "../entity/property.js";
import Penalty from "../entity/penalty.js";

class SquareFactory {
  /*  function: make
      attributes: json = {name, cost, type}
      description: check the type of square, which can be a property or a penalty, if it is a property it return an Object of type Property if it is a penalty it return an Object of type Penalty, and if is other return a error.
  */
  static make (json) {
    if (json.type === squareEnum.PROPERTY) {
      return new Property(json.name, json.cost);
    } else if (json.type === squareEnum.PENALTY) {
      return new Penalty(json.name, json.cost);
    }

    throw new Error(`Type of square don't find! ${json.type}`)
  }
}

export default SquareFactory