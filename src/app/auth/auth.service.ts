import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string = "a";
  password: string = "a";

  constructor(private router: Router) {}

  SignIn(email: string, password: string) {
    if (this.email === email && this.password === password) {
      this.setLoggedIn(true);
      this.router.navigate(["/forecast"]);
    }
  }
  SignOut() {
    this.setLoggedIn(false);
    this.router.navigate(["/signin"]);
  }

  isAuthenticated(): boolean   {
    const status = localStorage.getItem("isLoggedIn");
    return status == 'true';
  }

  // Method to set the user's logged-in status
  setLoggedIn(status: boolean) {
    localStorage.setItem("isLoggedIn", status.toString());
  }

}
