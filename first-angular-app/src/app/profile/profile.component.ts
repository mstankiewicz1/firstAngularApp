import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() pUserName: string = '';

  counter: number = 0;

  constructor() {
    // console.log('constructor method triggered');
    // console.log(this.pUserName);
  }

  ngOnInit() {
    // console.log('NgOnInit hook triggered');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('onChanges triggered');
  }

  ngDoCheck() {
    // console.log('ngDoCheck triggered');
  }

  incrementCounter() {
    this.counter ++;
  }

  ngAfterContentInit() {
    console.log('AfterContentInit content triggered');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked content triggered');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit triggered');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked triggered');
  }

  ngOnDestroy() {
    console.log('OnDestroy triggered');
  }
}
