import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall, faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faBasketballBall = faBasketballBall;
  faShareAlt = faShareAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
