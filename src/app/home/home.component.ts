import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

// import { QuoteService } from './quote.service';
import { School, SchoolService } from './school.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // quote: string | undefined;
  schoolArray: Array<School> | undefined;
  isLoading = false;

  // constructor(private quoteService: QuoteService) {}
  constructor(private schoolService: SchoolService) {}

  ngOnInit() {
    // Show Loading Screen.
    this.isLoading = true;

    this.schoolService
      .listSchools()
      .pipe(
        finalize(() => {
          // Stop loading, regardless the result.
          this.isLoading = false;
        })
      )
      .subscribe((downloadedSchools: Array<School>) => {
        this.schoolArray = downloadedSchools;
      });

    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
  }
}
