new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [] //store seperate turns and then log to the page
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true; //initialize new game
      this.playerHealth = 100; //reset playerHealth on new game
      this.monsterHealth = 100; //same for monsterHealth
      this.turns = []; //reset the player log
    },
    attack: function(){
      var damage = this.calculateDamage(3, 10); //attack the monster
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      }); //unshift adds it as the first item in the array (push inserts into last)

      if (this.checkWin()){
        return; //if true, stop executing code
      }
      this.monsterAttacks();
    },
    specialAttack: function(){
      var damage = this.calculateDamage(3, 10); //attack the monster
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'CRITICAL HIT! Player hits Monster for ' + damage
      }); //unshift adds it as the first item in the array (push inserts into last)

      if (this.checkWin()){
        return;
      }
      this.monsterAttacks();
    },
    heal: function(){
      //we don't want to have more than max health, consider this in if()
      if (this.playerHealth <= 90){
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      }); //unshift adds it as the first item in the array (push inserts into last)


      this.monsterAttacks();
    },
    giveUp: function(){
      this.gameIsRunning = false;
    },
    monsterAttacks: function() {
      //we want the monster to be stronger, reassign the vars inside the function
      //we use 5 and 12 instead
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      })
      this.checkWin(); //no need to return, because nothing happens after calling this function
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min); //no between 0 - 10 where minimum is 3
    },
    checkWin: function(){
      if (this.monsterHealth <= 0) { //if you killed the monster, you won
        if (confirm('You won! New game?')){ //built in javascript function
          this.startGame();
        } else {
            this.gameIsRunning = false;
          }
          return true;

        } else if (this.playerHealth <= 0){
            if (confirm('You lost! New game?')){ //built in javascript function
              this.startGame();
            } else {
              this.gameIsRunning = false;
          }
          return true;
      }
      return false;
    }
  }
});
