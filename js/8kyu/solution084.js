const rps = (p1, p2) => {
    let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p1 === p2) return "Draw!";
    if (rules[p1] === p2) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };

// the player 1 should win by using paper against rock
// in the code p2 is rock === rules[player1] = rock and if they're equal the player 1 wins