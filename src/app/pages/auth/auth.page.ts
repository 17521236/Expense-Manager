import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { ROUTER_CONST } from 'src/app/core/router.config';
import { AuthService, User } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {

  pending = false;
  action = 1;;
  form: FormGroup = this.fb.group({
    email: "",
    password: ""
  })

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // setInterval(() => { console.log(new Date().getTime()) }, 1000);
  }
  onSubmit() {
    if (this.form.valid) {
      this.pending = true;
      this.authService.login(this.form.value).subscribe((res: User) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.authService.state = res;
        this.router.navigate([ROUTER_CONST.DASHBOARD]);
        this.pending = false;
      }, _ => {
        this.pending = false;
      })
    }
  }
  switch() {
    this.action = this.action == 1 ? 2 : 1;
  }

}

