import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityTimerRoutingModule } from './activity-timer-routing.module';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    RouterModule,
    ActivityTimerRoutingModule
  ],
  exports: [ActivityTimerRoutingModule, RouterModule],
})
export class ActivityTimerModule { }
