import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css'
})
export class RxjsLearningComponent {

  agents: Observable<string>;
  agentName: string;

  constructor(){}

  ngOnInit() : void {
    this.agents =  new Observable(
      function(observer) {
        try {
          observer.next('Ram');
          observer.next('Mark');
          observer.next('Sita');
        } catch(e) {
          observer.error(e);
        }
      }
    );
    this.agents.subscribe(data => {
      this.agentName = data;
    })
  }

}
