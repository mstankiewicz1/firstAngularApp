import { Component } from "@angular/core";

export @Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>Navbar Component</h1>
               <p>Dummy paragraph</p>
               <button>Submit</button>
               `,
    styles: `h1{
        color: red;
        background: black;
        }`,
    templateUrl: './navbar.component.html'
})

class AppNavbar {

}