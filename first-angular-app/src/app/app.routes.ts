import { Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'rxjs-learning', component: RxjsLearningComponent }
    // {
    //     path: 'users',
    //     children: [
    //         { path: 'rxjs-learning', component: RxjsLearningComponent }
    //     ]
    // }
];
