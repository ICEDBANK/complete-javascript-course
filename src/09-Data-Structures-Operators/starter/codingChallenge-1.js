'use strict';

/*

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  // 6a. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

  printGoals: function (...players) {
    // Loop through the players array and print each player name
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }
    // Print the total number of players (goals scored)
    console.log(`Total goals scored: ${players.length}`);
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')
const {
  players: [players1, players2],
} = game;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [goalkeeper1, ...fieldPlayers1] = players1;
const [goalkeeper2, ...fieldPlayers2] = players2;
console.log(goalkeeper1, '  ', fieldPlayers1);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allpPlayers = [...players1, ...players2];
console.log(allpPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//const { team1, x: draw, team2 } = game.odds;
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6b. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
game.printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
game.printGoals('Lewandowski', 'Gnarby');

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
(game.odds.team1 < game.odds.team2 && console.log('Bayern Munich')) ||
  (game.odds.team2 < game.odds.team1 && console.log('Borrussia Dortmund'));

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const gameScored = Object.entries(game?.scored ?? 'No Values');
for (const [key, score] of gameScored) {
  console.log(`Goal ${Number(key) + 1}: ${score}`);
}

const averageOdd = Object.values(game.odds ?? 'No Odd Values');
let sum = 0;
for (const aOdd of averageOdd) {
  sum += aOdd;
}
const oddsAverage = sum / averageOdd.length;
console.log(oddsAverage);

// This is hard Practice this mulitple times
for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamName}: ${odd}`);
}
