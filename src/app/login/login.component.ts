import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }


  async onClickSubmit(data) : Promise<void> {
    const result = await this.authService.login(data.email, data.password);

    if(result === true){
      this.router.navigate(['/'])
    }

  }

}
