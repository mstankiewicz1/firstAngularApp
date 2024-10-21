import { Component } from "@angular/core";

export @Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>Navbar Component</h1>
               <p>Dummy paragraph</p>
               <button>Submit</button>
               `,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

class AppNavbar {

}