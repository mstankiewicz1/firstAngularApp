import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, elementAt, filter, first, from, last, Observable, of, take, takeLast, takeWhile } from 'rxjs';

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
      filter((v) => this.checkCharCount(v))
      // takeLast(2),
      // take(2),
      // takeWhile((v) => this.checkCondition(v)),
      // debounceTime(3000)
    ).subscribe(data => {
      console.log(data);
      // this.category$.pipe(
        // takeLast(2)
        // first()
        // last()
      //   elementAt(1)
      // ).subscribe(data => {
      //   console.log(data);
      // })
    })
  }

  checkCharCount(v) {
    return v.length < 10 ? true : false;
  }

  checkCondition(value) {
    return value.length > 5 ? false : true
  }

  // readValue() {

  // }

}
