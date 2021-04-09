import { Component, OnInit } from '@angular/core';
import { faTicketAlt, faCamera, faFont, faTabletAlt } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faTicketAlt = faTicketAlt;
  faCamera = faCamera;
  faFont = faFont;
  faTabletAlt = faTabletAlt;

  constructor() { }

  ngOnInit(): void {
  }

}