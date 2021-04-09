import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser
  faSignOutAlt = faSignOutAlt
  navbarCollapsed = true;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  superLogout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
