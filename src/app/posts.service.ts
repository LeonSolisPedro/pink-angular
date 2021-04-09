import { Injectable } from '@angular/core';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }


  async getPosts(): Promise<any> {
    const result = await axios.get("https://pink-5ac5a.ue.r.appspot.com/api/posts")
    return result
  }
}
