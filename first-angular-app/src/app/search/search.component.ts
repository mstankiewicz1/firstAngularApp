import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, first, from, Observable, of, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  // name: FormControl;

  categories = ['MObile', 'TV', 'Chargers', 'Headphones'];
  category$: Observable<string> = from(this.categories);

  contructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('start search')
    });
    this.searchForm.get('name').valueChanges
    .pipe(
      // takeLast(2),
      // take(2),
      // takeWhile((v) => this.checkCondition(v)),
      debounceTime(3000)
    ).subscribe(data => {
      console.log(data);
      this.category$.pipe(
        // takeLast(2)
        first()
      ).subscribe(data => {
        console.log(data);
      })
    })
  }

  checkCondition(value) {
    return value.length > 5 ? false : true
  }

  // readValue() {

  // }

}
