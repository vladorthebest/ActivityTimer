import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/core/services/activity-timer-services/timer.service';
import { WatchService } from 'src/app/core/services/activity-timer-services/watch';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private timerService: TimerService, public watchService: WatchService) { }

  activity: Boolean = false;

  ngOnInit(): void {
    this.timerService.checkActivity().subscribe((res) => {
      if (res.activity_status) { 
        this.activity = true;
        this.watchService.stopwatch(Date.now() - Date.parse(res.time_start));
      } 
    });
  }

  toggleActivity() {
    this.timerService.toggleActivity().subscribe((res) => {
      this.activity = !this.activity;
      if (!this.activity) { 
        this.watchService.zeroWatch()
      }
      else{
        this.watchService.stopwatch(0);
      }
      
    });
  }

}
