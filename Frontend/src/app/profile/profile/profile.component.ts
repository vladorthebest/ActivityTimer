import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProfileResponse } from 'src/app/core/interfaces/profile/profileResponse';
import { ProfileService } from 'src/app/core/services/profile-services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  profile: ProfileResponse;
  
  ngOnInit(): void {
    if (this.profile == undefined){
      this.profileService.profileGet().subscribe(res => (this.profile = res))
    }   
  }

}
