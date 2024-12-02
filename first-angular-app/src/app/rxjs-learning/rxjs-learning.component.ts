import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css'
})
export class RxjsLearningComponent {

  // agents: Observable<string>;
  // agentName: string;

  studentList = ['Mark', 'Ram', 'Sita', 'Lisa'];
  students: Observable<string[]> = of(this.studentList)

  studentNames: Observable<string> = of('Ram');

  studentObj = {
    id: 10,
    name: 'Ram'
  }

  student$: Observable<any> = of(this.studentObj);

  ordersArr = ['Fashion', 'Electronics', 'Mobile', 'Household'];
  orders$: Observable<string> = from(this.ordersArr);

  orderName?: string;

  constructor(){
    // this.orderName = '';
  }

  ngOnInit() : void {

    // operators
    // this.students.subscribe(data => {
      // this.studentNames.subscribe(data => {
    // this.student$.subscribe(data => {
    //   console.log(data);
    // });
    this.orders$.subscribe(data => {
      console.log(data);
      setInterval(() => {
        this.orderName = data;
      }, 3000)
    });


    // 

    // this.agents =  new Observable(
    //   function(observer) {
    //     try {
    //       observer.next('Ram');
    //       setInterval(() => {
    //         observer.next('Mark');
    //       }, 3000)
    //       setInterval(() => {
    //         observer.next('Sita');
    //       }, 6000)
    //     } catch(e) {
    //       observer.error(e);
    //     }
    //   }
    // );
    // this.agents.subscribe(data => {
    //   this.agentName = data;
    // })
  }

}
