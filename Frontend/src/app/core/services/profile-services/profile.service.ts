import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProfileRequest } from '../../interfaces/profile/profileRequest';
import { ProfileResponse } from '../../interfaces/profile/profileResponse';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  profileGet(): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(
      'http://localhost:8000/profile/'
    );
  }

  profileUpdate(profileRequest: ProfileRequest): Observable<ProfileResponse> { 
    return this.http.put<ProfileResponse>(
      'http://localhost:8000/profile/', 
      profileRequest
    );
  }
}
