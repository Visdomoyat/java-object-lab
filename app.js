const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  
  }
  // console.log(game);
  
  const pokemon = require('./data.js');
  
  // const ex = exercise
  // function()
  /*
  Exercise 3
  1. Add a new property to the `game` object. Let's call it "difficulty".
  2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
  
  
  Solve Exercise 3 here: 
  PLEASE NOTE: I used hurdle instead of difficulty because difficulty is one of the properties under gyms array.
  */
  console.log ("_____exersise 3_______");
  
  const gymsArray = game.gyms;
  for (let i = 0; i < gymsArray.length; i++) {
    // console.log(gymsArray[i], "gymsArray 1");
    // console.log(gymsArray[i].difficulty);
    if (gymsArray[i].difficulty > 6) {
      gymsArray[i].hurdle = "hard";
    } else if (gymsArray[i].difficulty >= 5) {
      gymsArray[i].hurdle = "medium";
    } else {
      gymsArray[i].hurdle = "easy";
    }
  }
  // console.log(gymsArray, "gym Array");
  
  // if (gymsArray.difficulty >= 6) {
  //   gymsArray.hurdle = "hard";
  // } else if (gymsArray.difficulty  >= 5) {
  //   gymsArray.hurdle = "Medium";
  // } else {
  //   gymsArray.hurdle = "easy";
  // }
  
  // console.log(gymsArray, "answer for exercise 3"); ......
  
  console.log("_____exersise 4_______");
  /*
  Exercise 4
  1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
  2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
  
  Solve Exercise 4 here:
  */
  
  game.party.push(pokemon[0]); // .push() array method was used
  console.log(game.party, "answer for exersise 4 "); 
  
  console.log("_____exersise 5_______");
  /*
  Exercise 5
  1. Choose three more Pokémon from the `pokemon` array and add them to your party.
  2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
  
  
  Solve Exercise 5 here:
  */
  
  // game.party.push(pokemon[1], pokemon[6], pokemon [25], pokemon[100]); // i could still use .push() array method as well
  // console.log(game.party, "5.1");
  
  // considering the type: water, forEach and .push() method would be applied
  pokemon.forEach(pokemon => {
    if (pokemon.type === "water") {
      game.party.push(pokemon)
    }
  });
  // console.log(game.party, "5.2"); ...
  
  console.log("_____exersise 6_______");
  /*
  Exercise 6
  1. Set the `completed` property to true for gyms with a difficulty below 3.
  2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
  
  
  Solve Exercise 6 here:
  */
  
  const gyms_6 = game.gyms;
  gyms_6.forEach(gym => {
    if (gym.difficulty < 3) {
      // console.log(gym, "6.1")
      gym.completed = true
    }
  });
  // console.log(gyms_6, "6.2");
  
  console.log("_____exersise 7_______");
  /*
  Exercise 7  need deburging
  1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
  2. How would you replace the current starter Pokémon in your party with its evolved form?
  */
  
  // const evolvePokemon = pokemon => { if (pokemon.starter === "true") {
  //   pokemon.starter = "oil";
  // } else if (pokemon.starter === "false") {
  //   pokemon.starter = "gold";
  
  // }
  // };
  // game.party.forEach(evolvePokemon);
  // console.log("Evolved starter", game.party);
  
  // Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  // Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  // Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  // Pokemon 25: Pikachu evolves into Pokemon 26: Raichu
  
  function evolveStarterPokemon(party) {
    // Loop through the party to find the starter Pokémon
    party.forEach((pokemon, index) => {
      if (pokemon.starter) {
        let evolvedPokemon;
  
        // Determine the evolved Pokémon
        switch (pokemon.id) {
          case 1: // Bulbasaur
            evolvedPokemon = { id: 2, name: "Ivysaur", starter: false };
            break;
          case 4: // Charmander
            evolvedPokemon = { id: 5, name: "Charmeleon", starter: false };
            break;
          case 7: // Squirtle
            evolvedPokemon = { id: 8, name: "Wartortle", starter: false };
            break;
          case 25: // Pikachu
            evolvedPokemon = { id: 26, name: "Raichu", starter: false };
            break;
          default:
            return; // No evolution found
        }
  
        // Replace the current starter Pokémon with its evolved form
        party.splice(index, 1, evolvedPokemon);
      }
    });
  }
  evolveStarterPokemon(game.party)
  // console.log(game.party, "ex 7 Wisdom")
  
  const starterIdx = game.party.indexOf(game.party.find(pokemon => pokemon.starter === true))
  const starterName = game.party[starterIdx].name
  // console.log(starterName, "is feeling weird.  He's Evolving!!!")
  const currentStarter = pokemon.find(pokemon => pokemon.number === game.party[starterIdx].number)
  game.party.splice(starterIdx, 1, pokemon[currentStarter.number])
  // console.log(starterName, "has evolved into", game.party[starterIdx].name)
  
  // let evolvedPokemon = {};
  // for (let i = 0; i < game.party.length; i++) {
  //   if (pokemon[i].starter) {
  //     switch (pokemon[i].number) {
  //       case 1:
  //         evolvedPokemon = { number: 2, name: "Ivysaur", starter: false }
  //         break;
  //       case 4:
  //         evolvedPokemon = { number: 5, name: "Charmeleon", starter: false }
  //         break;
  //       case 7:
  //         evolvedPokemon = { number: 8, name: "Wartortle", starter: false }
  //         break;
  //       case 25:
  //         evolvedPokemon = { number: 26, name: "Raichu", starter: false }
  //         break;
  //       default:
  //         return
  //     }
      //   if (pokemon[i].number === 1) {
      //     evolvedPokemon = { number: 2, name: "Ivysaur", starter: false }
      //   }
      // } else if (pokemon[i].number === 4) {
      //   evolvedPokemon = { number: 5, name: "Charmeleon", starter: false }
      // } else if (pokemon[i].number === 7) {
      //   evolvedPokemon = { number: 8, name: "Wartortle", starter: false }
      // } else if (pokemon[i].number === 25) {
      //   evolvedPokemon = {number: 26, name: "Raichu", starter: false }
  
  //   }
  
  // }
  // console.log(evolvedPokemon, "evolvedPokemon")
  
  console.log("_____exersise 8_______");
  /*
  Exercise 8
  1. Print the name of each Pokémon in your party.
  2. Consider using a loop or an array method to access each Pokémon's name.
  
  Solve Exercise 8 here:
  */
  
  const pokemonName = pokemon
  for (let i = 0; i < pokemonName.length; i++) {
    // console.log(pokemonName[i].name)
  }
  
  console.log("_____exersise 9_______");
  /*
  Exercise 9
  1. Can you print out all the starter Pokémon from the `pokemon` array?
  2. Think about how you can identify a starter Pokémon and then log their names.
  
  Solve Exercise 9 here:
  */
  //  prining out all the starter pokemon from the pokemon array
  const pokemonStarter = pokemon;
  for (let i = 0; i < pokemonStarter.length; i++) {
    // console.log(pokemonStarter[i].starter, "Yaweh")
  }
  
  // Identifing the starters pokemon that are true and printing out their names
  for (let i = 0; i < pokemonStarter.length; i++) {
    if (pokemonStarter[i].starter === true) {
      // console.log(pokemonName[i].name, "Yeshua");
    }
  }
  
  console.log("_____exersise 10_______");
  /*
  Exercise 10
  Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
    - Accept an object as a parameter called `pokemonObj`
    - Add the `pokemonObj` to the `game.party` array.
    - not return anything
  
  After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
  
  Solve Exercise 10 here:
  */
  // Object.assign(game, {
  //   catchPokemon(pokemonObj) {
  // game.party = [...game.party, pokemonObj]  //"..." operator creates a new array that includes all existing objects in the game.party
  //   }
   
  // })
    
  // game.catchPokemon.call(pokemon[0], game.party)
  
  game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj)
  }
  console.log(game)
  console.log(pokemon[0], "ex 10")
  
  console.log("_____exersise 11_______");
  /*
  Exercise 11
  1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
  2. How will you find and update the quantity of pokeballs in the `game.items` array?
  
  Tips:
  For this exercise, it's okay to have a negative number of pokeballs.
  After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
  Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
  
  Solve Exercise 11 here:
  */
  //support time question: I had a result different from what I had in mind. is this what the result should be
  //  for (let i = 0; i < pokemon.length; i++) { 
  //   Object.assign(game, {
  //   catchPokemon() {
  //     if (pokemon[i].number > 0) {// check if pokemon's number is greater than 0 
  //      pokemon[i].number -= 1;
  //      console.log(pokemon[i])
  //                 } else {
  //             console.log("No more Pokemon to catch")
  //           }
  //   }
  //  })
      
  //   };
   
  // game.catchPokemon();
  // console.log(pokemon[i], "11.1")
  
  // const gameItems = game.items;
  // let pokeball = gameItems.find(item => item.name === "pokeball");
  // if (pokeball) {
  //   pokeball.quantity += 10;
  // } else {
  //   console.log("Pokeball not found")
  // }
  // console.log(gameItems, "11.2");
  
  game.catchPokemon = function(pokemonObj){
    game.party.push(pokemonObj);
       for (let i = 0; i < game.items.length; i++) {
         if (game.items[i].name === "pokeball") {
        game.items[i].quantity -= 1;
        console.log(game.items[i], "decreases the pokeball quantity");
            }
          }
        }
    
  game.catchPokemon(pokemon[4]);
  console.log(game.items, "decreases the quantity")
  
  
  console.log("_____exersise 12_______");
  
  /*
  Exercise 12
  1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
   (change the value of `complete` in the qualifying objects from false to true).
  
  Solve Exercise 12 here:
  */
  const gyms_12 = game.gyms 
  for (let i = 0; i < gyms_12.length; i++) {
    if (gyms_12[i].difficulty < 6) {
        gyms_12[i].completed = true;
       };
  
  }
  console.log(gyms_12)
  
  console.log("===============exersice 13=======================")
  
  /*
  Exercise 13
  1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
  2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.
  
  This method should:
    - Not accept any arguments.
    - Initially create a constant `gymTally`, which is an object that has two 
      properties: `completed` and `incomplete`, both of which are initially set to 0.
    - Iterate through the objects in the `game.gyms` array and update the 
      properties on `gymTally` as follows: 
      - `completed` should count how many gyms in the array have a value of `true` 
        for their `completed` property. 
      - `incomplete` should count how many gyms in the array have a value of 
        `false` for their `completed` property.
    - Log the value of `gymTally`.
    - The method should not return anything.
  
  For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.
  
  Solve Exercise 13 here:
  */
  const gymTally = {completed: 0, incompleted: 0};
  game.gymStatus = function(){
    // game.gyms.push(gymTally);
    
    game.gyms.forEach(gym => {
      if (gym.completed) {
  gymTally.completed++;
      } else {
        gymTally.incompleted++;
      }
      
    });
    console.log(gymTally, "does the counting");
  };
  game.gymStatus();
  
  
  console.log("============================== Exercise 14 =================================");
  
  /*
  Exercise 14
  1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.
  
  This method should:
    - Not accept any arguments.
    - Count the number of Pokemon in the party.
    - return the found number of Pokemon in the party.
  
  Solve Exercise 14 here:
  */const pokemonCount = {pokemon: 0};
  game.partyCount = function(){
  game.party.forEach(party => {
  if (pokemon) {
    pokemonCount.pokemon++
  }
  });
  console.log(pokemonCount, "Exercise 14, almost there")
  }
  game.partyCount();
  
  console.log("============================== Exercise 15 =================================");
  
  /*
  Exercise 15
  1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
  (change the value of `complete` in the qualifying objects from false to true).
  
  Solve Exercise 15 here:
  */
  
  const gymDiffs = game.gyms;
  gymDiffs.forEach(gymDiff => {
  if(gymDiff.difficulty < 8) {
  gymDiff.completed = true
  } else {
    gymDiff.completed = false
  };
  });
  console.log(gymDiffs)
   
  console.log("============================== Exercise 16 =================================");
  
  /*
  Exercise 16
  1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.
  
  
  Solve Exercise 16 here:
  */
  
  console.log(game, "final changes")