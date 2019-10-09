const express = require("express");
const router = express.Router();

const db = [];

router.post('/api/friends', function (request, response) {
  let newFriend = { ...request.body, id = db.length }
  db.push(newFriend);
  response.send(newFriend.id);
})


router.get('/api/friends/:id', function (request, response) {
  let user = db.filter(friend => friend.id === request.params.id)[0];
  let bestFriend = {};
  let currentDifference;
  db.forEach(friend => {
    let differece = friend.scores.reduce((total, score, index) => {
      let scoreDifference = Math.abs(user.scores[index] - score);
      return total + scoreDifference;
    }, 0);
    if (!currentDifference || differece < currentDifference) {
      bestFriend = friend;
      currentDifference = differece;
    }
  })
  response.json({ match: bestFriend, percentage: (1 - (currentDifference / 40)) * 100 });
})

module.exports = router; 