import { Component, ViewChild, AfterViewInit, ViewContainerRef, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgClass, NgComponentOutlet, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from "./card/card.component";
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AppNavbar, 
    HeaderComponent, 
    CardComponent, 
    FormsModule, 
    NgIf, 
    NgTemplateOutlet, 
    NgFor, 
    NgSwitch, 
    NgSwitchCase, 
    NgSwitchDefault, 
    NgStyle, 
    NgClass, 
    PostsListComponent, 
    CardComponent,
    NgComponentOutlet,
    ProfileComponent,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    SlicePipe,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent implements AfterViewInit {
  export class AppComponent {
  // title: string =  'this loaded dynamically';
  // imgUrl: string = 'https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png'
  // isDisabled: boolean = true;
  // isActive: boolean = true;
  // fruitName: string = 'Apple';

  // // userName: string = 'John Doe';
  // textValue: string = 'Value is coming from component'

  // buttonClick() {
  //   console.log('button click')
  // }

  // onKeyup() {
  //   console.log(this.textValue);
  // }

  // keyEnter(event: any) {
  //   console.log(event.keyCode);
  //   if(event.keyCode == 13) {
  //     console.log("Enter key pressed");
  //   }
  // }
  // keyupFiltering(user:HTMLInputElement) {
  //   console.log(user.id);
  // }

  // updateUserName(username:HTMLInputElement) {
  //   this.userName = username.value;
  //   console.log(this.userName);
  // }

  // // directives

  // isLoggedIn: boolean = false;
  // userName: string = 'John Doe';

  // // multiple conditions
  // isAdmin: boolean = false;
  // isMember: boolean = false;
  // isGuest: boolean = true;

  // loginCount: number = 0;

  // userRole: string = "Admin1"

  // countLoginAttempts() {
  //   this.loginCount++;
  //   console.log(this.loginCount)
  // }

  // users: Array<string> = ['John', 'Sam', 'Smith', 'Raj'];

  // usersObj: Array<any> = [
  //   { id: 1, name: 'John', email: 'john@gmail.com' },
  //   { id: 2, name: 'Sam', email: 'sam@gmail.com' },
  //   { id: 3, name: 'Smith', email: 'smith@gmail.com' },
  //   { id: 4, name: 'Raj', email: 'raj@gmail.com' },
  // ]

  //   users: Array<any> = [
  //   { id: 1, name: 'John', age: 20, email: 'john@gmail.com' },
  //   { id: 2, name: 'Sam', age: 30, email: 'sam@gmail.com' },
  //   { id: 3, name: 'Smith', age: 40, email: 'smith@gmail.com' },
  //   { id: 4, name: 'Raj', age: 0, email: 'raj@gmail.com' },
  // ]

  // usersObj: Array<any> = [];

  // constructor() {
  //   console.log(this.usersObj.length);
  // }

  // addNewUser() {
  //   let user = {
  //     id: 5,
  //     name: 'User1',
  //     email: 'user1@gmail.com'
  //   }
  //   this.usersObj.push(user);
  // }

  // onDelete(user: object) {
  //   let index = this.usersObj.indexOf(user);
  //   this.usersObj.splice(index, 1);
  // }

  // onDelete(index: number) {
  //   this.usersObj.splice(index, 1);
  // }

  // usersRole: string = ''
  // isLoggedIn: boolean = true

  // appPostTitle: string = 'Post 1'
  // appIsLogin: boolean = false;

  // @ViewChild(PostsListComponent) childMessage: any;
  // message: string = '';
  // messageFromChild: string = '';

  // constructor() {
  //   console.log(this.childMessage);
  // }

  // ngAfterViewInit() {
  //   console.log(this.childMessage);
  //   this.message = this.childMessage.childMessage;
  // }

  // reciveMessage(message: string) {
  //   console.log(message);
  //   this.messageFromChild = message;
  // }

  // userName: string = 'John Doe';

  // title: string = 'ANGULAR APP'
  // today = new Date();

  // user: any = {
  //   name: 'John Doe',
  //   age: 30,
  //   email: 'johndoe@gmail.com'
  // }

  userService: any;

  constructor(private userServiceDI: UserService) {
    this.userService = userServiceDI;
    // console.log(this.userService);
  }

  // uppercase() {
  //   this.title = this.title.toUpperCase();
  // }



  // loadComponent() {
  //   this.viewContainer.createComponent(ProfileComponent);
  // }

  // removeComponent() {
  //   this.viewContainer.remove();
  // }

  // changeUser() {
  //   this.userName = 'John Smith'
  // }

  // convertJson() {
  //   this.user = JSON.stringify(this.user);
  // }

  formSubmit( event: any ) {
    console.log("Form Submit");
    console.log(event.value);
  }

  getValue(fullName: any) {
    console.log(fullName);
    

  }
  

}
