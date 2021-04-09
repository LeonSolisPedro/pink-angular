import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  token: string;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  async login(email: string, password: string) : Promise<Boolean> {
    try {
      const result = await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      this.user = result
      this.token = await (await this.firebaseAuth.currentUser).getIdToken()
      axios.defaults.headers.common = {'Authorization': `Bearer ${this.token}`}
      alert(`Welcome ${result.user.email}`)
      return true
    } catch (error) {
      alert(error)
    }

    return false

  }

  logout() {
    this.firebaseAuth.signOut();
    this.user = null
    this.token = null
  }


}
