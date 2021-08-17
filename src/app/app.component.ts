import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queens-attack';

  whiteRow : number;
  whiteCol : number;
  blackRow : number;
  blackCol : number;
  canAttack : boolean;
  samePos : boolean;
  result;

  constructor(){

  }

  ngOnInit(): void{
    this.createChessBoard();
  }

  checkQueenAttack(){
    this.checkIfWhiteRowValid();
    this.checkIfWhiteColValid();
    this.checkIfBlackRowValid();
    this.checkIfBlackColValid();

		if(this.whiteCol == this.blackCol && this.whiteRow == this.blackRow){
      this.samePos = true;
      this.result = 'Both the queens cannot be in same position';
      return this.canAttack =  false;
    }
    	
      
    // If queen and the opponent are in the same row
    if (this.whiteRow == this.blackRow){
      this.result = 'Queens can attack each other';
      return this.canAttack =   true;
    }
        
 
    // If queen and the opponent are in the same column
    if (this.whiteCol == this.blackCol){
      this.result = 'Queens can attack each other';
      return this.canAttack =   true;
    }
        
 
    // If queen can attack diagonally
    if (Math.abs(this.whiteRow - this.blackRow) == Math.abs(this.whiteCol - this.blackCol)){
      this.result = 'Queens can attack each other';
      return this.canAttack =   true;
    }
 
    // Opponent is safe
    this.result = 'Queens cannot attack each other';
    return this.canAttack =  false;

  }

  checkIfWhiteRowValid() {
    let isValid = this.checkIfValid(this.whiteRow);
    if(!isValid){
      this.whiteRow = null;
    }
  }
  checkIfWhiteColValid() {
    let isValid = this.checkIfValid(this.whiteCol);
    if(!isValid){
      this.whiteCol = null;
    }
  }
  checkIfBlackRowValid() {
    let isValid = this.checkIfValid(this.blackRow);
    if(!isValid){
      this.blackRow = null;
    }
  }
  checkIfBlackColValid() {
    let isValid = this.checkIfValid(this.blackCol);
    if(!isValid){
      this.blackCol = null;
    }
  }
  checkIfValid(input){
    this.samePos = false;
    this.canAttack = null;
    this.result = '';
    if(input < 1 || input > 8){
      alert('Please Enter row and column between 1 and 8');
      return false;
    }
    return true;
  }

  createChessBoard(){
    const board = document.querySelector(".board");
    const boardLetters = document.querySelector(".letters");
    const boardNumbers = document.querySelector('.numbers');

    let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let index = 0;
    let black = false;
    let num = 1;
    
    for(let i=0; i < 8; i++){
      let letter = document.createElement('li');
      letter.textContent = letters[i];
      boardLetters.appendChild(letter);
      let numbers = document.createElement('li');
      numbers.textContent = num++ + "";
      boardNumbers.appendChild(numbers);
    }

    for(let i=0; i<=  64; i++){
      const square = document.createElement("div");
      if (black){
        square.classList.add("square");
        square.classList.add("black");
        index++;
        black = !black;
      } else {
        square.classList.add("square");
        square.classList.add("white");
        index++;
        black = !black;
      }

      board.appendChild(square);
      if(index === 8){
        black = !black;
        index = 0;
      }
      
    }

  }
}

