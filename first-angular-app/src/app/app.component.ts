import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string =  'this loaded dynamically';
  imgUrl: string = 'https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png'
  isDisabled: boolean = true;
  isActive: boolean = true;
  fruitName: string = 'Apple';

  // userName: string = 'John Doe';
  textValue: string = 'Value is coming from component'

  buttonClick() {
    console.log('button click')
  }

  onKeyup() {
    console.log(this.textValue);
  }

  keyEnter(event: any) {
    console.log(event.keyCode);
    if(event.keyCode == 13) {
      console.log("Enter key pressed");
    }
  }
  keyupFiltering(user:HTMLInputElement) {
    console.log(user.id);
  }

  updateUserName(username:HTMLInputElement) {
    this.userName = username.value;
    console.log(this.userName);
  }

  // directives

  isLoggedIn: boolean = false;
  userName: string = 'John Doe';

  // multiple conditions
  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true;

  loginCount: number = 0;

  userRole: string = "Admin1"

  countLoginAttempts() {
    this.loginCount++;
    console.log(this.loginCount)
  }

}
