import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/core/services/activity-timer-services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  checkActivity() {
    this.timerService.checkActivity().subscribe((res) => {
      console.log(res);
    });
  }

}
