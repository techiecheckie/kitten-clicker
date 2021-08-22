/*=====================================================================================
MISC HELPER FUNCTIONS
=======================================================================================*/
function get(item) {
  return document.getElementById(item);
}

function choose(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}


/*=====================================================================================
  GAME INITIALIZATION
=======================================================================================*/

var Game = {};
Game.Init = function() {

  /*=====================================================================================
		VARIABLES AND PRESETS
		=======================================================================================*/

    Game.numberOfKittens = 0;
    Game.kittensPerSecond = 0;
    Game.clickValue = 0; // How many kittens you get per click.

    Game.catFood = [{name: "milk", cost: 1, amt: 0}, {name: "kibble", cost: 10, amt: 0}, {name: "cream", cost: 100, amt: 0}, {name: "pate", cost: 1000, amt: 0}, {name: "tuna", cost: 10000, amt: 0}]

    // When we started playing.
    Game.startDate=parseInt(Date.now());

    window.onbeforeunload = function(event) {
      if (event) event.returnValue='Are you sure you want to close Cookie Clicker?';
    }

    /*=====================================================================================
	   Basic Functions
		=======================================================================================*/
    Game.calculateKittenNumber = function(add) {
      Game.numberOfKittens += add;
    }

    Game.updateKittensPerSecond = function() {
      for (var food in Game.catFood) {
        Game.kittensPerSecond += food.cost*food.amt;
      }
    }

    Game.buyCatFood = function(food) {
      Game.numberOfKittens-=food.cost;
      food.amt++;
      Game.updateKittensPerSecond();
    }

    Game.clickKitten = function() {
      Game.numberOfKittens += Game.clickValue;
    }

    /*=====================================================================================
	   ARMY NAME
		=======================================================================================*/
		Game.RandomArmyName = function()
		{
			return (Math.random()>0.05?(choose(['Tuff', 'Ruff', 'Rowdy']) + choose(['Kittums', 'Kattems', 'Kitty Poos']);
		}
		Game.GetArmyName = function() {return Game.RandomArmyName();}
		Game.armyName = Game.GetArmyName();

}
