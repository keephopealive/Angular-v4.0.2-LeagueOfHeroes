import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characterSelect: boolean = true;
  playerOne = null;
  playerTwo = null;
  playerOneHealth = 25;
  playerTwoHealth = 25;
  currentTurn = 1;

  playerOneCharacter(selection, event) {
    this.playerOne = selection;
  }

  playerTwoCharacter(selection) {
    this.playerTwo = selection;
  }

  battleCheck() {
    if (this.playerOne !== null && this.playerTwo !== null) {
      alert('Lets Battle!');
      this.characterSelect = false;
    }
  }

  attack(player: string) {
    this.nextTurn()
    const dmg = Math.floor(Math.random() * 10) + 1;
    if (player === 'playerOne') {
     this.playerOneHealth -= dmg;
    } else {
      this.playerTwoHealth -= dmg;
    }
    this.checkWin();
  }

  nextTurn() {
    if (this.currentTurn === 1) {
      this.currentTurn = 2;
    } else {
      this.currentTurn = 1;
    }
  }

  heal(player: string) {
    this.nextTurn();
    const dmg = Math.floor(Math.random() * 7) + 1;
    if (player === 'playerOne') {
     this.playerOneHealth += dmg;
    } else {
      this.playerTwoHealth += dmg;
    }
  }

  checkWin() {
    if (this.playerOneHealth <= 0) {
      alert(this.playerTwo + ' Wins!');
      this.reset();
    } else if (this.playerTwoHealth <= 0) {
      alert(this.playerOne + ' Wins!');
      this.reset();
    }
  }

  reset() {
    this.playerOne = null;
    this.playerTwo = null;
    this.characterSelect = true;
    this.playerOneHealth = 25;
    this.playerTwoHealth = 25;
  }

}
