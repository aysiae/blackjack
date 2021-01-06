'use strict';

const Users = require('../schema/user.schema');


// essentially update 
async function updatePlayer(player) {
  console.log(player);
  // will need to be updated per discord.js logic 
  let record = await Users.findOneAndUpdate(
    { userid: player.userID },
    {
      name: player.name,
      bank: player.bank,
      wins: player.currentWins,
      losses: player.currentLosses,
      pushes: player.currentPushes
    },
    { new: true }
  );
  console.log(record);
  return record;
}

module.exports = updatePlayer;
