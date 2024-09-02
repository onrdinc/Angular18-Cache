import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  isStart = false;
  date =  new Date();
  timer = 1;
  dif: number = 0;
  constructor() { }

  private getTimeDif(){
    this.dif = this.date.getTime() - new Date().getTime();
  }

  startTimer(){
    if (!this.isStart) {
      this.date.setMinutes(
        this.date.getMinutes() + +this.timer        
      ) 
      this.getTimeDif();
      this.isStart = true;
    }
  }

  resetTimer(){
    this.getTimeDif();
    this.isStart = false;
  }

  getTime(){
    this.getTimeDif();
    return this.dif;
  }
}