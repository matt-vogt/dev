var dice =  require("./dice");
var die = dice.die;


die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total Rolls " + die.totalRolls);

console.log(die);
