import {
  Component,
  OnInit,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  counter;
  gameCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    console.log('game started', this.gameStarted);
    this.counter = setInterval(() => {
        this.gameStarted.emit(this.gameCounter + 1);
        this.gameCounter++;
        }, 1000);
  };

  onGameStop() {
    console.log('game stopped');
    clearInterval(this.counter);
    this.gameCounter = 0;
    // this.gameStarted.complete();
  }
}
