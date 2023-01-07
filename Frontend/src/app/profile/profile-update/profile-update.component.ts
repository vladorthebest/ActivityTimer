import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/core/services/profile-services/profile.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  form: FormGroup = new FormGroup({
    bio: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  ngOnInit(): void {}

  profileUpdate(){
    this.profileService.profileUpdate(this.form.value).subscribe();
  }
  

}
