import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../interfaces/loginRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public cookieService: CookieService) {}

  login(user: LoginRequest): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8000/api/auth/login/',
      { username: user.login, password: user.password },
      {
        withCredentials: true,
      }
    );
  }
}
