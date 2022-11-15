import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
    });
  }

  login() {
    this.authService.login(this.form.value).subscribe((res) => {
      console.log(res);
    });
  }
}
