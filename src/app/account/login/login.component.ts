import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async checkLogin(formData: any) {
    try {
      await this.accountService.login(formData.login, formData.password);
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }
}
