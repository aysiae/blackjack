const Dealer = require('./source/dealer');

//this is where the discord bot code goes
//for now we will call stuff manually from here

var dealer = new Dealer();
dealer.addPlayer('dina');
dealer.addPlayer('tina');
dealer.addPlayer('matt');
dealer.addPlayer('aysia');
console.log("PLAYERS: ", dealer.players);
for (let i = 0; i < 100; i++) {
  dealer.next();
}