import { Component, OnInit } from '@angular/core';
import { faTicketAlt, faCamera, faFont, faTabletAlt } from "@fortawesome/free-solid-svg-icons"
import { AuthService } from '../auth.service';
import { PostsService } from "../posts.service"

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
  posts

  constructor(public authService: AuthService, private postsService: PostsService) { }

  async ngOnInit(): Promise<void> {
    //El usuario está logueado
    if(this.authService.token){
      try {
        const result = await this.postsService.getPosts()
        this.posts = result.data
      } catch (error) {
        alert("Unable to load the posts section")
      }  
    }
  }

}
