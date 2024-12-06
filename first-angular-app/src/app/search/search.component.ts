import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { count, debounceTime, distinct, elementAt, filter, first, from, last, max, min, Observable, of, skip, take, takeLast, takeWhile } from 'rxjs';

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

  categories = ['MObile', 'TV', 'TV', 'Chargers', 'Chargers', 'Headphones'];
  category$: Observable<string> = from(this.categories);


  ranks = [1,2,3,4,5,6,33,76];
  rank$: Observable<number> = from(this.ranks);

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
      this.rank$
      .pipe(
        distinct(),
        // filter((v) => this.filterValues(v)),
        // max()
        filter((v) => this.filterValues(v)),
        min()
      )
      .subscribe(data => {
        // console.log(`Maximum value is: ` + data);
        console.log(`Minimum value is: ` + data);
      })
      this.category$.pipe(
        // distinct(),
        // skip(2)
        count()
      );
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

  filterValues(v) {
    return v.length < 10 ? true : false;
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
