import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.submitted = false;
  }

  ngOnInit(): void {
    this.loginForm = this.buildForm();
  }

  get getvalue() {
    return this.loginForm['controls'];
  }

  buildForm() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res) => {
        console.log(res.token);
        this.authService.setToken(res.token);
      });
    }
    this.loginForm.reset();
  }
}
