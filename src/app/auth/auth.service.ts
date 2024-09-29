import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { User } from "./user.ts";

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private router: Router) {}
  userList: User[] = [];

  SignIn(email: string, password: string) {
    const usersList = this.getUsers();
    const foundUser = usersList.find(user => 
      user.email === email &&
      user.password === password
    );
    if (foundUser) {
      this.setLoggedIn(true);
      this.router.navigate(["/forecast"]);
    }
    else{
      alert("Invalid User!!!");
    }
  }
  SignOut() {
    this.setLoggedIn(false);
    this.router.navigate(["/signin"]);
  }
  SignUp(user: User){
    this.addUser(user);
  }

  isAuthenticated(): boolean   {
    const status = localStorage.getItem("isLoggedIn");
    return status == 'true';
  }

  // Method to set the user's logged-in status
  setLoggedIn(status: boolean) {
    localStorage.setItem("isLoggedIn", status.toString());
  }

  addUser(user: User){
    const userDetails = localStorage.getItem("userDetails");
    this.userList = userDetails ? JSON.parse(userDetails) : [];
    this.userList.push(user);
    localStorage.setItem("userDetails", JSON.stringify(this.userList));
  }

  getUsers(){
    const userDetails = localStorage.getItem("userDetails");
    this.userList = userDetails ? JSON.parse(userDetails) : [];
    return this.userList;
  }

}
