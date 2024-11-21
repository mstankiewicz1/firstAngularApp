import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck {


  @Input() pUserName: string = '';

  counter: number = 0;

  constructor() {
    console.log('constructor method triggered');
    console.log(this.pUserName);
  }

  ngOnInit() {
    console.log('NgOnInit hook triggered');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges triggered');
  }

  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }

  incrementCounter() {
    this.counter ++;
  }
}
