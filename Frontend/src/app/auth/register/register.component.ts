import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth-services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
  });
  
  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.form.value).subscribe((res) => {
      console.log(res);
    });
  }
}
