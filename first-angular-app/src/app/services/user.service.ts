import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
    users: Array<any> = [
        { id: 1, name: 'John', age: 20, email: 'john@gmail.com' },
        { id: 2, name: 'Sam', age: 30, email: 'sam@gmail.com' },
        { id: 3, name: 'Smith', age: 40, email: 'smith@gmail.com' },
        { id: 4, name: 'Raj', age: 0, email: 'raj@gmail.com' },
      ]

      constructor() {
        console.log('User service new instance created');
        
      }
}