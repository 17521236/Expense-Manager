import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {

  pageIndex = 0;// 0: form singIn   1: form register 

  user: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  onSubmit(form) {
    if (this.pageIndex === 0) {
      this.userService.login(this.user);
    } else {
      console.log('register')
      this.userService.register(this.user).subscribe(res => console.log(res), err => console.log(err));
    }
  }
}

export class User {
  email: string;
  password: string;
}

