import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public cookieService: CookieService) { }

  login(): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8000/api/auth/login/',
      {
        username: 'vlador',
        password: '123',
      },
      {
        withCredentials: true,
      }
    );
  }
}
