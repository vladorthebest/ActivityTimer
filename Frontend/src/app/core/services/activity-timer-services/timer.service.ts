import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Activity } from '../../interfaces/activity-timer-services/Activity';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private http: HttpClient) { }

  checkActivity(): Observable<Activity> {
    return this.http.get<Activity>('http://localhost:8000/timer/create/');
  }

  toggleActivity(): Observable<Activity> {
    return this.http.post<Activity>('http://localhost:8000/timer/create/', {});
  }

}
