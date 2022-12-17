import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../interfaces/loginRequest';
import { RegisterRequest } from '../../interfaces/registerRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public cookieService: CookieService) {}

  login(user: LoginRequest): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8000/api/auth/login/',
      { username: user.login, password: user.password }
    );
  }

  register(newUser: RegisterRequest): Observable<any> {
    return this.http.post<{ userID: Number}>(
      'http://localhost:8000/api/auth/register/',
      { username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        password2: newUser.password,
       }
    );
  }

  isAuthenticated(): Observable<any> {
    return this.http.get<{ userID: Number}>(
      'http://localhost:8000/api/auth/ping/'
    );
  }
}
