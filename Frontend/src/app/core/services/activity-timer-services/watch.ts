import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchService {
  hh = 0;
  mm = 0;
  ss = 0;
  constructor() {}

  interval$ = interval(1000);
  sub: Subscription
  
  stopwatch(counter: number) {
    this.sub = this.interval$.subscribe((second_now) => {
      const second_start = Math.floor(counter / 1000);
      let second_all = second_now + second_start;
      if (second_all >= 360) {
        this.hh = Math.floor(second_all / 360);
        second_all -= 360 * this.hh;
      }
      if (second_all >= 60) {
        this.mm = Math.floor(second_all / 60);
        second_all -= 60 * this.mm;
      }
      this.ss = second_all;
    });
    // setInterval(() => {
    //   counter = counter / 1000;
    //
    //   this.ss = counter;
    // }, 100);
  }

  zeroWatch() {
    this.sub.unsubscribe()
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
  }
}
